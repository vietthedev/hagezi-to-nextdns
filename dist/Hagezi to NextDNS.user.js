// ==UserScript==
// @name            HaGeZi to NextDNS
// @namespace       vietthe.dev
// @match           https://my.nextdns.io/*
// @grant           GM_addStyle
// @version         1.2.0
// @license         MIT
// @author          vietthedev
// @compatible      firefox Violentmonkey
// @compatible      firefox Tampermonkey
// @compatible      chrome Violentmonkey
// @compatible      chrome Tampermonkey
// @compatible      opera Violentmonkey
// @compatible      opera Tampermonkey
// @compatible      safari Stay
// @compatible      edge Violentmonkey
// @compatible      edge Tampermonkey
// @compatible      brave Violentmonkey
// @compatible      brave Tampermonkey
// @description     A userscript that allows you to fetch HaGeZi lists and add them to your NextDNS allowlist and denylist.
// @description:en  A userscript that allows you to fetch HaGeZi lists and add them to your NextDNS allowlist and denylist.
// @description:vi  Userscript giúp bạn nhập các danh sách HaGeZi vào danh sách cho phép và danh sách chặn của NextDNS.
// @icon            data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFOklEQVRogbXaXaicRxkH8N/sJmnSlOZIDC1CJRCseETFK72qFBpFvJQUpAptFdorL0pKkV540AvxQm8sokdsY6ISjNVCxSBUiSLRoq0XYpEqGGmbUGxPTmKO52N35/Fi93zsnvdrPzIw7Owzzzzz/z/zzLwz77zJzUgL0TLvsDV3oKfnigddk1LMuqvWrA2CY+6x7qzkT3hR26IfmL8ZXaWZWzwTn8ZTuENIAiEL/xQ+4+H08iy7mx2Bp+OIPb4geVI4aDNYYpD75beFx6x4zhfT9Vl0Oz2BZ2JO23E8LNyLW0rA93NyXfYLnHLI792fVqfpfnICp+Og5H7hIXxIuL0UdHH5LbyoZ9H7/NK9qTsJjAoCkTzvgGWHtOyT7ZW8U/JB4T7huDDXEOxweff/K8J5PRdkf9N2TdbBumXXLKS18Qn8KD6BE/iA7DDmMCe0xwZcDX5YRkd2VVgW/iP7M844mV5qTuCH8ajkq8JhMdAZ7qQZ6NyAyKjOqDzLuIzPeTxdqCdwOj4ieU5yZ4F3xvfwaF2ZrE6e/V1y3BPp9Z1whx9kC7FH8knhiDzwQoz8VpXr6spkVfLt/G49x42kYQLz9uOY0N5iv2l8NBeBHRd8kZ2iNj2EA8IxJ6K9E/KeEULtgWI/jRMelMfzOOFSXp9kt3qH1oBSAYEVaUs27iozC/BldrZz27uG5+0wgX2SDa3K1WMWICcB369vu1pFYFWStG7aSjJuKO2uS94zhHjXHCAGBMYBT/16Pj34PralqhFYk9wibc3+nUaqQE4aElGgU01q13NrmMB+oTswebNCosoJuUKnn7NLVQQ2hKQ781AZZ7Sq7CRdR7c0Cgi0ZV0bMwdfpLMpG8/O+g6tAgIHdF23OnWoVOnsBNpk1LbbBFarCSzrym5IDUDWdTwt+FGd/q70hoVUQWBJx5yrQtg+kE8Wy+NO5HqdDWHZSBrZjaYsW5L1SjdWUSJvstuMCXX65Q3J26MEdj/IuCJbE25r7LEmYVVmp4n9ft2acKWeQM9lYVW4bQzjTSZhuW4z+arwRj2BrktaVoQjM/d2k/qyNsmSjsujcHe/WvyXN2SvV56OymJ4+ABSd8Iqb1vc30WLqVNPYDF1ZL8unWDTgi+byGWTd1t+fhfWQgLQ8/OhlajOm+OuMKOAy+TbsiXrftOcQPZX2Uu1Ht+Zy4e+2NtFI1W+hJ51qvjlVjGB/vPgO3olwKYFWQV+d7iuyE4X4iwlAD0vyF6p9FLR6JSF06i8rrydL2j5x/gE9npTeFbWaTxJm8qL7BTpcEN41l27txCbqfrt9JfibuFXsqMMDNPsuVCmX9Reaf1FLZ9yKpUSqL5i+lp6Vfb1rVEo8lLRsNeF0GjbYof8FyerwNcTgGXfF87I8kThUka8uryq5ytOpz/UwasnsJg6woLsd7Ugy1eScSZyFn5i3fdqsRnnhuax+KiuU8J7G8dzVXwXl0O4KDzgx+nfTWA1v2b9Zvqj8Ijwl6GVZLpQGfY854WHmoJnkjuyR2Jey7eFe+w8tTGp16EnnNXxhHNp15a5Ko1/0f3d9IrwgOynspXa1aR+tVmSfcucR8cFzzS3lCfigDmfHYTVh0XBO9Wd/43I6Ai/xVPu9vzoYb1pmu6eeCFaXnOX8HnZSQZ3C1XA+79vCl+238884y0m/4Zidjf1D8ZR2ZP4uHAn9o2A/p/+kfCcjm84l5Zm0e1sv5U4EW0Hzeu5T/YxvF/o4mXZBXu94IxL03h8NM3+Yw/6oXXJ7TYckmW3Wva0G7MEvpn+DxZzjNuWWt/KAAAAAElFTkSuQmCC
// @homepageURL     https://github.com/vietthedev/hagezi-to-nextdns
// @supportURL      https://github.com/vietthedev/hagezi-to-nextdns/issues
// ==/UserScript==

