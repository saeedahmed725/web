/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */


document.addEventListener("DOMContentLoaded", () => {
    const langToggleButton = document.getElementById("lang-toggle");

    const translations = {
        en: {
            logo: "Logo",
            langButton: "عربي",
            home: "Home",
            about: "About",
            team: "Team",
            contact: "Contact",
            search: "Search",
            slide1  : "Slide 1",
            slide2Title  : "Grow your business with an astonishing ROI that sends shivers down your spine!",
            slide2SubTitle  : "Stop wasting time and money on ineffective ad campaigns. Let us help you boost your sales with professional advertising strategies and social media growth!",
            slide3  : "Slide 3",
        },
        ar: {
            logo: "شعار",
            langButton: "English",
            home: "الرئيسية",
            about: "من نحن",
            team: "الفريق",
            contact: "تواصل معنا",
            search: "بحث",
            slide1  : "الشريحة 1",
            slide2Title  : "نمِّ عملك بعائد استثمار مذهل يبعث القشعريرة!",
            slide2SubTitle  : ">توقف عن إهدار الوقت والمال على حملات إعلانية غير فعالة. دعنا نساعدك في زيادة مبيعاتك من خلال استراتيجيات إعلانية ونمو وسائل التواصل الاجتماعي الاحترافية.",
            slide3  : "الشريحة 3",
        },
    };

    // Switch Language Function
    const switchLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        langToggleButton.setAttribute("data-lang", lang);
        langToggleButton.querySelector("#lang-toggle-text").textContent = translations[lang].langButton;

        document.getElementById("home").textContent = translations[lang].home;
        document.getElementById("about").textContent = translations[lang].about;
        document.getElementById("team").textContent = translations[lang].team;
        document.getElementById("contact").textContent = translations[lang].contact;
        document.getElementById("logo").textContent = translations[lang].logo;
        document.getElementById("slide2Title").textContent = translations[lang].slide2Title;
        document.getElementById("slide2SubTitle").textContent = translations[lang].slide2SubTitle;

        // تحديث نصوص البحث
        const searchInput = document.querySelector("input[aria-label='بحث']");
        const searchButton = document.querySelector("button[type='submit']");

        searchInput.placeholder = translations[lang].search;
        searchInput.setAttribute("aria-label", translations[lang].search);
        searchButton.textContent = translations[lang].search;

    };

    // Language Toggle Event
    langToggleButton.addEventListener("click", () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === "en" ? "ar" : "en";
        switchLanguage(newLang);
    });

});



(() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = theme => {
        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }

    setTheme(getPreferredTheme())

    const showActiveTheme = (theme, focus = false) => {
        const themeSwitcher = document.querySelector('#bd-theme')

        if (!themeSwitcher) {
            return
        }

        const themeSwitcherText = document.querySelector('#bd-theme-text')
        const activeThemeIcon = document.querySelector('.theme-icon-active use')
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
        const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            element.classList.remove('active')
            element.setAttribute('aria-pressed', 'false')
        })

        btnToActive.classList.add('active')
        btnToActive.setAttribute('aria-pressed', 'true')
        activeThemeIcon.setAttribute('href', svgOfActiveBtn)
        const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
        themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

        if (focus) {
            themeSwitcher.focus()
        }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())

        document.querySelectorAll('[data-bs-theme-value]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const theme = toggle.getAttribute('data-bs-theme-value')
                    setStoredTheme(theme)
                    setTheme(theme)
                    showActiveTheme(theme, true)
                })
            })
    })
})()