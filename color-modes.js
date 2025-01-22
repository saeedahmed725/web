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
            slide2SubTitle  : "We're more than just a digital marketing agency; we're your partners in success. We craft innovative marketing strategies tailored to make your brand stand out and captivate your target audience. We believe success doesn’t happen by chance—it’s achieved through smart work and creativity. Our mission is simple: to deliver exceptional results that make a real impact on your business.",
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
            slide2SubTitle  : "نحن أكثر من مجرد وكالة تسويق رقمي؛ نحن شركاء نجاحك. نصنع استراتيجيات تسويقية مبتكرة مصممة خصيصًا لتبرز علامتك التجارية وتجذب جمهورك المستهدف. نؤمن بأن النجاح لا يتحقق بالصدفة، بل بالعمل الذكي والإبداع. هدفنا بسيط: تحقيق نتائج استثنائية تُحدث فرقًا حقيقيًا في أعمالك.",
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
})()