(() => {
  "use strict";

  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector("#primary-nav");
  const cookieBanner = document.querySelector("#cookie-banner");
  const cookieDialog = document.querySelector("#cookie-dialog");
  const toast = document.querySelector("#toast");
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4200);
  }

  function setTheme(dark) {
    body.classList.toggle("dark-theme", dark);
    themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.title = dark ? "Switch to light theme" : "Switch to dark theme";
    themeToggle.querySelector(".theme-icon").textContent = dark ? "☾" : "☼";
    themeMeta.content = dark ? "#101824" : "#101b2c";
    try {
      window.localStorage.setItem("godrex-theme", dark ? "dark" : "light");
    } catch {
      // Theme still works for the current page if browser storage is unavailable.
    }
  }

  try {
    setTheme(window.localStorage.getItem("godrex-theme") === "dark");
  } catch {
    setTheme(false);
  }
  themeToggle.addEventListener("click", () => setTheme(!body.classList.contains("dark-theme")));

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    primaryNav.classList.toggle("open", open);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  const marketInstruments = {
    Forex: [
      ["EUR / USD", "Euro / US Dollar"],
      ["GBP / USD", "British Pound / US Dollar"],
      ["USD / JPY", "US Dollar / Japanese Yen"],
      ["AUD / USD", "Australian Dollar / US Dollar"]
    ],
    Stocks: [
      ["AAPL", "Apple Inc."],
      ["MSFT", "Microsoft Corporation"],
      ["NVDA", "NVIDIA Corporation"],
      ["AMZN", "Amazon.com, Inc."]
    ],
    Indices: [
      ["US 500", "US large-cap index"],
      ["UK 100", "UK large-cap index"],
      ["GER 40", "Germany large-cap index"],
      ["JPN 225", "Japan large-cap index"]
    ],
    Commodities: [
      ["GOLD", "Gold, spot"],
      ["SILVER", "Silver, spot"],
      ["WTI OIL", "US crude oil"],
      ["NAT GAS", "Natural gas"]
    ],
    Crypto: [
      ["BTC / USD", "Bitcoin / US Dollar"],
      ["ETH / USD", "Ether / US Dollar"],
      ["SOL / USD", "Solana / US Dollar"],
      ["XRP / USD", "XRP / US Dollar"]
    ]
  };

  const marketTableBody = document.querySelector("#market-table-body");
  document.querySelectorAll(".market-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".market-tab").forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      marketTableBody.replaceChildren();
      marketInstruments[tab.dataset.market].forEach(([symbol, description]) => {
        const row = document.createElement("tr");
        [symbol, description, "—", "—", "Not available"].forEach((value, index) => {
          const cell = document.createElement("td");
          if (index === 0) {
            const strong = document.createElement("strong");
            strong.textContent = value;
            cell.append(strong);
          } else {
            cell.textContent = value;
          }
          row.append(cell);
        });
        marketTableBody.append(row);
      });
    });
  });

  const platformContent = {
    web: {
      title: "Everything in one view.",
      description: "Explore a clean workspace for charts, watchlists and market research—all from your browser.",
      features: ["Customizable watchlists", "Charting and market research tools", "Designed for desktop and mobile browsers"]
    },
    mobile: {
      title: "A considered view, on the go.",
      description: "A responsive mobile experience designed to keep essential information easy to find.",
      features: ["Mobile-friendly market overview", "Watchlist and research concepts", "Availability depends on provider"]
    },
    desktop: {
      title: "Room to go deeper.",
      description: "A desktop workspace concept for exploring market analysis and platform features.",
      features: ["Dedicated desktop workspace", "Expanded charting concepts", "No downloadable trading software"]
    }
  };
  const detailTitle = document.querySelector(".platform-detail h3");
  const detailDescription = document.querySelector(".platform-detail p");
  const detailFeatures = document.querySelector(".platform-detail ul");
  document.querySelectorAll(".platform-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".platform-tab").forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      const content = platformContent[tab.dataset.platform];
      detailTitle.textContent = content.title;
      detailDescription.textContent = content.description;
      detailFeatures.replaceChildren(...content.features.map((feature) => {
        const item = document.createElement("li");
        item.textContent = feature;
        return item;
      }));
    });
  });

  try {
    if (window.localStorage.getItem("godrex-cookie-choice") !== "dismissed") {
      cookieBanner.hidden = false;
    }
  } catch {
    cookieBanner.hidden = false;
  }

  function dismissCookieBanner() {
    cookieBanner.hidden = true;
    try {
      window.localStorage.setItem("godrex-cookie-choice", "dismissed");
    } catch {
      // The banner can still be dismissed for this page view.
    }
  }
  document.querySelector("#cookie-accept").addEventListener("click", dismissCookieBanner);
  document.querySelector("#cookie-settings").addEventListener("click", () => {
    if (typeof cookieDialog.showModal === "function") {
      cookieDialog.showModal();
    } else {
      showToast("Essential preferences only; no analytics or advertising cookies are used.");
    }
  });
  document.querySelector("#cookie-save").addEventListener("click", dismissCookieBanner);

  document.querySelector("#contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("This is a website preview. Contact details are not verified and your message was not sent.");
  });

  document.querySelectorAll(".account-button, .portal-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.classList.contains("account-button")) {
        event.preventDefault();
        showToast("Account registration and financial services are not available on this informational website.");
      }
    });
  });

  document.querySelector("#year").textContent = String(new Date().getFullYear());
})();