/* jshint esversion:2022 */
/* global GM_addStyle, MutationObserver, location */

(async () => {
	const translations = {
		en: {
			hidePanel: "Hide Panel",
			showPanel: "Show Panel",
			numberOfBlockedTlds: "Number of blocked TLDs",
			numberOfDeniedDomains: "Number of denied domains",
			numberOfAllowedDomains: "Number of allowed domains",
			importHageziTlds: "Import HaGeZi TLDs",
			removeHageziTlds: "Remove HaGeZi TLDs",
			importHageziTldsAggressive: "Import HaGeZi TLDs (Aggressive)",
			removeHageziTldsAggressive: "Remove HaGeZi TLDs (Aggressive)",
			importHageziTldAllowlist: "Import HaGeZi TLD allowlist",
			removeHageziTldAllowlist: "Remove HaGeZi TLD allowlist",
			importErrorTrackers: "Import error trackers",
			removeErrorTrackers: "Remove error trackers",
			importCustomList: "Import custom list",
			removeCustomList: "Remove custom list",
			adding: "Adding",
			removing: "Removing",
			done: "Done!",
			expand: "Expand",
			collapse: "Collapse",
			chooseAListToProceed: "Choose a list to proceed:",
			areYouSureYouWantToProceed: "Are you sure you want to proceed?",
			allowlist: "Allowlist",
			denylist: "Denylist",
			enterTheLink:
				"Enter the link to the list in wildcard asterisk or wildcard domain format:",
			profileChanged: "The NextDNS profile changed; operation stopped.",
			invalidResponse: "Unexpected response from NextDNS.",
			emptyList: "The source did not contain any valid domains.",
			retrying: "Retrying request",
			verificationFailed:
				"Write failed; could not verify the current NextDNS list.",
		},
		vi: {
			hidePanel: "Ẩn Bảng",
			showPanel: "Hiện Bảng",
			numberOfBlockedTlds: "Số lượng TLD đã chặn",
			numberOfDeniedDomains: "Số lượng tên miền đã chặn",
			numberOfAllowedDomains: "Số lượng tên miền đã cho phép",
			importHageziTlds: "Nhập TLD HaGeZi",
			removeHageziTlds: "Xoá TLD HaGeZi",
			importHageziTldsAggressive: "Nhập TLD HaGeZi (phiên bản mạnh hơn)",
			removeHageziTldsAggressive: "Xoá TLD HaGeZi (phiên bản mạnh hơn)",
			importHageziTldAllowlist: "Nhập danh sách cho phép HaGeZi TLD",
			removeHageziTldAllowlist: "Xoá danh sách cho phép HaGeZi TLD",
			importErrorTrackers: "Nhập trình theo dõi lỗi",
			removeErrorTrackers: "Xoá trình theo dõi lỗi",
			importCustomList: "Nhập danh sách tuỳ chọn",
			removeCustomList: "Xoá danh sách tuỳ chọn",
			adding: "Đang thêm",
			removing: "Đang xoá",
			done: "Xong!",
			expand: "Mở rộng",
			collapse: "Thu gọn",
			chooseAListToProceed: "Chọn danh sách để tiến hành:",
			areYouSureYouWantToProceed: "Bạn có chắc muốn tiến hành?",
			allowlist: "Danh sách cho phép",
			denylist: "Danh sách chặn",
			enterTheLink:
				'Nhập đường dẫn tới danh sách tên miền ở định dạng có hoặc không có dấu "*":',
			profileChanged: "Đã chuyển cấu hình NextDNS; thao tác đã dừng.",
			invalidResponse: "Phản hồi từ NextDNS không hợp lệ.",
			emptyList: "Danh sách nguồn không chứa tên miền hợp lệ.",
			retrying: "Đang thử lại yêu cầu",
			verificationFailed:
				"Ghi dữ liệu thất bại; không thể kiểm tra danh sách NextDNS hiện tại.",
		},
	};

	const LOCALE = Object.freeze({ VIETNAMESE: "vi", ENGLISH: "en" });
	const lang =
		translations[
			navigator.language.toLowerCase().startsWith(LOCALE.VIETNAMESE)
				? LOCALE.VIETNAMESE
				: LOCALE.ENGLISH
		];
	const CONFIG = Object.freeze({
		apiHost: "https://api.nextdns.io",
		hageziCdn: "https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest",
		scriptCdn:
			"https://cdn.jsdelivr.net/gh/vietthedev/hagezi-to-nextdns@latest",
		githubHost: "github.com",
		githubRawHost: "raw.githubusercontent.com",
		punycodeModule: "https://esm.run/punycode",
		requestDelayMs: 500,
		retry: Object.freeze({
			attempts: 4,
			baseDelayMs: 800,
			maxDelayMs: 30_000,
			jitterRatio: 0.2,
		}),
	});
	const HTTP = Object.freeze({
		REQUEST_TIMEOUT: 408,
		TOO_MANY_REQUESTS: 429,
		SERVER_ERROR_MIN: 500,
		SERVER_ERROR_MAX: 599,
		MILLISECONDS_PER_SECOND: 1000,
		RETRY_AFTER: "Retry-After",
		JSON_HEADERS: Object.freeze({ "Content-Type": "application/json" }),
		FETCH_OPTIONS: Object.freeze({ mode: "cors", credentials: "include" }),
		METHOD: Object.freeze({ POST: "POST", DELETE: "DELETE" }),
	});
	const LIST = Object.freeze({
		TLDS: "tlds",
		ALLOW: "allowlist",
		DENY: "denylist",
	});
	const OPERATION = Object.freeze({ ADD: "add", REMOVE: "remove" });
	const FORMAT = Object.freeze({ ADBLOCK: "adblock", WILDCARD: "wildcard" });
	const LIST_CHOICES = Object.freeze({ [LIST.ALLOW]: "1", [LIST.DENY]: "2" });
	const API_PATHS = Object.freeze({
		[LIST.TLDS]: Object.freeze({ read: "security", write: "security/tlds" }),
		[LIST.ALLOW]: Object.freeze({ read: LIST.ALLOW, write: LIST.ALLOW }),
		[LIST.DENY]: Object.freeze({ read: LIST.DENY, write: LIST.DENY }),
	});
	const UI_TITLE = "HaGeZi to NextDNS";
	const SOURCE_PROTOCOLS = new Set(["http:", "https:"]);
	const PUNYCODE_PREFIX = "xn--";
	const EXPORT_MIME_TYPE = "text/plain;charset=utf-8";
	const API_HEX_PREFIX = "hex:";
	const HEX_BYTE_WIDTH = 2;
	const MIN_PROFILE_PATH_SEGMENTS = 2;
	const ARROWS = {
		down: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>',
		up: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>',
	};
	const SOURCE_DEFINITIONS = {
		tlds: {
			url: `${CONFIG.hageziCdn}/adblock/spam-tlds-adblock.txt`,
			format: FORMAT.ADBLOCK,
			tldsOnly: true,
		},
		aggressiveTlds: {
			url: `${CONFIG.hageziCdn}/wildcard/spam-tlds-onlydomains.txt`,
			format: FORMAT.WILDCARD,
			tldsOnly: true,
		},
		tldAllowlist: {
			url: `${CONFIG.hageziCdn}/wildcard/spam-tlds-allow-onlydomains.txt`,
			format: FORMAT.WILDCARD,
		},
		errorTrackers: {
			url: `${CONFIG.scriptCdn}/resources/error-trackers-onlydomains.txt`,
			format: FORMAT.WILDCARD,
		},
	};
	const ACTIONS = [
		{
			source: "tlds",
			list: LIST.TLDS,
			addLabel: "importHageziTlds",
			removeLabel: "removeHageziTlds",
		},
		{
			source: "aggressiveTlds",
			list: LIST.TLDS,
			addLabel: "importHageziTldsAggressive",
			removeLabel: "removeHageziTldsAggressive",
		},
		{
			source: "tldAllowlist",
			list: LIST.ALLOW,
			addLabel: "importHageziTldAllowlist",
			removeLabel: "removeHageziTldAllowlist",
		},
		{
			source: "errorTrackers",
			selectList: true,
			addLabel: "importErrorTrackers",
			removeLabel: "removeErrorTrackers",
		},
		{
			customUrl: true,
			selectList: true,
			addLabel: "importCustomList",
			removeLabel: "removeCustomList",
		},
	];

	let punycode;
	try {
		punycode = await import(CONFIG.punycodeModule);
	} catch (error) {
		console.warn(`${UI_TITLE}: Unicode TLD display unavailable`, error);
	}

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	const encodeId = (value) =>
		Array.from(new TextEncoder().encode(value), (byte) =>
			byte.toString(16).padStart(HEX_BYTE_WIDTH, "0"),
		).join("");

	class HttpError extends Error {
		constructor(response) {
			super(
				`HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ""}`,
			);
			this.status = response.status;
			const header = response.headers?.get(HTTP.RETRY_AFTER);
			const seconds = Number(header);
			this.retryAfterMs =
				header == null
					? 0
					: Number.isFinite(seconds)
						? Math.max(0, seconds * HTTP.MILLISECONDS_PER_SECOND)
						: Math.max(0, Date.parse(header) - Date.now()) || 0;
		}
	}

	function isTransient(error) {
		return (
			error instanceof TypeError ||
			(error instanceof HttpError &&
				(error.status === HTTP.REQUEST_TIMEOUT ||
					error.status === HTTP.TOO_MANY_REQUESTS ||
					(error.status >= HTTP.SERVER_ERROR_MIN &&
						error.status <= HTTP.SERVER_ERROR_MAX)))
		);
	}

	function retryDelay(error, attempt) {
		const { baseDelayMs, maxDelayMs, jitterRatio } = CONFIG.retry;
		const backoff =
			baseDelayMs *
			2 ** attempt *
			(1 - jitterRatio + Math.random() * 2 * jitterRatio);
		return Math.min(maxDelayMs, Math.max(backoff, error.retryAfterMs || 0));
	}

	async function fetchOnce(url, options) {
		const response = await fetch(url, options);
		if (!response.ok) throw new HttpError(response);
		return response;
	}

	async function fetchWithRetry(url, options, onRetry) {
		for (let attempt = 0; attempt < CONFIG.retry.attempts; attempt++) {
			try {
				return await fetchOnce(url, options);
			} catch (error) {
				if (!isTransient(error) || attempt === CONFIG.retry.attempts - 1)
					throw error;
				const wait = retryDelay(error, attempt);
				onRetry?.(attempt + 2, CONFIG.retry.attempts, wait);
				await delay(wait);
			}
		}
	}

	function getProfileId() {
		const parts = location.pathname.split("/").filter(Boolean);
		return parts.length >= MIN_PROFILE_PATH_SEGMENTS &&
			/^[\w-]+$/.test(parts[0])
			? parts[0]
			: null;
	}

	function promptListType() {
		let choice;
		const message = `${lang.chooseAListToProceed}\n${LIST_CHOICES[LIST.ALLOW]}. ${lang.allowlist}\n${LIST_CHOICES[LIST.DENY]}. ${lang.denylist}`;
		do {
			choice = window.prompt(message);
		} while (choice !== null && !Object.values(LIST_CHOICES).includes(choice));
		return (
			Object.keys(LIST_CHOICES).find((type) => LIST_CHOICES[type] === choice) ??
			null
		);
	}

	function promptUrl() {
		while (true) {
			const answer = window.prompt(lang.enterTheLink);
			if (answer === null) return null;
			try {
				const url = new URL(answer.trim());
				if (SOURCE_PROTOCOLS.has(url.protocol) && url.hostname.includes(".")) {
					return url.href;
				}
			} catch {
				// Ask again for a valid absolute HTTP(S) URL.
			}
		}
	}

	function parseDomains(content, format, tldsOnly = false) {
		const domains = new Set();
		const pattern =
			format === FORMAT.ADBLOCK
				? /^(?:\|\|)?([\w.-]+)(?:\^)?$/
				: /^(?:\*\.)*([\w.-]+)$/;

		for (const line of content.split(/\r?\n/)) {
			const match = pattern.exec(line.trim());
			if (!match) continue;
			const domain = match[1];
			if (tldsOnly && domain.includes(".")) continue;
			domains.add(domain);
		}
		return domains;
	}

	function normalizeSourceUrl(address) {
		const url = new URL(address);
		const segments = url.pathname.split("/");
		if (
			url.protocol !== "https:" ||
			url.hostname !== CONFIG.githubHost ||
			url.port ||
			segments[3] !== "raw" ||
			segments.length < 6
		) {
			return address;
		}

		// GitHub's /raw/ endpoint redirects to a different origin without CORS headers.
		const raw = new URL(
			`https://${CONFIG.githubRawHost}/${segments[1]}/${segments[2]}/${segments.slice(4).join("/")}`,
		);
		raw.search = url.search;
		return raw.href;
	}

	async function fetchSource(source, onRetry) {
		const response = await fetchWithRetry(
			normalizeSourceUrl(source.url),
			undefined,
			onRetry,
		);
		return parseDomains(await response.text(), source.format, source.tldsOnly);
	}

	class NextDnsApi {
		constructor(profileId, onRetry) {
			this.baseUrl = `${CONFIG.apiHost}/profiles/${encodeURIComponent(profileId)}`;
			this.onRetry = onRetry;
		}

		request(path, options = {}) {
			return fetchWithRetry(
				`${this.baseUrl}/${path}`,
				{
					...HTTP.FETCH_OPTIONS,
					...options,
					...(options.body ? { headers: HTTP.JSON_HEADERS } : {}),
				},
				this.onRetry,
			);
		}

		async getIds(type) {
			const response = await this.request(API_PATHS[type].read);
			const payload = await response.json();
			const entries = type === LIST.TLDS ? payload?.data?.tlds : payload?.data;
			if (!Array.isArray(entries)) throw new Error(lang.invalidResponse);
			return entries.map(({ id }) => id);
		}

		async change(type, operation, domain) {
			const path = API_PATHS[type].write;
			const url = `${this.baseUrl}/${operation === OPERATION.ADD ? path : `${path}/${API_HEX_PREFIX}${encodeId(domain)}`}`;
			const options = {
				...HTTP.FETCH_OPTIONS,
				method:
					operation === OPERATION.ADD ? HTTP.METHOD.POST : HTTP.METHOD.DELETE,
				...(operation === OPERATION.ADD
					? {
							headers: HTTP.JSON_HEADERS,
							body: JSON.stringify(
								type === LIST.TLDS
									? { id: domain }
									: { active: true, id: domain },
							),
						}
					: {}),
			};

			for (let attempt = 0; attempt < CONFIG.retry.attempts; attempt++) {
				try {
					return await fetchOnce(url, options);
				} catch (error) {
					if (!isTransient(error)) throw error;
					// The server may have applied a write before its response was lost.
					let current;
					try {
						current = await this.getIds(type);
					} catch (verificationError) {
						throw new Error(lang.verificationFailed, {
							cause: verificationError,
						});
					}
					if (current.includes(domain) === (operation === OPERATION.ADD))
						return;
					if (attempt === CONFIG.retry.attempts - 1) throw error;
					const wait = retryDelay(error, attempt);
					this.onRetry?.(attempt + 2, CONFIG.retry.attempts, wait);
					await delay(wait);
				}
			}
		}
	}

	function element(tag, classNames = [], content) {
		const node = document.createElement(tag);
		node.classList.add(...classNames);
		if (content !== undefined) node.textContent = content;
		return node;
	}

	function createUi() {
		const panel = element("section", ["card", "htn-panel"]);
		const header = element("div", ["card-header"]);
		header.appendChild(element("h6", ["mb-0", "text-center"], UI_TITLE));

		const body = element("div", ["card-body"]);
		const loader = element("div", ["htn-loader"]);
		const stats = element("ul", ["htn-stats"]);
		const progress = element("p", ["htn-progress"]);
		progress.setAttribute("role", "status");
		body.append(loader, stats, progress);

		const footer = element("div", ["card-footer", "htn-footer"]);
		const expand = element("button", ["btn", "htn-expand"]);
		expand.type = "button";
		expand.innerHTML = ARROWS.down;
		expand.title = lang.expand;
		expand.setAttribute("aria-label", lang.expand);
		expand.setAttribute("aria-expanded", "false");
		const controls = element("div", ["htn-controls"]);
		controls.hidden = true;
		const buttons = [];

		for (const definition of ACTIONS) {
			for (const operation of Object.values(OPERATION)) {
				const button = element(
					"button",
					[
						"btn",
						"btn-sm",
						operation === OPERATION.ADD ? "btn-primary" : "btn-danger",
					],
					lang[
						operation === OPERATION.ADD
							? definition.addLabel
							: definition.removeLabel
					],
				);
				button.type = "button";
				button.addEventListener("click", () => {
					runAction(definition, operation);
				});
				controls.appendChild(button);
				buttons.push(button);
			}
		}

		expand.addEventListener("click", () => {
			controls.hidden = !controls.hidden;
			const expanded = !controls.hidden;
			expand.innerHTML = expanded ? ARROWS.up : ARROWS.down;
			expand.title = expanded ? lang.collapse : lang.expand;
			expand.setAttribute("aria-label", expand.title);
			expand.setAttribute("aria-expanded", String(expanded));
		});
		footer.append(expand, controls);
		panel.append(header, body, footer);
		panel.hidden = true;
		document.body.appendChild(panel);

		const navButton = element(
			"button",
			["btn", "btn-primary", "htn-toggle"],
			lang.hidePanel,
		);
		navButton.type = "button";
		navButton.addEventListener("click", () => {
			panelHiddenByUser = !panelHiddenByUser;
			syncPanelVisibility();
		});
		const navContainer = element("div", [
			"nav-item",
			"d-flex",
			"align-items-center",
			"htn-toggle-container",
		]);
		navContainer.appendChild(navButton);

		return { panel, navButton, navContainer, loader, stats, progress, buttons };
	}

	let activeProfile = null;
	let panelHiddenByUser = false;
	let busy = false;
	let refreshing = false;
	let statsRequestId = 0;
	let downloadUrls = [];
	const ui = createUi();

	function syncPanelVisibility() {
		ui.panel.hidden = !activeProfile || panelHiddenByUser;
		ui.navButton.hidden = !activeProfile;
		ui.navButton.textContent = panelHiddenByUser
			? lang.showPanel
			: lang.hidePanel;
	}

	function syncButtons() {
		for (const button of ui.buttons) button.disabled = busy || refreshing;
	}

	function showStats(profileId, values) {
		const urls = [];
		const rows = [
			[lang.numberOfBlockedTlds, LIST.TLDS, values[LIST.TLDS]],
			[lang.numberOfDeniedDomains, LIST.DENY, values[LIST.DENY]],
			[lang.numberOfAllowedDomains, LIST.ALLOW, values[LIST.ALLOW]],
		];
		const fragment = document.createDocumentFragment();

		for (const [label, type, ids] of rows) {
			const sorted = [...ids].sort();
			const url = URL.createObjectURL(
				new Blob([sorted.join("\n")], { type: EXPORT_MIME_TYPE }),
			);
			urls.push(url);
			const item = element("li");
			const link = element("a", [], String(ids.length));
			link.href = url;
			link.target = "_blank";
			link.rel = "noopener noreferrer";
			link.title = `${profileId}-${type}.txt`;
			item.append(`${label}: `, link);
			fragment.appendChild(item);
		}

		ui.stats.replaceChildren(fragment);
		for (const oldUrl of downloadUrls) URL.revokeObjectURL(oldUrl);
		downloadUrls = urls;
	}

	async function refreshStats(profileId) {
		if (profileId !== activeProfile) return;
		const requestId = ++statsRequestId;
		refreshing = true;
		ui.loader.hidden = false;
		syncButtons();

		try {
			const api = new NextDnsApi(profileId);
			const [tlds, denylist, allowlist] = await Promise.all([
				api.getIds(LIST.TLDS),
				api.getIds(LIST.DENY),
				api.getIds(LIST.ALLOW),
			]);
			if (requestId !== statsRequestId || profileId !== activeProfile) return;
			showStats(profileId, {
				[LIST.TLDS]: tlds.map((id) =>
					id.startsWith(PUNYCODE_PREFIX) && punycode
						? punycode.toUnicode(id)
						: id,
				),
				[LIST.DENY]: denylist,
				[LIST.ALLOW]: allowlist,
			});
		} finally {
			if (requestId === statsRequestId) {
				refreshing = false;
				ui.loader.hidden = true;
				syncButtons();
			}
		}
	}

	async function runAction(definition, operation) {
		if (busy || refreshing || !activeProfile) return;
		const profileId = activeProfile;
		const url = definition.customUrl ? promptUrl() : null;
		if (definition.customUrl && !url) return;
		const list = definition.selectList ? promptListType() : definition.list;
		if (!list || !window.confirm(lang.areYouSureYouWantToProceed)) return;

		busy = true;
		syncButtons();
		const onRetry = (attempt, total, wait) => {
			if (activeProfile === profileId) {
				ui.progress.textContent = `${lang.retrying} (${attempt}/${total}, ${Math.ceil(wait / HTTP.MILLISECONDS_PER_SECOND)}s)`;
			}
		};
		const api = new NextDnsApi(profileId, onRetry);
		try {
			const source = definition.customUrl
				? { url, format: FORMAT.WILDCARD }
				: SOURCE_DEFINITIONS[definition.source];
			const [currentIds, sourceIds] = await Promise.all([
				api.getIds(list),
				fetchSource(source, onRetry),
			]);
			if (sourceIds.size === 0) throw new Error(lang.emptyList);
			const existing = new Set(currentIds);
			const targets = [...sourceIds].filter((id) =>
				operation === OPERATION.ADD ? !existing.has(id) : existing.has(id),
			);
			for (const [index, domain] of targets.entries()) {
				if (activeProfile !== profileId) throw new Error(lang.profileChanged);
				ui.progress.textContent = `${operation === OPERATION.ADD ? lang.adding : lang.removing} ${domain} (${index + 1}/${targets.length})`;
				await api.change(list, operation, domain);
				await delay(CONFIG.requestDelayMs);
			}
			if (activeProfile === profileId) {
				await refreshStats(profileId);
				ui.progress.textContent = lang.done;
			}
		} catch (error) {
			if (activeProfile === profileId) {
				ui.progress.textContent =
					error instanceof Error ? error.message : String(error);
				// An interrupted import may have changed some entries already.
				try {
					await refreshStats(profileId);
				} catch (refreshError) {
					console.warn(`${UI_TITLE}: statistics refresh failed`, refreshError);
				}
			}
		} finally {
			busy = false;
			syncButtons();
		}
	}

	function syncRoute() {
		const profileId = getProfileId();
		if (profileId === activeProfile) return;
		activeProfile = profileId;
		statsRequestId += 1;
		refreshing = false;
		ui.stats.replaceChildren();
		for (const url of downloadUrls) URL.revokeObjectURL(url);
		downloadUrls = [];
		ui.progress.textContent = "";
		ui.loader.hidden = !profileId;
		syncPanelVisibility();
		syncButtons();
		if (profileId) {
			refreshStats(profileId).catch((error) => {
				if (activeProfile === profileId)
					ui.progress.textContent = error.message;
			});
		}
	}

	function mountNavButton() {
		const nav = document.querySelector(".nav");
		if (nav && ui.navContainer.parentNode !== nav)
			nav.appendChild(ui.navContainer);
	}

	// NextDNS replaces its navigation during SPA route changes.
	const observer = new MutationObserver(() => {
		mountNavButton();
		if (getProfileId() !== activeProfile) syncRoute();
	});
	observer.observe(document.body, { childList: true, subtree: true });
	window.navigation?.addEventListener("navigatesuccess", syncRoute);
	window.addEventListener("popstate", syncRoute);
	window.addEventListener("hashchange", syncRoute);
	window.addEventListener("pagehide", () => {
		for (const url of downloadUrls) URL.revokeObjectURL(url);
		downloadUrls = [];
	});
	mountNavButton();
	syncRoute();

	GM_addStyle(`
    .htn-panel { position: fixed; right: 1rem; bottom: 1rem; z-index: 1000; }
    .htn-panel[hidden], .htn-controls[hidden], .htn-toggle[hidden], .htn-loader[hidden] { display: none !important; }
    .htn-toggle-container { justify-content: end; flex: 1; }
    .htn-toggle { white-space: nowrap; }
    .htn-stats { list-style: initial; }
    .htn-progress { margin: 0; }
    .htn-footer, .htn-controls { display: flex; flex-direction: column; row-gap: .5rem; }
    .htn-controls > .btn { width: fit-content; }
    .htn-expand { display: flex; align-items: center; justify-content: center; width: auto; padding: 0; }
    .htn-loader { display: block; margin: 0 auto; width: 1.5rem; height: 1.5rem; border: 2px solid #000; border-bottom-color: transparent; border-radius: 50%; box-sizing: border-box; animation: htn-rotation 1s linear infinite; }
    @keyframes htn-rotation { to { transform: rotate(360deg); } }
  `);
})();
