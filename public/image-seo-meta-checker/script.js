(function () {
  const MAX_FILE_SIZE = 15 * 1024 * 1024;
  const GENERIC_FILE_PATTERN = /^(img|image|photo|picture|screenshot|dsc|pxl|scan|untitled|whatsapp|snap)([-_\s]?\d+)?$/i;
  const SUPPORTED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
  const SOCIAL_TARGETS = [
    { label: "Google Discover", width: 1200, height: null, type: "min-width", note: "1200px wide minimum" },
    { label: "Open Graph / Facebook / LinkedIn", width: 1200, height: 630, type: "exact", note: "1200 x 630" },
    { label: "X / Twitter card", width: 1200, height: 675, type: "exact", note: "1200 x 675" },
    { label: "Instagram square", width: 1080, height: 1080, type: "exact", note: "1080 x 1080" },
    { label: "Instagram portrait", width: 1080, height: 1350, type: "exact", note: "1080 x 1350" },
    { label: "Pinterest vertical", width: 1000, height: 1500, type: "exact", note: "1000 x 1500" },
    { label: "Website hero image", width: 1600, height: 900, type: "exact", note: "1600 x 900" },
    { label: "Blog featured image", width: 1200, height: 675, type: "exact", note: "1200 x 675" }
  ];

  const state = {
    currentAnalysis: null
  };

  const refs = {
    body: document.body,
    tabs: Array.from(document.querySelectorAll(".mode-tab")),
    panels: {
      upload: document.getElementById("upload-panel"),
      url: document.getElementById("url-panel")
    },
    topicInput: document.getElementById("image-topic"),
    dropZone: document.getElementById("drop-zone"),
    fileInput: document.getElementById("file-input"),
    pickFileButton: document.getElementById("pick-file-button"),
    imageUrlInput: document.getElementById("image-url"),
    analyzeUrlButton: document.getElementById("analyze-url-button"),
    resetButton: document.getElementById("reset-button"),
    copyButton: document.getElementById("copy-button"),
    downloadButton: document.getElementById("download-button"),
    statusBox: document.getElementById("status-box"),
    previewImage: document.getElementById("image-preview"),
    previewFrame: document.getElementById("preview-frame"),
    previewState: document.getElementById("preview-state"),
    results: document.getElementById("results"),
    overview: document.getElementById("image-overview"),
    scoreValue: document.getElementById("seo-score-value"),
    scoreLabel: document.getElementById("seo-score-label"),
    scoreBarFill: document.getElementById("score-bar-fill"),
    scoreReasons: document.getElementById("score-reasons"),
    altSuggestions: document.getElementById("alt-suggestions"),
    sizeComparison: document.getElementById("size-comparison"),
    performanceRecommendations: document.getElementById("performance-recommendations")
  };

  function init() {
    refs.tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));
    refs.pickFileButton.addEventListener("click", () => refs.fileInput.click());
    refs.fileInput.addEventListener("change", handleFileSelection);
    refs.analyzeUrlButton.addEventListener("click", handleUrlAnalysis);
    refs.resetButton.addEventListener("click", resetAnalysis);
    refs.copyButton.addEventListener("click", copyRecommendations);
    refs.downloadButton.addEventListener("click", downloadReport);

    refs.dropZone.addEventListener("dragover", handleDragOver);
    refs.dropZone.addEventListener("dragleave", handleDragLeave);
    refs.dropZone.addEventListener("drop", handleDrop);
    refs.dropZone.addEventListener("keydown", handleDropZoneKeyboard);
  }

  function setMode(mode) {
    refs.tabs.forEach((tab) => {
      const active = tab.dataset.mode === mode;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    refs.panels.upload.classList.toggle("is-active", mode === "upload");
    refs.panels.url.classList.toggle("is-active", mode === "url");
  }

  function handleDragOver(event) {
    event.preventDefault();
    refs.dropZone.classList.add("is-over");
  }

  function handleDragLeave() {
    refs.dropZone.classList.remove("is-over");
  }

  function handleDrop(event) {
    event.preventDefault();
    refs.dropZone.classList.remove("is-over");

    const file = event.dataTransfer && event.dataTransfer.files ? event.dataTransfer.files[0] : null;
    if (file) {
      analyzeFile(file);
    }
  }

  function handleDropZoneKeyboard(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      refs.fileInput.click();
    }
  }

  function handleFileSelection(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      analyzeFile(file);
    }
  }

  async function analyzeFile(file) {
    resetStatus();

    const type = file.type || mimeFromFilename(file.name);
    if (!type || !SUPPORTED_TYPES.has(type)) {
      setStatus("Unsupported format. Please upload a JPG, JPEG, PNG, WebP or GIF image.", "error");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setStatus("File is larger than 15 MB. Please choose a smaller image.", "error");
      return;
    }

    setStatus("Analyzing uploaded image locally...", "warning");

    try {
      const loaded = await loadImage(file);
      const analysis = buildAnalysis({
        source: "upload",
        previewUrl: loaded.previewUrl,
        fileName: file.name,
        fileType: type,
        fileSizeBytes: file.size,
        width: loaded.width,
        height: loaded.height,
        topic: refs.topicInput.value.trim()
      });
      renderAnalysis(analysis);
      setStatus("Image loaded successfully. Review the SEO and performance recommendations below.", "success");
    } catch (error) {
      setStatus("The image could not be read. Please try another file.", "error");
    }
  }

  async function handleUrlAnalysis() {
    const rawUrl = refs.imageUrlInput.value.trim();
    if (!rawUrl) {
      setStatus("Enter an image URL to analyze.", "error");
      return;
    }

    let url;
    try {
      url = new URL(rawUrl);
    } catch (error) {
      setStatus("Please enter a valid image URL.", "error");
      return;
    }

    setStatus("Loading image URL and checking what the browser can read...", "warning");

    try {
      const headInfo = await fetchHeadInfo(url.href);
      const loaded = await loadImage(url.href);
      const fileName = extractFileName(url);
      const analysis = buildAnalysis({
        source: "url",
        previewUrl: loaded.previewUrl,
        fileName,
        fileType: headInfo.mimeType || mimeFromFilename(fileName),
        fileSizeBytes: headInfo.fileSizeBytes,
        width: loaded.width,
        height: loaded.height,
        topic: refs.topicInput.value.trim(),
        notices: headInfo.notices
      });
      renderAnalysis(analysis);
      setStatus("External image loaded. Some technical details may be limited by browser security rules.", "success");
    } catch (error) {
      setStatus("The image URL could not be loaded. Check the URL, file type or external site permissions.", "error");
    }
  }

  async function fetchHeadInfo(url) {
    const notices = [];
    let mimeType = "";
    let fileSizeBytes = null;

    try {
      const response = await fetch(url, { method: "HEAD", mode: "cors" });
      if (response.ok) {
        mimeType = response.headers.get("content-type") || "";
        const sizeHeader = response.headers.get("content-length");
        fileSizeBytes = sizeHeader ? Number(sizeHeader) : null;
      } else {
        notices.push("External URL responded, but metadata headers were not fully available.");
      }
    } catch (error) {
      notices.push("File size may not be available for external URLs because of browser security restrictions.");
    }

    if (!fileSizeBytes) {
      notices.push("File size may not be available for external URLs because of browser security restrictions.");
    }

    return { mimeType, fileSizeBytes, notices };
  }

  function loadImage(source) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      let previewUrl = "";

      image.onload = function () {
        resolve({
          width: image.naturalWidth,
          height: image.naturalHeight,
          previewUrl
        });
      };

      image.onerror = function () {
        if (previewUrl.startsWith("blob:")) {
          URL.revokeObjectURL(previewUrl);
        }
        reject(new Error("Image failed to load"));
      };

      if (source instanceof File) {
        previewUrl = URL.createObjectURL(source);
      } else {
        previewUrl = source;
        image.crossOrigin = "anonymous";
      }

      image.src = previewUrl;
    });
  }

  function buildAnalysis(input) {
    const cleanFileName = stripExtension(input.fileName);
    const topic = normalizeTopic(input.topic);
    const aspectRatio = simplifyRatio(input.width, input.height);
    const seoFileName = analyzeFilename(cleanFileName, topic);
    const altSuggestions = buildAltSuggestions(seoFileName, topic, input.width, input.height);
    const sizeChecks = compareAgainstTargets(input.width, input.height, input.fileSizeBytes);
    const recommendations = buildRecommendations({
      fileType: input.fileType,
      fileSizeBytes: input.fileSizeBytes,
      width: input.width,
      height: input.height,
      seoFileName,
      topic,
      sizeChecks
    });
    const score = calculateScore({
      fileType: input.fileType,
      fileSizeBytes: input.fileSizeBytes,
      width: input.width,
      height: input.height,
      seoFileName,
      topic,
      altSuggestions
    });

    return {
      source: input.source,
      previewUrl: input.previewUrl,
      fileName: input.fileName,
      fileType: formatMimeLabel(input.fileType),
      fileSizeBytes: input.fileSizeBytes,
      width: input.width,
      height: input.height,
      aspectRatio,
      seoFileName,
      suggestedName: seoFileName.suggestedName,
      altSuggestions,
      sizeChecks,
      recommendations,
      score,
      notices: input.notices || []
    };
  }

  function analyzeFilename(name, topic) {
    const normalized = slugify(name);
    const reasons = [];
    let descriptive = true;

    if (/\s/.test(name)) {
      reasons.push("File name uses spaces. Hyphens are usually cleaner for publishing workflows.");
    }

    if (/[^a-z0-9._\-\s]/i.test(name)) {
      reasons.push("File name contains unusual characters. Keep names simple and readable.");
      descriptive = false;
    }

    if (GENERIC_FILE_PATTERN.test(name.replace(/\.[^.]+$/, ""))) {
      reasons.push("File name looks generic. Replace camera-style names with descriptive words.");
      descriptive = false;
    }

    const words = normalized.split("-").filter(Boolean);
    if (words.length < 2) {
      reasons.push("File name is short or vague. Add more descriptive words if the image is important.");
      descriptive = false;
    }

    if (topic && !normalized.includes(topic.primarySlug)) {
      reasons.push("The target topic does not appear in the file name. A clearer image-topic match may help organization and context.");
    }

    const suggestedTokens = [];
    if (topic) {
      suggestedTokens.push(topic.primarySlug);
    }

    words.forEach((word) => {
      if (!GENERIC_FILE_PATTERN.test(word) && !suggestedTokens.includes(word)) {
        suggestedTokens.push(word);
      }
    });

    const suggestedName = (suggestedTokens.slice(0, 8).join("-") || "optimized-image").replace(/-+/g, "-");

    return {
      descriptive,
      normalized,
      suggestedName,
      reasons
    };
  }

  function buildAltSuggestions(fileNameData, topic, width, height) {
    const baseWords = fileNameData.normalized.split("-").filter(Boolean);
    const readableName = toTitleCase(baseWords.join(" ")) || "image";
    const topicText = topic ? topic.readable : "";
    const visualHint = width >= height ? "landscape image" : "portrait image";

    const shortText = trimToLength(
      topicText ? `${readableName} for ${topicText}` : `${readableName} ${visualHint}`,
      125
    );
    const descriptiveText = topicText
      ? `${readableName} related to ${topicText}.`
      : `${readableName} shown as a ${visualHint}.`;
    const seoFriendlyText = topicText
      ? `${readableName} used in content about ${topicText}.`
      : `${readableName} prepared for web publishing.`;

    return [
      { label: "Short alt text", text: sentenceCase(shortText) },
      { label: "Descriptive alt text", text: sentenceCase(descriptiveText) },
      { label: "SEO-friendly alt text", text: sentenceCase(seoFriendlyText) }
    ];
  }

  function compareAgainstTargets(width, height, fileSizeBytes) {
    return SOCIAL_TARGETS.map((target) => {
      const currentRatio = width / height;
      let status = "good-fit";
      let notes = "Dimensions are a practical fit.";

      if (target.type === "min-width") {
        if (width < target.width) {
          status = "too-small";
          notes = `Current width is below the ${target.width}px recommendation.`;
        } else if (width > target.width * 2) {
          status = "too-large-heavy";
          notes = "Current width may be larger than needed for this placement.";
        }
      } else {
        const targetRatio = target.width / target.height;
        const ratioDifference = Math.abs(currentRatio - targetRatio);
        const widthGap = width - target.width;
        const heightGap = height - target.height;

        if (width < target.width || height < target.height) {
          status = "too-small";
          notes = "Current image is smaller than the recommended target.";
        } else if (ratioDifference > 0.18) {
          status = "needs-resizing";
          notes = "Aspect ratio differs enough that the image may crop awkwardly.";
        } else if (widthGap > target.width * 0.7 || heightGap > target.height * 0.7) {
          status = "too-large-heavy";
          notes = "Current image may be larger and heavier than needed.";
        }
      }

      if (fileSizeBytes && fileSizeBytes > 1_000_000 && status === "good-fit") {
        status = "too-large-heavy";
        notes = "Dimensions are usable, but the file may still be heavier than needed.";
      }

      return {
        label: target.label,
        target: target.note,
        status,
        notes
      };
    });
  }

  function buildRecommendations(input) {
    const recommendations = [];
    const sizeInKb = input.fileSizeBytes ? Math.round(input.fileSizeBytes / 1024) : null;
    const ratio = input.width / input.height;

    if (!input.fileType.includes("WebP") && !input.fileType.includes("AVIF")) {
      recommendations.push("Convert to WebP or AVIF when possible for a lighter publishing copy.");
    }

    if (sizeInKb && sizeInKb > 350) {
      recommendations.push("Compress large images before publishing to improve website performance.");
    }

    if (!input.seoFileName.descriptive) {
      recommendations.push("Use descriptive file names instead of generic camera or screenshot names.");
    }

    if (input.topic) {
      recommendations.push("Add meaningful alt text that matches the visible image and the target topic.");
    } else {
      recommendations.push("Add meaningful alt text based on the real image context instead of leaving the description generic.");
    }

    recommendations.push("Serve responsive images using srcset when the page layout needs multiple breakpoints.");
    recommendations.push("Lazy-load images below the fold to reduce early page weight.");

    if (input.width > 2200 || input.height > 2200) {
      recommendations.push("Avoid uploading oversized images when the page placement does not need them.");
    }

    recommendations.push("Define width and height attributes to reduce layout shift.");

    if (ratio > 2.2 || ratio < 0.55) {
      recommendations.push("Check crop and aspect ratio against the real publishing placement before upload.");
    }

    const socialMisses = input.sizeChecks.filter((item) => item.status !== "good-fit").length;
    if (socialMisses > 2) {
      recommendations.push("Create dedicated social crops instead of reusing one image everywhere.");
    }

    return uniqueStrings(recommendations);
  }

  function calculateScore(input) {
    let score = 100;
    const reasons = [];
    const sizeInKb = input.fileSizeBytes ? Math.round(input.fileSizeBytes / 1024) : null;

    if (sizeInKb == null) {
      score -= 4;
      reasons.push("External file size was not available, so the score is slightly conservative.");
    } else if (sizeInKb > 1200) {
      score -= 26;
      reasons.push("File size is very heavy for most web contexts.");
    } else if (sizeInKb > 600) {
      score -= 16;
      reasons.push("File size is heavier than needed for many pages.");
    } else if (sizeInKb > 350) {
      score -= 8;
      reasons.push("Compression could likely improve loading speed.");
    } else {
      reasons.push("File size looks practical for many web publishing cases.");
    }

    if (input.width < 1200) {
      score -= 12;
      reasons.push("Width may be too small for Google Discover or social preview use.");
    } else {
      reasons.push("Dimensions can support several common publishing placements.");
    }

    if (!input.seoFileName.descriptive) {
      score -= 18;
      reasons.push("File name is not very descriptive yet.");
    } else {
      reasons.push("File name is reasonably descriptive and readable.");
    }

    if (input.fileType.includes("GIF")) {
      score -= 10;
      reasons.push("GIF is rarely the best format for static image SEO and page performance.");
    } else if (input.fileType.includes("PNG")) {
      score -= 6;
      reasons.push("PNG is useful in some cases, but can be heavier than needed for photos.");
    } else if (input.fileType.includes("WebP")) {
      reasons.push("Format is already strong for modern web publishing.");
    }

    if (input.topic && input.seoFileName.normalized.includes(input.topic.primarySlug)) {
      reasons.push("Topic alignment is reflected in the file naming.");
    } else if (input.topic) {
      score -= 8;
      reasons.push("Target topic is not reflected clearly in the current file name.");
    } else {
      score -= 4;
      reasons.push("Adding a target topic would improve naming and alt text guidance.");
    }

    const socialMisses = input.sizeChecks.filter((item) => item.status !== "good-fit").length;
    if (socialMisses >= 4) {
      score -= 10;
      reasons.push("Current dimensions are a weak fit for several common publishing placements.");
    } else if (socialMisses >= 2) {
      score -= 4;
      reasons.push("The image works for some placements but would benefit from dedicated crops.");
    } else {
      reasons.push("The image is a reasonable fit for several common placements.");
    }

    return {
      value: Math.max(0, Math.min(100, Math.round(score))),
      label: scoreLabel(score),
      reasons: reasons.slice(0, 5)
    };
  }

  function renderAnalysis(analysis) {
    state.currentAnalysis = analysis;
    refs.results.hidden = false;
    refs.copyButton.disabled = false;
    refs.downloadButton.disabled = false;

    refs.previewImage.src = analysis.previewUrl;
    refs.previewImage.hidden = false;
    refs.previewState.textContent = analysis.source === "upload" ? "Uploaded image" : "External image";
    refs.previewFrame.querySelector(".preview-placeholder")?.setAttribute("hidden", "hidden");

    refs.overview.innerHTML = "";
    [
      ["File name", analysis.fileName],
      ["File type", analysis.fileType || "Unavailable"],
      ["File size", formatBytes(analysis.fileSizeBytes)],
      ["Dimensions", `${analysis.width} × ${analysis.height}`],
      ["Aspect ratio", analysis.aspectRatio],
      ["SEO-friendly name", analysis.seoFileName.descriptive ? "Mostly yes" : "Needs improvement"],
      ["Suggested file name", analysis.suggestedName],
      ["Metadata note", analysis.notices[0] || "Basic browser-visible checks only"]
    ].forEach(([label, value]) => {
      const block = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      block.appendChild(dt);
      block.appendChild(dd);
      refs.overview.appendChild(block);
    });

    refs.scoreValue.textContent = String(analysis.score.value);
    refs.scoreLabel.textContent = analysis.score.label;
    refs.scoreBarFill.style.width = `${analysis.score.value}%`;
    refs.scoreReasons.innerHTML = analysis.score.reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("");

    refs.altSuggestions.innerHTML = analysis.altSuggestions
      .map(
        (item) => `
          <article class="alt-card">
            <p class="alt-card-title">${escapeHtml(item.label)}</p>
            <p class="alt-card-text">${escapeHtml(item.text)}</p>
          </article>
        `
      )
      .join("");

    refs.sizeComparison.innerHTML = analysis.sizeChecks
      .map(
        (item) => `
          <tr>
            <td>${escapeHtml(item.label)}</td>
            <td>${escapeHtml(item.target)}</td>
            <td><span class="status-tag ${item.status}">${formatStatus(item.status)}</span></td>
            <td>${escapeHtml(item.notes)}</td>
          </tr>
        `
      )
      .join("");

    refs.performanceRecommendations.innerHTML = analysis.recommendations
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
  }

  function resetAnalysis() {
    if (state.currentAnalysis && state.currentAnalysis.previewUrl && state.currentAnalysis.previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(state.currentAnalysis.previewUrl);
    }

    state.currentAnalysis = null;
    refs.fileInput.value = "";
    refs.imageUrlInput.value = "";
    refs.results.hidden = true;
    refs.copyButton.disabled = true;
    refs.downloadButton.disabled = true;
    refs.previewImage.hidden = true;
    refs.previewImage.removeAttribute("src");
    refs.previewFrame.querySelector(".preview-placeholder")?.removeAttribute("hidden");
    refs.previewState.textContent = "Waiting for image";
    setStatus("Choose an analysis mode to begin.", "");
  }

  async function copyRecommendations() {
    if (!state.currentAnalysis) return;

    const report = buildReportText(state.currentAnalysis);
    try {
      await navigator.clipboard.writeText(report);
      setStatus("Recommendations copied to the clipboard.", "success");
    } catch (error) {
      setStatus("Clipboard access was not available. You can still download the report as text.", "warning");
    }
  }

  function downloadReport() {
    if (!state.currentAnalysis) return;

    const blob = new Blob([buildReportText(state.currentAnalysis)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${state.currentAnalysis.suggestedName || "image-seo-report"}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus("Text report downloaded.", "success");
  }

  function buildReportText(analysis) {
    return [
      "Ultimate Image SEO & Meta Checker",
      "",
      `File name: ${analysis.fileName}`,
      `File type: ${analysis.fileType || "Unavailable"}`,
      `File size: ${formatBytes(analysis.fileSizeBytes)}`,
      `Dimensions: ${analysis.width} x ${analysis.height}`,
      `Aspect ratio: ${analysis.aspectRatio}`,
      `SEO score: ${analysis.score.value}/100`,
      `Suggested file name: ${analysis.suggestedName}`,
      "",
      "Suggested alt text:",
      ...analysis.altSuggestions.map((item) => `- ${item.label}: ${item.text}`),
      "",
      "Performance recommendations:",
      ...analysis.recommendations.map((item) => `- ${item}`),
      "",
      "Social media fit:",
      ...analysis.sizeChecks.map((item) => `- ${item.label}: ${formatStatus(item.status)} (${item.target})`),
      "",
      "Privacy note:",
      "Your image is processed locally in your browser. It is not uploaded to our servers."
    ].join("\n");
  }

  function setStatus(message, kind) {
    refs.statusBox.textContent = message;
    refs.statusBox.className = "status-box";
    if (kind) {
      refs.statusBox.classList.add(`is-${kind}`);
    }
  }

  function resetStatus() {
    refs.statusBox.className = "status-box";
  }

  function normalizeTopic(topic) {
    if (!topic) return null;
    const primarySlug = slugify(topic).split("-").slice(0, 4).join("-");
    return {
      raw: topic,
      readable: topic.trim(),
      primarySlug
    };
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .replace(/\.[^.]+$/, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function stripExtension(fileName) {
    return fileName.replace(/\.[^.]+$/, "");
  }

  function simplifyRatio(width, height) {
    const divisor = gcd(width, height);
    const simpleWidth = width / divisor;
    const simpleHeight = height / divisor;
    return `${simpleWidth}:${simpleHeight}`;
  }

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function mimeFromFilename(fileName) {
    const ext = (fileName.split(".").pop() || "").toLowerCase();
    return {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      webp: "image/webp",
      gif: "image/gif"
    }[ext] || "";
  }

  function formatMimeLabel(mime) {
    if (!mime) return "Unavailable";
    return mime
      .replace("image/", "")
      .toUpperCase()
      .replace("JPEG", "JPG / JPEG");
  }

  function extractFileName(url) {
    const pathname = url.pathname.split("/").pop() || "external-image";
    return decodeURIComponent(pathname);
  }

  function formatBytes(bytes) {
    if (bytes == null || Number.isNaN(bytes)) {
      return "Unavailable for this image";
    }
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  function uniqueStrings(items) {
    return Array.from(new Set(items));
  }

  function trimToLength(text, maxLength) {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength - 1).trim()}…`;
  }

  function sentenceCase(text) {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function toTitleCase(text) {
    return text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function scoreLabel(score) {
    if (score >= 86) return "Strong SEO and publishing fit";
    if (score >= 72) return "Good base with room to improve";
    if (score >= 55) return "Usable, but optimization is recommended";
    return "Needs image SEO work before publishing";
  }

  function formatStatus(status) {
    return {
      "good-fit": "Good fit",
      "needs-resizing": "Needs resizing",
      "too-small": "Too small",
      "too-large-heavy": "Too large/heavy"
    }[status] || status;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  init();
})();
