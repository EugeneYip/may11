import React, { useEffect, useMemo, useRef, useState } from "react";

const DATA = {
  meta: {
    title: { en: "Customer Journeys and Buyer Personas", zh: "顧客旅程與買方人物誌" },
    kicker: { en: "MKTG 6222 · Class 02", zh: "MKTG 6222 · 第二堂課" },
    thesis: {
      en: "SmartBug defines who the customer is. SilverTech maps how that customer experiences the brand. The course turns both into real digital marketing execution across Instagram, blog posts, Meta Ads, Google Ads, and a team recommendation deck.",
      zh: "SmartBug 定義顧客是誰，SilverTech 描繪顧客如何經歷品牌，本課把兩者轉成 Instagram、部落格、Meta Ads、Google Ads 與團隊建議簡報等實際數位行銷產出。"
    },
    sourceLine: {
      en: "Readings: SilverTech, “Mapping the Customer Journey” (Jeff McPherson). SmartBug, “The Ultimate Guide to Inbound Marketing Personas.”",
      zh: "閱讀來源：SilverTech《Mapping the Customer Journey》（作者 Jeff McPherson）；SmartBug《The Ultimate Guide to Inbound Marketing Personas》。"
    },
    stats: [
      { value: "2", label: { en: "Readings", zh: "閱讀" } },
      { value: "4", label: { en: "Journey stages", zh: "旅程階段" } },
      { value: "5", label: { en: "Map elements", zh: "Map 要素" } },
      { value: "6", label: { en: "Interview categories", zh: "訪談類別" } },
      { value: "3", label: { en: "Persona variants", zh: "Persona 進階類型" } }
    ]
  },

  sourceLegend: [
    { tag: "Source Fact", zhTag: "來源事實", en: "Directly supported by a reading, slide deck, or syllabus.", zh: "由閱讀、簡報或 syllabus 直接支持。" },
    { tag: "Source Synthesis", zhTag: "來源整合", en: "A reasonable conclusion drawn from more than one source.", zh: "由多份來源合理整合出的結論。" },
    { tag: "Course Application", zhTag: "課程應用", en: "An application of the reading to course deliverables.", zh: "把閱讀內容套用到課程作業。" },
    { tag: "Strategic Inference", zhTag: "策略推論", en: "A defensible business judgment, not stated directly in the source.", zh: "合理商業判斷，但非來源直接明講。" },
    { tag: "Practical Advice", zhTag: "實務建議", en: "Execution guidance for producing stronger work.", zh: "為了做出更好成果的執行建議。" }
  ],

  groups: {
    foundation: { en: "Foundation", zh: "基礎" },
    personas: { en: "Personas (SmartBug)", zh: "Personas（SmartBug）" },
    journey: { en: "Journey Map (SilverTech)", zh: "Journey Map（SilverTech）" },
    application: { en: "Application", zh: "應用" }
  },

  sections: [
    {
      id: "reading-logic",
      group: "foundation",
      kicker: { en: "Master logic", zh: "主架構" },
      title: { en: "The two readings do different jobs", zh: "兩份閱讀各自處理不同問題" },
      summary: {
        en: "Persona first, journey map second. A persona explains whom the strategy is for. A journey map explains how that person moves through the brand experience. The course then turns both into deliverables.",
        zh: "先 persona，再 journey map。Persona 說明策略服務誰，journey map 說明這個人如何經歷品牌體驗，本課再把兩者轉成可繳交的作業成果。"
      },
      type: "logic",
      items: [
        {
          label: { en: "SmartBug", zh: "SmartBug" },
          sub: { en: "Persona", zh: "人物誌" },
          title: { en: "Who is the customer?", zh: "顧客是誰？" },
          body: {
            en: "A behavior based representation of the target customer, built from research and real customer interviews. Explains motivation, objections, content preference, sales engagement, and the problem the customer is trying to solve.",
            zh: "以行為為核心的目標顧客 representation，由研究與真實顧客訪談建立。說明動機、反對理由、內容偏好、銷售互動方式，以及顧客真正想解決的問題。"
          },
          tag: "Source Fact"
        },
        {
          label: { en: "SilverTech", zh: "SilverTech" },
          sub: { en: "Journey Map", zh: "旅程地圖" },
          title: { en: "How does that customer experience the brand?", zh: "顧客如何經歷品牌？" },
          body: {
            en: "A multidimensional map of how the persona moves through stages, actions, emotions, and touchpoints. Shows where supporting content and features are needed, and where the experience has friction or opportunity.",
            zh: "顧客在各階段、行動、情緒與接觸點之間移動的多維地圖。標出哪些位置需要支援內容或功能，哪些位置有摩擦或機會。"
          },
          tag: "Source Fact"
        },
        {
          label: { en: "MKTG 6222", zh: "MKTG 6222" },
          sub: { en: "Execution", zh: "執行" },
          title: { en: "How does this become execution?", zh: "如何轉成執行？" },
          body: {
            en: "Apply both ideas through Instagram organic growth, a blog post, Meta Ads, Google Ads, and a team digital audit and recommendation deck. Every deliverable is judged on whether the persona and journey logic is visible.",
            zh: "把兩個概念套用到 Instagram 自然成長、部落格、Meta Ads、Google Ads，以及團隊數位稽核與建議簡報。每項作業的評分都看 persona 與 journey 邏輯是否清楚呈現。"
          },
          tag: "Course Application"
        }
      ]
    },

    {
      id: "attribution",
      group: "foundation",
      kicker: { en: "Attribution", zh: "來源歸屬" },
      title: { en: "Source facts, applications, and judgment stay in separate buckets", zh: "來源事實、應用與判斷分成三層" },
      summary: {
        en: "Most grading risk comes from mixing reading facts, course applications, and personal recommendations into one paragraph. The label system below appears throughout so that reading content stays distinguishable from added thinking.",
        zh: "主要扣分風險不是不懂內容，而是把來源事實、課程應用與個人建議混進同一段。底下的標籤系統會貫穿整份文件，讓閱讀內容與延伸思考能分辨開來。"
      },
      type: "legend"
    },

    {
      id: "cx-ux",
      group: "foundation",
      kicker: { en: "SilverTech foundation", zh: "SilverTech 基礎" },
      title: { en: "Customer experience is broader than user experience", zh: "顧客體驗比使用者體驗更廣" },
      summary: {
        en: "UX covers the digital or interface portion of the experience. CX covers the full customer relationship, including service, advertising, brand reputation, sales process, pricing fairness, delivery, and the UX layer itself. A good website cannot rescue a broken operational handoff, and a strong front line team can sometimes rescue a weak digital touchpoint.",
        zh: "UX 處理體驗中的數位或介面部分。CX 處理完整顧客關係，包含客服、廣告、品牌聲譽、銷售流程、價格公平性、交付體驗，以及 UX 本身。好的網站救不了壞掉的後端交接，現場優秀的人員服務有時候可以補救失敗的數位接觸點。"
      },
      type: "cxux",
      sideNote: {
        en: "For higher education or hospitals, swap customer or buyer for student or patient. The user versus customer or student or patient distinction still holds.",
        zh: "高等教育或醫院可把 customer 或 buyer 換成 student 或 patient，user 與更廣義的 customer、student、patient 之間的區分仍然成立。"
      },
      cxSpokes: [
        { en: "Service", zh: "客服" },
        { en: "Advertising", zh: "廣告" },
        { en: "Brand reputation", zh: "品牌聲譽" },
        { en: "Sales process", zh: "銷售流程" },
        { en: "Pricing fairness", zh: "價格公平性" },
        { en: "Delivery", zh: "交付" }
      ],
      uxList: [
        { en: "Usability", zh: "易用性" },
        { en: "Interaction design", zh: "互動設計" },
        { en: "Visual design", zh: "視覺設計" },
        { en: "Information architecture", zh: "資訊架構" },
        { en: "Content strategy", zh: "內容策略" },
        { en: "User research", zh: "使用者研究" }
      ],
      cases: [
        {
          situation: { en: "Starbucks app reload times out with no clear message. At the window, the barista listens, gives a support number, and comps the coffee.", zh: "Starbucks app 加值逾時、訊息不清，到了窗口，barista 傾聽、給客服電話，並把這杯咖啡請了。" },
          ux: { en: "Weak", zh: "弱" },
          cx: { en: "Strong", zh: "強" },
          lesson: { en: "A broken digital touchpoint can be partly rescued by a strong human service moment.", zh: "失敗的數位接觸點，仍可能被優秀的人員服務部分補救。" }
        },
        {
          situation: { en: "A mobile responsive patient portal books an annual physical smoothly. The clinic has no record of the appointment on arrival.", zh: "適配手機的病患入口網站順利預約年度健檢，但抵達現場時診所查不到預約紀錄。" },
          ux: { en: "Strong", zh: "強" },
          cx: { en: "Weak", zh: "弱" },
          lesson: { en: "A clean interface cannot compensate for a broken operational handoff.", zh: "介面再順，後端交接斷裂，整體體驗仍然失敗。" }
        }
      ]
    },

    {
      id: "persona-why",
      group: "personas",
      kicker: { en: "Why personas", zh: "為甚麼需要 persona" },
      title: { en: "Personas refine marketing, sales, and product decisions", zh: "Persona 讓行銷、銷售與產品決策更精準" },
      summary: {
        en: "Persona development is the first step before any campaign. A persona embodies the type of customer who gives the most revenue, with the least friction, over the longest period of time. Without that research, the marketer is guessing and likely leaving profit on the table.",
        zh: "Persona 是任何 campaign 動工前的第一步。Persona 體現能在最長時間內、用最少阻力創造最多營收的那類顧客。沒有這份研究，行銷端只是在猜，而且很可能讓利潤從手指縫漏掉。"
      },
      type: "why",
      questions: [
        { en: "What type of content is likeliest to generate a response from a particular customer?", zh: "哪一種內容最可能讓特定顧客回應？" },
        { en: "How does the ideal customer prefer to engage in the sales process?", zh: "理想顧客偏好甚麼樣的銷售互動方式？" },
        { en: "What problems do customers need to solve, and how does the business help them?", zh: "顧客需要解決甚麼問題，企業如何協助？" }
      ],
      reasons: [
        {
          name: { en: "Objectivity", zh: "客觀性" },
          body: {
            en: "It is easy to assume that you, the marketer or owner, are the target audience. You are one type of customer, not the only one. Multiple personas force empathy across multiple viewpoints, not just yours.",
            zh: "我們很容易誤以為自己就是目標客群。其實你只是其中一類顧客，不是唯一一類。建立多個 persona 會迫使團隊從多個角度同理顧客，而不只是自己。"
          },
          tag: "Source Fact"
        },
        {
          name: { en: "Focus", zh: "聚焦" },
          body: {
            en: "Knowing what makes a customer tick makes it easier to develop content that speaks to that person. Personas align sales and marketing on a shared understanding of who is being served.",
            zh: "理解顧客的核心動機，內容才能寫到對的地方。Persona 也讓 sales 與 marketing 對於服務對象有共同認知。"
          },
          tag: "Source Fact"
        },
        {
          name: { en: "Strategy", zh: "策略" },
          body: {
            en: "Assuming you know what the customer wants is one of the biggest mistakes. Asking the right questions identifies the gaps that your product or service is actually able to fill.",
            zh: "「以為自己知道顧客要甚麼」是最大的錯誤之一。問對問題，才能找出產品或服務真正能填補的缺口。"
          },
          tag: "Source Fact"
        }
      ],
      determines: [
        { en: "Content format that gets the best response", zh: "回應率最高的內容形式" },
        { en: "Media channels likely to reach the most potential customers", zh: "最可能觸及潛在顧客的媒體通路" },
        { en: "Tone of writing and customer communication", zh: "書寫語氣與顧客溝通語氣" },
        { en: "Content types that attract the most new leads", zh: "最能吸引新名單的內容類型" },
        { en: "Calls to action that generate the best response rate", zh: "回應率最高的 CTA" }
      ]
    },

    {
      id: "persona-not",
      group: "personas",
      kicker: { en: "What it is not", zh: "甚麼不是 persona" },
      title: { en: "A persona is not a demographic, a job title, or the buying journey", zh: "Persona 不是人口統計，不是職稱，更不是 buyer journey" },
      summary: {
        en: "Three common shortcuts undermine the persona. Writing a persona as demographic facts. Writing one as a job title. Treating buyer persona and buyer journey as interchangeable. None of these surface the behavior that personas are supposed to explain.",
        zh: "三種常見偷懶會讓 persona 失效：只把 persona 寫成人口統計事實、把 persona 寫成職稱、把 buyer persona 與 buyer journey 當成同義詞。這三種寫法都看不見 persona 真正要解釋的「行為」。"
      },
      type: "not",
      contrasts: [
        {
          label: { en: "Demographics vs personas", zh: "人口統計 vs persona" },
          left: {
            title: { en: "Surface data alone", zh: "只有表層資料" },
            bullets: [
              { en: "Caucasian", zh: "白人" },
              { en: "Female", zh: "女性" },
              { en: "Age 25 to 35", zh: "25 至 35 歲" },
              { en: "Employed", zh: "在職" },
              { en: "Single, urban", zh: "單身、都會" }
            ]
          },
          right: {
            title: { en: "Persona behavior detail", zh: "Persona 行為細節" },
            bullets: [
              { en: "Does not own a car, so online buying matters", zh: "沒有汽車，所以線上購物很重要" },
              { en: "Has disposable income, still wants a good deal", zh: "有可支配收入，仍想拿到好價格" },
              { en: "Uses smartphone more than laptop", zh: "用手機多於用筆電" },
              { en: "Prefers email to phone", zh: "偏好 email 多於電話" },
              { en: "Uses social to stay current on trends", zh: "用 social 追蹤趨勢" }
            ]
          }
        },
        {
          label: { en: "Job titles vs personas", zh: "職稱 vs persona" },
          left: {
            title: { en: "Title based shortcut", zh: "用職稱當捷徑" },
            bullets: [
              { en: "Write a CEO persona, a CFO persona, and so on", zh: "寫一個 CEO persona、一個 CFO persona" },
              { en: "Assume different titles mean different behavior", zh: "假設不同職稱代表不同行為" }
            ]
          },
          right: {
            title: { en: "Behavior based grouping", zh: "用行為分群" },
            bullets: [
              { en: "Selling financial software: CEO and CFO may behave very differently", zh: "賣財務軟體時：CEO 與 CFO 行為可能差很多" },
              { en: "Selling HR services: HR is the buyer, executives sign budget", zh: "賣 HR 服務時：HR 才是買家，executives 簽預算" },
              { en: "If executives share strategic goals, merge into one Executive persona", zh: "如果 executives 有共同策略目標，就合併成一個 Executive persona" }
            ]
          }
        }
      ],
      misconceptions: [
        { bad: { en: "A job title", zh: "把職稱當 persona" }, why: { en: "The same title behaves differently across products and buying contexts.", zh: "同一職稱在不同產品、不同情境中行為差異可能很大。" } },
        { bad: { en: "A demographic segment", zh: "把人口統計當 persona" }, why: { en: "Age, gender, and income alone do not explain motivation, objections, or media behavior.", zh: "年齡、性別、收入本身解釋不了動機、反對理由與媒體行為。" } },
        { bad: { en: "Every buying role", zh: "每個買方角色都寫一個" }, why: { en: "Roles only matter if they create meaningful behavioral differences. Otherwise merge them.", zh: "角色只有在造成有意義行為差異時才重要，否則合併。" } },
        { bad: { en: "The buyer journey itself", zh: "把 buyer journey 當 persona" }, why: { en: "The journey is the process. The persona is the person moving through that process.", zh: "Journey 是流程，persona 是走過流程的人。" } }
      ]
    },

    {
      id: "persona-build",
      group: "personas",
      kicker: { en: "Three phase process", zh: "三階段流程" },
      title: { en: "Build personas like a scientific method", zh: "用科學方法建構 persona" },
      summary: {
        en: "Internal conversations form the hypothesis. Customer conversations test it. Synthesis combines qualitative interviews with hard data from web tools, keywords, engagement, email open rates, and buying intent signals into a profile the whole organization can use.",
        zh: "內部訪談形成假設，顧客訪談檢驗假設，整合則把質化訪談與來自 web tools、keywords、engagement、email 開信率與 buying intent 等硬資料合併成全公司可用的 profile。"
      },
      type: "build",
      phases: [
        {
          num: "1",
          name: { en: "Internal conversations", zh: "內部訪談" },
          body: {
            en: "Start with a kickoff call so sales, marketing, and customer service agree on what a persona actually is. Then interview each team. They each see a different slice of the customer.",
            zh: "先開一場 kickoff call，讓 sales、marketing 與 customer service 對「persona 到底是甚麼」對齊。接著分別訪談各組，他們看見顧客的不同切面。"
          },
          interviews: [
            {
              who: { en: "Sales", zh: "Sales" },
              note: { en: "Closest to live buying decisions, hears the actual objections and questions.", zh: "離真實購買決策最近，聽到的是真正的反對理由與問題。" },
              questions: [
                { en: "What types of customers do you typically meet?", zh: "你通常會遇到哪些類型的顧客？" },
                { en: "Why do different types of customers typically make a purchase?", zh: "不同類型的顧客通常為甚麼購買？" },
                { en: "What reasons do customers cite for selecting us over a competitor?", zh: "顧客為甚麼選我們而不是競爭者？" },
                { en: "What are the most common objections you hear?", zh: "最常聽到的反對理由是甚麼？" }
              ]
            },
            {
              who: { en: "Marketing", zh: "Marketing" },
              note: { en: "Holds analytics, traffic patterns, and campaign learnings. Sees the customer indirectly but at scale.", zh: "握有分析數據、流量樣態與 campaign 學習，雖是間接看見顧客，但能看到整體規模。" },
              questions: [
                { en: "What technical and demographic data do we have on website visitors?", zh: "我們對網站訪客有哪些技術與人口統計資料？" },
                { en: "How do we currently market, and how well is it working?", zh: "我們目前怎麼行銷，效果如何？" },
                { en: "Which campaigns have been the most successful, and why?", zh: "哪些 campaign 表現最好，為甚麼？" },
                { en: "Which campaigns have failed, and why?", zh: "哪些 campaign 失敗了，為甚麼？" },
                { en: "Which blog posts get the most traffic?", zh: "哪些 blog post 流量最高？" },
                { en: "What are the most frequently asked questions?", zh: "最常被問到的問題是甚麼？" },
                { en: "Which page receives the most impressions?", zh: "哪個頁面曝光最多？" }
              ]
            },
            {
              who: { en: "Customer support", zh: "Customer support" },
              note: { en: "Hears the after sale truth, including features people love and questions they keep returning with.", zh: "聽到的是賣完之後的真實狀況，包括被喜歡的功能與顧客一再回來問的問題。" },
              questions: [
                { en: "What questions do prospects ask before buying?", zh: "潛在顧客在購買前會問甚麼？" },
                { en: "What are current customers saying?", zh: "現有顧客在說甚麼？" },
                { en: "What skill sets do customers need to use the product?", zh: "顧客需要甚麼能力才能使用產品？" },
                { en: "What are customers saying about the product, positive and negative?", zh: "顧客對產品的正面與負面回饋是甚麼？" }
              ]
            }
          ]
        },
        {
          num: "2",
          name: { en: "Customer conversations", zh: "顧客訪談" },
          body: {
            en: "Internal interviews form the hypothesis. Customer interviews test it. The framing is the scientific method: try to disprove the hypothesis, not just confirm it.",
            zh: "內部訪談形成假設，顧客訪談檢驗假設。這一步比擬為科學方法：試著推翻假設，而不只是想證實它。"
          },
          candidates: [
            { name: { en: "People who chose to buy your solution", zh: "選擇購買你的方案的人" }, why: { en: "Reveals what closed the deal, in their words.", zh: "用他們自己的話揭露為甚麼成交。" } },
            { name: { en: "People who chose not to buy anything", zh: "誰都沒買的人" }, why: { en: "Reveals what the category itself fails to convince of.", zh: "揭露這個品類本身說服不了甚麼。" } },
            { name: { en: "People who bought from competitors", zh: "向競爭者購買的人" }, why: { en: "Reveals positioning gaps you cannot see from inside.", zh: "揭露從公司內部看不到的定位缺口。" } }
          ],
          method: {
            en: "Use open ended questions instead of yes or no questions. Asking whether someone would buy gives almost no information. Asking exactly why they would or would not buy gives a usable range of responses.",
            zh: "用開放式問題，不要用是非題。問「會不會買」幾乎得不到資訊，問「為甚麼會或不會買」才會收到可用的回答範圍。"
          }
        },
        {
          num: "3",
          name: { en: "Synthesis and writing", zh: "整合與書寫" },
          body: {
            en: "Combine qualitative interviews with hard data. Google Analytics segments by keyword, traffic source, engagement, email open rates, demo requests, and buying intent signals. Translate the data into narrative form so other departments can actually read it.",
            zh: "把質化訪談與硬資料合併。Google Analytics 依 keyword 與流量來源分群、engagement、email 開信率、demo 請求與 buying intent 訊號都能用。把資料翻譯成敘事，這樣其他部門才讀得進去。"
          },
          dataSources: [
            { en: "Qualitative interviews with sales, marketing, support, and customers", zh: "Sales、marketing、support 與顧客的質化訪談" },
            { en: "Google Analytics segments by keyword and traffic source", zh: "Google Analytics 依 keyword 與流量來源分群" },
            { en: "Engagement rates by content piece", zh: "依內容項目的 engagement rate" },
            { en: "Email open rates and click rates", zh: "Email 開信率與點擊率" },
            { en: "Demo requests and buying intent signals", zh: "Demo 請求與 buying intent 訊號" }
          ]
        }
      ]
    },

    {
      id: "interview-library",
      group: "personas",
      kicker: { en: "Question library", zh: "訪談題庫" },
      title: { en: "Six categories of customer interview questions", zh: "六大類顧客訪談題目" },
      summary: {
        en: "Not every question gets asked in every interview. The point is to have a deep enough bench so that whichever direction the customer takes, there is a follow up question that goes one layer deeper.",
        zh: "不是每場訪談都把每題問完，重點是題庫夠深，無論顧客往哪個方向走，都還有下一層可以追問。"
      },
      type: "interview",
      categories: [
        {
          name: { en: "Demographic", zh: "人口統計" },
          intent: { en: "Surface facts. Necessary but never sufficient.", zh: "表層事實，必要但永遠不夠。" },
          qs: [
            { en: "What is your marital status?", zh: "你的婚姻狀況？" },
            { en: "What is your household income level?", zh: "你的家庭收入級距？" },
            { en: "Where do you live?", zh: "你住在哪裡？" },
            { en: "Are you a homeowner or renter?", zh: "自有住宅或租屋？" },
            { en: "What is your gender?", zh: "性別？" },
            { en: "What is your age?", zh: "年齡？" },
            { en: "Do you have children, and what ages?", zh: "有沒有子女，各幾歲？" }
          ]
        },
        {
          name: { en: "Career", zh: "職涯" },
          intent: { en: "How work life shapes media, time, and budget.", zh: "工作生活如何形塑媒體、時間與預算。" },
          qs: [
            { en: "In what industry do you work?", zh: "你在甚麼產業？" },
            { en: "What is your current job level?", zh: "目前職級？" },
            { en: "What job level do you aspire to?", zh: "想往哪個職級前進？" },
            { en: "How long have you been in your current position?", zh: "在目前職位多久了？" },
            { en: "What is your education level?", zh: "教育程度？" }
          ]
        },
        {
          name: { en: "Daily life", zh: "日常生活" },
          intent: { en: "Reveals real time and attention budget.", zh: "揭露真正的時間與注意力預算。" },
          qs: [
            { en: "What does a typical day look like for you?", zh: "你的典型一天是甚麼樣子？" },
            { en: "How much time do you spend at work and at home?", zh: "工作與在家的時間比例？" },
            { en: "What do you do for fun?", zh: "休閒時做甚麼？" },
            { en: "Who are the most important people in your life?", zh: "生活中最重要的人是誰？" },
            { en: "What types of vehicles do you own and why?", zh: "擁有甚麼樣的車輛，為甚麼？" },
            { en: "What do you watch on television?", zh: "電視看甚麼？" }
          ]
        },
        {
          name: { en: "Consumer habits", zh: "消費習慣" },
          intent: { en: "Research patterns, deal sensitivity, channel preference.", zh: "研究方式、價格敏感度與通路偏好。" },
          qs: [
            { en: "Where do you go to learn about a product or service?", zh: "你會去哪裡了解產品或服務？" },
            { en: "What offline resources do you use?", zh: "會使用哪些線下資源？" },
            { en: "What online resources do you use?", zh: "會使用哪些線上資源？" },
            { en: "Where do you prefer to do your shopping?", zh: "偏好在哪裡購物？" },
            { en: "How do you prefer to interact with vendors?", zh: "偏好甚麼方式與廠商互動？" },
            { en: "Whom do you ask for recommendations?", zh: "會問誰要推薦？" },
            { en: "How important is it to get a good deal?", zh: "拿到好價格有多重要？" },
            { en: "What types of mobile devices do you own?", zh: "使用甚麼行動裝置？" },
            { en: "What kinds of indulgent purchases do you make?", zh: "你會做甚麼樣的享受型購買？" }
          ]
        },
        {
          name: { en: "Pain points", zh: "痛點" },
          intent: { en: "The most strategically important category. Drives messaging.", zh: "策略上最重要的一組，直接驅動訊息設計。" },
          qs: [
            { en: "What is the most frustrating part of your day?", zh: "一天裡最讓你挫折的部分是甚麼？" },
            { en: "What is the worst customer service experience you have had?", zh: "你經歷過最糟的客服經驗？" },
            { en: "What regular activity do you find stressful?", zh: "甚麼日常活動讓你感到壓力？" },
            { en: "What makes you nervous?", zh: "甚麼會讓你緊張？" },
            { en: "What is the fastest way to make you angry?", zh: "甚麼最快讓你生氣？" },
            { en: "What is your least favorite part of your job?", zh: "工作中你最不喜歡哪部分？" },
            { en: "What is the worst job you can imagine?", zh: "你能想像最糟的工作是甚麼？" },
            { en: "What purchase under X dollars did you most regret?", zh: "在 X 元以下，你最後悔的購買？" },
            { en: "What do you worry about?", zh: "你擔心甚麼？" },
            { en: "What accomplishments are you most proud of?", zh: "最自豪的成就是甚麼？" },
            { en: "What are the top three things on your bucket list?", zh: "你的 bucket list 前三名是甚麼？" }
          ]
        },
        {
          name: { en: "Industry specific", zh: "產業專屬" },
          intent: { en: "Customize by category. Catches what the generic list misses.", zh: "依產業客製化，接住通用題庫漏掉的部分。" },
          qs: [
            { en: "What are the most common challenges in your industry?", zh: "你的產業最常見的挑戰是甚麼？" },
            { en: "What value is typically associated with your industry?", zh: "你的產業通常被認為提供甚麼價值？" },
            { en: "What is the preferred type of sales experience in your industry?", zh: "你的產業偏好甚麼樣的銷售體驗？" },
            { en: "What are the most common objections to your product or service?", zh: "你的產品或服務最常被反對的點？" },
            { en: "What are the top questions asked by customers?", zh: "顧客最常問的問題？" },
            { en: "What are the top questions asked by prospects?", zh: "潛在顧客最常問的問題？" }
          ]
        }
      ]
    },

    {
      id: "profile-elements",
      group: "personas",
      kicker: { en: "Profile shape", zh: "Profile 結構" },
      title: { en: "Two complementary profile templates", zh: "兩套互補的 profile 模板" },
      summary: {
        en: "SmartBug describes the persona as an object: name, description, image, identifiers. SilverTech describes the persona as a starting point for a flow: demographics, background, motivations, frustrations, ideal experience. The two are not contradictory; they each fit a different document.",
        zh: "SmartBug 把 persona 描述為「物件」：name、description、image、identifiers。SilverTech 把 persona 描述為「流程起點」：demographics、background、motivations、frustrations、ideal experience。兩者不衝突，只是適用不同文件。"
      },
      type: "profile",
      smartbug: [
        { key: "a", field: { en: "Name", zh: "Name" }, detail: { en: "A descriptive nickname such as Thrifty Tom, Elegant Annie, or Practical Pete. Anchors team decisions: would Practical Pete actually click this?", zh: "描述性暱稱，例如 Thrifty Tom、Elegant Annie 或 Practical Pete。用來定錨團隊決策：Practical Pete 真的會點這個嗎？" } },
        { key: "b", field: { en: "Description", zh: "Description" }, detail: { en: "Demographic data plus a behavioral narrative covering daily life, common challenges, purchase behavior, and other factors that change how sales and marketing engage.", zh: "人口統計加上行為敘事，涵蓋日常生活、常見挑戰、購買行為，以及其他會影響 sales 與 marketing 互動方式的因素。" } },
        { key: "c", field: { en: "Image", zh: "Image" }, detail: { en: "Optional. Stock image or a real customer photo with consent. Useful only if it clarifies rather than stereotypes.", zh: "可選。圖庫照片或經同意的真實顧客照片。只有在幫助理解、不造成刻板化時才有價值。" } },
        { key: "d", field: { en: "Identifiers", zh: "Identifiers" }, detail: { en: "Traits that help salespeople or marketers recognize the persona in the wild, so they can pick the right message quickly.", zh: "幫助 sales 或 marketing 在真實情境中快速辨識 persona 的特徵，這樣才能立刻選對訊息。" } }
      ],
      silvertech: [
        { key: "1", field: { en: "Demographics", zh: "Demographics" }, detail: { en: "Basic profile data that anchors who this person is.", zh: "基本資料，定錨這個人是誰。" } },
        { key: "2", field: { en: "Background", zh: "Background" }, detail: { en: "Context around how they arrived at this stage of life and decision.", zh: "他們如何走到目前的人生階段與決策位置。" } },
        { key: "3", field: { en: "Motivations and influences", zh: "Motivations and influences" }, detail: { en: "What they want, and who or what shapes that wanting.", zh: "他們想要甚麼，甚麼人或甚麼事在形塑這份想要。" } },
        { key: "4", field: { en: "Frustrations and barriers", zh: "Frustrations and barriers" }, detail: { en: "What stops them, slows them, or makes them retreat.", zh: "甚麼會阻擋、拖慢或讓他們退縮。" } },
        { key: "5", field: { en: "Ideal experience", zh: "Ideal experience" }, detail: { en: "What it looks like when the brand actually does this well for them.", zh: "品牌真正服務到位時，是甚麼樣子。" } }
      ],
      recommendation: {
        en: "SilverTech recommends 5 to 7 personas per organization. That is also the minimum number of journey maps the digital marketer should plan to build.",
        zh: "SilverTech 建議每間組織建立 5 到 7 個 persona，這也是數位行銷需要規劃的 journey map 最少數量。"
      }
    },

    {
      id: "advanced-personas",
      group: "personas",
      kicker: { en: "Beyond the buyer persona", zh: "Buyer persona 之外" },
      title: { en: "Customer, negative, and micro personas extend the system", zh: "Customer、negative 與 micro persona 把系統延伸開來" },
      summary: {
        en: "Standard buyer personas are not the only players. Customer personas explain what drives behavior after the sale. Negative personas identify who you do not want as a customer. Micro personas split one macro persona by communication preference, technology adoption, life stage, or responsibility.",
        zh: "標準 buyer persona 不是唯一玩家。Customer persona 解釋成交後的驅動因素；Negative persona 辨識「不要的顧客」；Micro persona 用溝通偏好、技術接受度、人生階段或職責，把一個 macro persona 切成多個子類型。"
      },
      type: "advanced",
      types: [
        {
          name: { en: "Customer persona", zh: "Customer persona" },
          summary: { en: "Built around the post sale experience. The questions shift to whether support issues happened, how the product is being used, and what the customer wishes the company gave them more of.", zh: "圍繞成交後的體驗建立。題目從「為甚麼買」轉向「有沒有支援問題、實際使用狀況、希望公司再多給甚麼」。" },
          questions: [
            { en: "Have they ever had support issues?", zh: "他們是否遇過支援問題？" },
            { en: "What are their experiences with the product so far?", zh: "他們目前的使用經驗是甚麼？" },
            { en: "What do they wish the company was giving them more of?", zh: "他們希望公司再多給他們甚麼？" }
          ],
          useFor: { en: "Retention, loyalty, and advocacy", zh: "留存、忠誠與口碑推薦" }
        },
        {
          name: { en: "Negative persona", zh: "Negative persona" },
          summary: { en: "The exact opposite of a buyer persona. Identifies archetypes the business should not pursue because they cost more in time, money, staff morale, and reputation than they bring back.", zh: "Buyer persona 的反面，用來辨識應該主動避開的客群，因為他們在時間、金錢、團隊士氣與聲譽上花掉的，會超過他們帶回的。" },
          useFor: { en: "Lower cost per lead and per customer, higher sales productivity", zh: "降低每筆 lead 與每位顧客的成本，提升銷售產能" }
        },
        {
          name: { en: "Micro persona", zh: "Micro persona" },
          summary: { en: "A subset of one macro persona, divided by more subtle features. One macro persona can have several micro personas, but each micro persona belongs to only one macro.", zh: "屬於單一 macro persona 的子集，依較細的特徵切分。一個 macro persona 可有多個 micro，每個 micro 只屬於一個 macro。" },
          useFor: { en: "Sharper content angles inside an already validated persona", zh: "在已驗證的 persona 內找出更精準的內容切角" }
        }
      ],
      mary: {
        macro: { en: "Marketing Mary is a marketing manager at a 50 to 200 person company. Her main goal is more leads and proving ROI, but she feels she does not have enough hours in the day.", zh: "Marketing Mary 是一家 50 到 200 人公司的行銷主管。她的主要目標是更多 leads 與證明 ROI，但她覺得一天的時間不夠。" },
        micros: [
          { name: { en: "Young Mary", zh: "Young Mary" }, body: { en: "Highly tech savvy. Wants automation for everything. Not afraid of new technology.", zh: "技術接受度高，甚麼都想自動化，不怕新技術。" } },
          { name: { en: "Mature Mary", zh: "Mature Mary" }, body: { en: "Not tech savvy. Intimidated by new technology. Takes time to warm up to new systems.", zh: "技術接受度低，害怕新技術，需要時間才能接受新系統。" } },
          { name: { en: "Leader Mary", zh: "Leader Mary" }, body: { en: "Large team. Delegates content creation. Owns high level strategy, budget, and numbers.", zh: "團隊大，內容創作由下屬完成，自己負責高階策略、預算與績效。" } },
          { name: { en: "Tactical Mary", zh: "Tactical Mary" }, body: { en: "One or two direct reports. Doing many tasks herself.", zh: "只有一到兩位下屬，很多工作要自己動手。" } }
        ]
      },
      pat: {
        macro: { en: "Stay-at-Home Parent Pat is a full time parent of two school aged children. Pat's spouse works full time. Pat wants to be present for the kids but sometimes feels pressure to go back to work.", zh: "Stay-at-Home Parent Pat 是兩個學齡子女的全職家長。配偶有全職工作。Pat 希望多陪伴孩子，但有時感受到回去工作的壓力。" },
        micros: [
          { name: { en: "Technically Skilled Pat", zh: "Technically Skilled Pat" }, body: { en: "Previously in the workforce with marketable skills, for example a developer.", zh: "曾在職場工作，技能可變現，例如曾是工程師。" } },
          { name: { en: "General Workforce Pat", zh: "General Workforce Pat" }, body: { en: "Previously in the workforce, but skills are less marketable, for example a call center specialist.", zh: "曾在職場工作，但技能較難變現，例如曾在客服中心。" } },
          { name: { en: "Pat with Adult Children", zh: "Pat with Adult Children" }, body: { en: "Children in high school. Soon to be an empty nester.", zh: "子女在高中，即將進入空巢期。" } },
          { name: { en: "Pat with Young Children", zh: "Pat with Young Children" }, body: { en: "Children in elementary school. At home for at least another decade.", zh: "子女在小學，至少還會在家裡住十年以上。" } }
        ]
      }
    },

    {
      id: "use-persona",
      group: "personas",
      kicker: { en: "Cross functional use", zh: "跨部門使用" },
      title: { en: "Personas serve marketing, sales, support, and product", zh: "Persona 同時服務 marketing、sales、support 與 product" },
      summary: {
        en: "Personas do not live only inside marketing. Sales uses them to engage. Support uses them to confirm communication preferences and to feed product development. Product teams should be able to point to the persona behind each new feature.",
        zh: "Persona 不能只活在行銷部門。Sales 用 persona 推進對話，support 用 persona 確認溝通偏好並回饋產品開發，product 團隊應能指出每個新功能背後對應的 persona。"
      },
      type: "use",
      teams: [
        { name: { en: "Marketing", zh: "Marketing" }, purpose: { en: "Attract the right people", zh: "吸引對的人" }, how: { en: "Choose content format, channel mix, tone, CTA, and the long tail keyword behind each piece. Cater language to what each persona actually says.", zh: "選內容形式、通路組合、語氣、CTA，以及每篇內容背後的長尾關鍵字。用 persona 真正會講的語言寫內容。" } },
        { name: { en: "Sales", zh: "Sales" }, purpose: { en: "Engage with contacts", zh: "與名單對話" }, how: { en: "Before a live conversation, know the persona's pains, how they measure success, what they value, and how they prefer to be contacted.", zh: "進入對話前，先掌握 persona 的痛點、成功標準、價值觀，以及偏好的聯絡方式。" } },
        { name: { en: "Customer support", zh: "Customer support" }, purpose: { en: "Confirm and refine", zh: "確認與精煉" }, how: { en: "Validate values and communication preferences in real interactions. Feed observations back to product so features can be built around personas rather than around guesses.", zh: "在真實互動中驗證價值觀與溝通偏好，把觀察回饋到產品，讓新功能依 persona 設計而非憑感覺。" } },
        { name: { en: "Product", zh: "Product" }, purpose: { en: "Build the right features", zh: "做對的功能" }, how: { en: "For each new feature, answer three questions: Who is this for? How does it make their job easier? How does it alleviate their pain?", zh: "每個新功能都要回答三個問題：給誰用？怎麼讓他的工作更輕鬆？怎麼減輕他的痛點？" } }
      ],
      rules: [
        { en: "Not every blog post needs to cater to every persona. Most pieces serve one.", zh: "不是每篇 blog post 都要服務所有 persona，多數內容只服務一個。" },
        { en: "Choose a title and long tail keyword that fits a specific persona's question.", zh: "選的標題與長尾關鍵字要對到某個 persona 真正想問的問題。" },
        { en: "Use the language each persona actually uses. Industry jargon for some, plain language for others.", zh: "用每個 persona 真正會用的語言。某些 persona 接受產業術語，某些 persona 需要白話。" }
      ]
    },

    {
      id: "persona-kpi",
      group: "personas",
      kicker: { en: "Accountability", zh: "問責" },
      title: { en: "Tie each persona to at least one KPI", zh: "每個 persona 至少對應一個 KPI" },
      summary: {
        en: "Data is the only honest test of whether a persona is working. Tracking MQLs, SQLs, opportunities, and revenue per persona reveals whether you missed a critical persona, misunderstood one, or wasted effort on the wrong one. Conversations with sales remain the qualitative companion to that data.",
        zh: "數據是檢驗 persona 是否成立的唯一誠實測試。追蹤每個 persona 的 MQL、SQL、opportunity 與營收，可以看出是否漏掉重要 persona、誤判某個 persona，或押錯重點。Sales 對話則是這份數據的質化夥伴。"
      },
      type: "kpi",
      kpis: [
        { name: { en: "Marketing Qualified Leads (MQLs)", zh: "MQL" }, why: { en: "Shows whether this persona is finding you in the first place.", zh: "顯示這個 persona 是否能找到你。" } },
        { name: { en: "Sales Qualified Leads (SQLs)", zh: "SQL" }, why: { en: "Shows whether marketing's persona signal survives sales scrutiny.", zh: "顯示行銷端的 persona 訊號能否通過業務檢驗。" } },
        { name: { en: "Opportunities", zh: "Opportunities" }, why: { en: "Shows whether this persona reaches active sales motion.", zh: "顯示這個 persona 是否真的進入銷售流程。" } },
        { name: { en: "Revenue by persona", zh: "依 persona 拆解的營收" }, why: { en: "The most direct test of whether the persona is commercially correct.", zh: "Persona 是否在商業上正確的最直接檢驗。" } }
      ]
    },

    {
      id: "maintenance",
      group: "personas",
      kicker: { en: "Maintenance", zh: "維護" },
      title: { en: "Personas are dynamic, not delivered once and forgotten", zh: "Persona 是動態的，不是交一次就結束" },
      summary: {
        en: "Review personas at minimum once per year. Specific events should trigger an out of cycle update. The point is to keep personas current with the business and the market, not to treat them as historical artifacts.",
        zh: "Persona 至少每年檢視一次。下列事件應啟動非例行更新。重點是讓 persona 與業務、市場保持同步，而不是把它當成歷史文物。"
      },
      type: "triggers",
      triggers: [
        { en: "Buyout or merger", zh: "併購或整合" },
        { en: "Shift in business strategy", zh: "業務策略轉向" },
        { en: "Change in products or services", zh: "產品或服務變動" },
        { en: "After attending a trade show or industry event", zh: "出席產業展或活動之後" },
        { en: "Annual review at minimum", zh: "至少每年一次例行檢視" }
      ]
    },

    {
      id: "journey-why",
      group: "journey",
      kicker: { en: "Purpose", zh: "目的" },
      title: { en: "A journey map solves problems at every touchpoint", zh: "Journey map 在每個接觸點解問題" },
      summary: {
        en: "Take the persona, walk them through a hypothetical experience, identify where the experience is good, where it fails, and what content or feature should fill each gap. The most immediate benefit is content gap analysis, especially for the website.",
        zh: "拿一個 persona，走過一段假設的體驗，標出哪裡好、哪裡失敗、哪裡需要甚麼內容或功能補上。最直接的效益是內容缺口分析，特別是針對網站。"
      },
      type: "journey-why",
      benefits: [
        { en: "Improves the overall customer experience at each touchpoint", zh: "在每個接觸點改善整體顧客體驗" },
        { en: "Informs information architecture for the website", zh: "影響網站資訊架構" },
        { en: "Informs in-location signage and physical experience", zh: "影響實體場域的指引與體驗" },
        { en: "Drives content gap analysis per persona", zh: "驅動每個 persona 的內容缺口分析" }
      ],
      howMany: {
        en: "At minimum, one journey map per persona on the website, so 5 to 7 maps for most organizations. Additional maps cover other experiences worth improving. A bank may map opening an account in branch in addition to online, then compare the two paths.",
        zh: "至少每個 persona 在網站上對應一張 journey map（多數組織就是 5 到 7 張），其餘可視需要新增。例如銀行可在線上開戶之外，也畫一張臨櫃開戶 journey map，兩條路徑互相對照。"
      },
      bankFlow: [
        { en: "Customer enters branch", zh: "顧客進入分行" },
        { en: "Greeted, signed in", zh: "接待、登記" },
        { en: "Waits in lobby", zh: "在大廳等候" },
        { en: "Taken in by banker", zh: "由理專帶入" },
        { en: "Opens account", zh: "開戶" }
      ],
      forms: {
        en: "Maps can be cradle to grave, covering every possible touchpoint, or scoped to a specific experience (Lego maps a visiting executive's visit). Form does not matter as much as identifying the main flows.",
        zh: "Journey map 可以涵蓋與品牌的所有接觸點，也可以鎖定特定體驗（SilverTech 引用的 Lego 案例是訪客高管的參觀流程）。形式不是重點，找出主要流程才是。"
      }
    },

    {
      id: "journey-elements",
      group: "journey",
      kicker: { en: "Anatomy", zh: "結構" },
      title: { en: "Five essential elements make the map useful", zh: "五個要素讓 journey map 真的能用" },
      summary: {
        en: "A useful journey map does not only list steps. The five elements together connect the customer, the decision stage, the visible action, the emotional state, the touchpoint, the content and features that help, and the insights and opportunities the brand can act on.",
        zh: "有用的 journey map 不只列步驟。五個要素把顧客、決策階段、可見行動、情緒狀態、接觸點、支援內容與功能，以及可採取的洞察與機會串在一起。"
      },
      type: "elements",
      cards: [
        { num: "01", title: { en: "Persona", zh: "Persona" }, body: { en: "Whose journey is this map describing? One persona per map.", zh: "這張地圖描繪的是誰的旅程？一張地圖一個 persona。" }, tag: "Source Fact" },
        { num: "02", title: { en: "Stage", zh: "Stage" }, body: { en: "Where is this persona in the decision process? Awareness, consideration, decision, or post purchase.", zh: "這個 persona 在決策流程中的哪個位置？Awareness、consideration、decision 或 post purchase。" }, tag: "Source Fact" },
        { num: "03", title: { en: "Action, emotion, touchpoint", zh: "Action、emotion、touchpoint" }, body: { en: "What does the person do, feel, and interact with at this point? Emotion is the part most often skipped, and it changes how the message is received.", zh: "此刻這個人做甚麼、感受甚麼、接觸甚麼？情緒最常被略過，卻會改變訊息被接收的方式。" }, tag: "Source Fact" },
        { num: "04", title: { en: "Supporting content and features", zh: "Supporting content and features" }, body: { en: "What content or feature should be present at this exact moment to help the person move forward?", zh: "此刻需要甚麼內容或功能，幫助這個人往下一步移動？" }, tag: "Source Fact" },
        { num: "05", title: { en: "Insights and opportunities", zh: "Insights and opportunities" }, body: { en: "What can be improved, automated, or made more reassuring? Offstage interactions get flagged for automation here.", zh: "哪裡可以改善、自動化，或讓顧客更安心？Offstage 互動可以在這裡標出來做自動化。" }, tag: "Source Fact" }
      ]
    },

    {
      id: "stages",
      group: "journey",
      kicker: { en: "Four stages", zh: "四個階段" },
      title: { en: "Use four stages, but do not pretend the journey is linear", zh: "採用四階段，但不要假裝旅程是線性的" },
      summary: {
        en: "HubSpot defines three stages: awareness, consideration, decision. SilverTech adds a fourth: post purchase. The map looks linear because that is easier to read, but real customers skip stages and restart the journey. The fourth stage matters most because it is the only one that turns into loyalty, referrals, retention, and CLV.",
        zh: "HubSpot 定義 awareness、consideration、decision 三個階段，SilverTech 再加上 post purchase。圖看起來是線性的只是因為這樣比較好讀，真實顧客會跳階段，也會重新開始旅程。第四階段最關鍵，因為只有它會轉化為忠誠、推薦、留存與 CLV。"
      },
      type: "stages",
      stages: [
        { name: { en: "Awareness", zh: "Awareness" }, source: "HubSpot", quote: { en: "Buyers identify their challenge or an opportunity they want to pursue.", zh: "買方辨認出自己的挑戰，或想追求的機會。" }, mindset: { en: "I have a problem or goal.", zh: "我有一個問題或目標。" }, content: { en: "Whitepaper, checklist, how to video, educational post", zh: "白皮書、checklist、教學影片、教育型貼文" }, emotion: { en: "Curious, concerned, unsure", zh: "好奇、擔憂、不確定" }, kpi: { en: "Impressions, reach, CTR", zh: "Impressions、reach、CTR" } },
        { name: { en: "Consideration", zh: "Consideration" }, source: "HubSpot", quote: { en: "Buyers have clearly defined the goal or challenge and have committed to addressing it.", zh: "買方已清楚定義目標或挑戰，並決定處理它。" }, mindset: { en: "I am comparing solution paths.", zh: "我正在比較可能解法。" }, content: { en: "Webinar, case study, FAQ, comparison guide", zh: "Webinar、case study、FAQ、比較指南" }, emotion: { en: "Evaluative, cautious", zh: "評估中、謹慎" }, kpi: { en: "Time on page, email signup, saves", zh: "Time on page、email signup、saves" } },
        { name: { en: "Decision", zh: "Decision" }, source: "HubSpot", quote: { en: "Buyers have already decided on a solution category.", zh: "買方已選定解決方案的類別。" }, mindset: { en: "I am choosing among providers or options.", zh: "我正在挑供應商或選項。" }, content: { en: "Trial, demo, consultation, testimonial, transparent pricing", zh: "Trial、demo、consultation、testimonial、透明價格" }, emotion: { en: "Ready, urgent, skeptical", zh: "就緒、急迫、懷疑" }, kpi: { en: "Conversion rate, leads, purchases", zh: "Conversion rate、leads、purchases" } },
        { name: { en: "Post Purchase", zh: "Post Purchase" }, source: "+ SilverTech", quote: { en: "The customer is now engaging with the product or service. The opportunity is to surprise, delight, and build loyalty.", zh: "顧客開始使用產品或服務，這一階段的機會在於驚喜、愉悅與忠誠經營。" }, mindset: { en: "Did this meet expectations, and should I stay?", zh: "這是否符合期待？我要留下嗎？" }, content: { en: "Satisfaction survey, special offer, referral bonus, onboarding", zh: "滿意度問卷、special offer、referral bonus、onboarding" }, emotion: { en: "Satisfied, disappointed, loyal, frustrated", zh: "滿意、失望、忠誠、挫折" }, kpi: { en: "Retention, repeat purchase, referral", zh: "Retention、repeat purchase、referral" } }
      ],
      nonLinear: {
        en: "Though the stages are drawn linearly, customers are not on a linear journey. They may skip stages, return to earlier stages, or restart the journey entirely. The linear representation is for ease of reading, not a claim about reality.",
        zh: "雖然圖上是線性排列，顧客其實不在線性旅程上。他們可能跳階段、回到先前階段，或整段重來。線性畫法是為了好讀，不是對現實的主張。"
      }
    },

    {
      id: "emotion",
      group: "journey",
      kicker: { en: "Emotion", zh: "情緒" },
      title: { en: "The same content needs a different tone at different emotional states", zh: "同一份內容，在不同情緒下需要不同語氣" },
      summary: {
        en: "Emotion is the most often skipped part of a journey map, even though it changes how everything else is received. In one to one conversations we already adjust tone, volume, and posture based on what the other person is feeling. The same has to happen on a landing page, in an ad, and in an email.",
        zh: "情緒是 journey map 中最容易被略過的部分，卻會改變所有其他東西的接收方式。一對一對話時，我們本來就會依對方情緒調整語氣、音量與肢體，落地頁、廣告與 email 也該如此。"
      },
      type: "emotion",
      tones: [
        { state: { en: "Nervous customer", zh: "緊張的顧客" }, prescription: { en: "Lead with reassurance. Lower perceived risk before any persuasion.", zh: "先給 reassurance，降低感受到的風險，再談說服。" } },
        { state: { en: "Frustrated customer", zh: "挫折的顧客" }, prescription: { en: "Clarity and speed. No decorative copy. Answer the question.", zh: "先清楚與快速，不要華麗文案，直接回答問題。" } },
        { state: { en: "Excited customer", zh: "興奮的顧客" }, prescription: { en: "Aspirational language can carry weight. Lean into the upside.", zh: "可承載較有想像力的訊息，往正面想像那邊推。" } },
        { state: { en: "Cautious customer", zh: "謹慎的顧客" }, prescription: { en: "Comparison content, transparent pricing, and proof points carry weight.", zh: "比較內容、透明價格與證據點較有說服力。" } },
        { state: { en: "Loyal customer", zh: "忠誠的顧客" }, prescription: { en: "Referral mechanics, early access, and recognition reinforce the bond.", zh: "推薦機制、提前體驗與認可感能強化關係。" } }
      ]
    },

    {
      id: "content-stage",
      group: "journey",
      kicker: { en: "Stage to content", zh: "階段對應內容" },
      title: { en: "Different content shapes belong at different stages", zh: "不同階段需要不同形態的內容" },
      summary: {
        en: "The same blog post cannot do all four jobs. Awareness content educates. Consideration content compares. Decision content reduces risk. Post purchase content retains and refers.",
        zh: "同一篇 blog post 沒辦法同時做這四件事。Awareness 教育、consideration 比較、decision 降低風險、post purchase 留客與引發推薦。"
      },
      type: "content-stage",
      rows: [
        { stage: { en: "Awareness", zh: "Awareness" }, forms: { en: "Whitepaper, checklist, how to video", zh: "白皮書、checklist、教學影片" }, job: { en: "Answer and educate. Establish the problem before pitching a solution.", zh: "回答與教育，先定義問題，再談解法。" } },
        { stage: { en: "Consideration", zh: "Consideration" }, forms: { en: "Webinar, case study, FAQ", zh: "Webinar、case study、FAQ" }, job: { en: "Show how the company can help. Build credibility against alternatives.", zh: "說明公司如何協助，並對照其他選項建立可信度。" } },
        { stage: { en: "Decision", zh: "Decision" }, forms: { en: "Trial, demo, consultation", zh: "Trial、demo、consultation" }, job: { en: "Help the buyer make the purchase. Remove the last layer of uncertainty.", zh: "協助買方下決定，移除最後一層不確定感。" } },
        { stage: { en: "Post Purchase", zh: "Post Purchase" }, forms: { en: "Satisfaction survey, special offer, referral bonus", zh: "滿意度問卷、special offer、referral bonus" }, job: { en: "Retain the customer and turn them into a source of referral.", zh: "留住顧客，把他變成推薦來源。" } }
      ]
    },

    {
      id: "onstage-offstage",
      group: "journey",
      kicker: { en: "Onstage and offstage", zh: "Onstage 與 offstage" },
      title: { en: "Onstage interactions are visible. Offstage systems create the leverage.", zh: "Onstage 互動可見，offstage 系統創造槓桿" },
      summary: {
        en: "An onstage interaction is what the customer sees. An offstage interaction is what happens behind the scenes. A customer reading a blog post and signing up for a newsletter is onstage. The form trigger, list enrollment, scheduled email, retargeting audience, and lead scoring are offstage. Digital marketing gets stronger when both layers are designed together.",
        zh: "Onstage 是顧客看得到的互動，offstage 是幕後運作。顧客閱讀 blog post 並訂閱 newsletter 是 onstage；表單觸發、名單加入、排程 email、retargeting 受眾與 lead scoring 是 offstage。數位行銷的強度，來自這兩層一起設計。"
      },
      type: "onstage",
      pairs: [
        { on: { en: "Reads a blog post", zh: "閱讀 blog post" }, off: { en: "Page view recorded in analytics", zh: "分析工具紀錄 page view" } },
        { on: { en: "Signs up for newsletter", zh: "註冊 newsletter" }, off: { en: "CRM contact created, segment updated", zh: "CRM 建立聯絡人，segment 更新" } },
        { on: { en: "Receives the next post by email", zh: "收到下一篇文章的 email" }, off: { en: "Automation sends based on trigger or cadence", zh: "自動化依 trigger 或 cadence 寄送" } },
        { on: { en: "Returns to the site", zh: "回到網站" }, off: { en: "Retargeting audience or lead scoring fires", zh: "Retargeting 受眾或 lead scoring 觸發" } }
      ]
    },

    {
      id: "implementation",
      group: "journey",
      kicker: { en: "Implementation", zh: "落地" },
      title: { en: "Believe in the value, include the team, do not be intimidated, make rollout matter", zh: "相信價值、納入團隊、不要被嚇到、把推行當回事" },
      summary: {
        en: "Mapping is imperfect. You cannot map every possible scenario. The gumball machine example: do not map the unlikely accident, map the main flows. Include sales and customer service so the map is not self referential. Roll it out as a real internal event, not as another forwarded email.",
        zh: "Mapping 本來就不完美，無法窮舉每個情境。糖果機案例的重點是：不必畫出低機率事件，要畫出主要流程。建立過程要納入 sales 與 customer service，這樣 map 才不會自說自話。推行時要當成一場真正的內部活動，不是再轉發一封信。"
      },
      type: "implementation",
      principles: [
        { name: { en: "Believe in the value", zh: "相信它的價值" }, body: { en: "A simple map can quickly improve marketing. The aim is not perfection, it is identifying the ideal experience at each touchpoint and naming what comes next.", zh: "簡單的 journey map 就足以快速改善行銷。目標不是完美，而是在每個接觸點標出理想體驗，並指出下一步。" } },
        { name: { en: "Include your team", zh: "納入你的團隊" }, body: { en: "Interview sales and customer service. They interact with customers onstage and off. Skipping them leads to self referential maps.", zh: "訪談 sales 與 customer service，他們同時看見 onstage 與 offstage 的顧客。略過他們，map 只會自說自話。" } },
        { name: { en: "Use your map", zh: "用你的 map" }, body: { en: "Do not be intimidated. Map the main flows, identify the ideal experience, name the next touchpoint, and you have already moved the experience forward.", zh: "不要被嚇到。畫出主要流程、指出理想體驗、標出下一個接觸點，就已經讓體驗前進一大步。" } },
        { name: { en: "Make rollout a big deal", zh: "把推行當回事" }, body: { en: "Do not just email the company. Run a real internal rollout so everyone understands the journey and where their team fits inside it.", zh: "不要只發一封信。辦一場真正的內部推行，讓每位同仁了解 journey，以及自己團隊在其中的位置。" } }
      ],
      gumball: {
        en: "The Gumball example: customer inserts coin, machine gives gumball. If the machine breaks, what happens? Map the main flow and the obvious failure paths. Do not waste time on the gumball that rolls out and trips an entering customer.",
        zh: "Gumball 例子：顧客投幣、機器吐糖球。如果機器壞了呢？把主流程與明顯的失敗路徑畫出來就好，不必浪費時間畫「糖球滾出來絆倒進門顧客」這種極小機率事件。"
      }
    },

    {
      id: "content-gap",
      group: "journey",
      kicker: { en: "Content gap analysis", zh: "內容缺口分析" },
      title: { en: "Where the journey map first pays for itself", zh: "Journey map 最先回本的地方" },
      summary: {
        en: "Start with the website. Map the ideal online experience for each persona. Then look at what the site currently offers. If a persona needs a comparison guide in consideration and the site does not have one, that is a content gap. If a persona needs onboarding content post purchase and the site sends only a generic thank you email, that is a content gap.",
        zh: "先做網站。針對每個 persona 描繪理想線上體驗，再回頭看網站目前提供甚麼。如果某個 persona 在 consideration 階段需要比較指南，而網站沒有，那就是 content gap；如果某個 persona 在 post purchase 階段需要 onboarding 內容，但網站只寄一封制式感謝信，那也是 content gap。"
      },
      type: "content-gap"
    },

    {
      id: "course-frameworks",
      group: "application",
      kicker: { en: "Class 01 hookup", zh: "與 Class 01 連結" },
      title: { en: "Personas and journey maps plug directly into core strategy", zh: "Persona 與 journey map 直接接到核心策略" },
      summary: {
        en: "Class 01 supplies the strategy language used to turn Class 02 into project work. The frameworks below show exactly how reading content turns into syllabus deliverables.",
        zh: "Class 01 提供把 Class 02 轉成作業的策略語言。下列框架就是把閱讀內容轉成 syllabus 作業的接口。"
      },
      type: "frameworks",
      rows: [
        { framework: { en: "Two Questions", zh: "Two Questions" }, connection: { en: "Persona answers who the target market is. Journey clarifies where the value proposition must be delivered.", zh: "Persona 回答 target market 是誰，journey 釐清 value proposition 必須在哪裡交付。" } },
        { framework: { en: "STP", zh: "STP" }, connection: { en: "Persona sharpens segmentation and targeting. Journey supports positioning through stage specific experience design.", zh: "Persona 強化 segmentation 與 targeting，journey 透過分階段體驗設計支援 positioning。" } },
        { framework: { en: "CLV", zh: "CLV" }, connection: { en: "Post Purchase converts retention, repeat purchase, and referrals into explicit marketing work.", zh: "Post Purchase 把留存、回購與推薦變成明確的行銷工作。" } },
        { framework: { en: "4Ps", zh: "4Ps" }, connection: { en: "Product becomes the full experience. Promotion becomes stage specific communication. Place becomes channel and accessibility design.", zh: "Product 變成完整體驗，Promotion 變成分階段溝通，Place 變成通路與可及性設計。" } },
        { framework: { en: "Funnel", zh: "Funnel" }, connection: { en: "Funnel is the conversion focused simplification of the journey. It is not the opposite of journey mapping.", zh: "Funnel 是偏 conversion 的 journey 簡化版，不是 journey map 的對立面。" } },
        { framework: { en: "SWOT", zh: "SWOT" }, connection: { en: "Persona findings need to be classified before entering SWOT. Internal capabilities become strengths or weaknesses. External market conditions become opportunities or threats.", zh: "Persona 訪談發現要先分類才能進 SWOT。內部能力是 strengths 或 weaknesses，外部市場條件是 opportunities 或 threats。" } }
      ]
    },

    {
      id: "templates",
      group: "application",
      kicker: { en: "Templates", zh: "模板" },
      title: { en: "Fill the templates first, then write the deliverable", zh: "先填模板，再寫作業" },
      summary: {
        en: "Two tables to reduce vague thinking. Fill the rows for a chosen persona and journey before drafting the slide deck, ad, blog outline, or audit memo. Templates stay faithful to source profile elements, with light addition of behaviorally useful fields like motivation, objections, and preferred CTA.",
        zh: "兩張表減少含糊思考。動筆寫簡報、廣告、blog 大綱或稽核 memo 前，先把某個 persona 與其 journey 的欄位填完。模板忠於來源 profile，少量補上行為層面有用的欄位，例如動機、反對理由、偏好 CTA。"
      },
      type: "templates",
      personaTemplate: [
        { field: { en: "Persona name", zh: "Persona 名稱" }, guide: { en: "A short descriptive nickname.", zh: "簡短描述性暱稱。" } },
        { field: { en: "Segment logic", zh: "分群邏輯" }, guide: { en: "Why this group is strategically similar.", zh: "為甚麼這群人在策略上相似。" } },
        { field: { en: "Demographics", zh: "Demographics" }, guide: { en: "Age, location, education, income, family context if relevant.", zh: "年齡、地點、教育、收入、家庭情境，視需要使用。" } },
        { field: { en: "Background", zh: "Background" }, guide: { en: "How they arrived at this stage of life and decision.", zh: "他們如何走到目前的人生階段與決策位置。" } },
        { field: { en: "Psychographics", zh: "Psychographics" }, guide: { en: "Values, lifestyle, identity, personality, emotional drivers.", zh: "價值觀、生活方式、身份認同、個性、情緒驅動。" } },
        { field: { en: "Behavior", zh: "Behavior" }, guide: { en: "Search, click, view, save, purchase, channel, device, timing.", zh: "搜尋、點擊、觀看、儲存、購買、通路、裝置、時間。" } },
        { field: { en: "Motivation", zh: "Motivation" }, guide: { en: "The job the customer is trying to complete.", zh: "顧客想完成的任務。" } },
        { field: { en: "Pain points", zh: "Pain points" }, guide: { en: "Friction, worry, stress, delay, unmet need.", zh: "阻力、擔憂、壓力、延遲、未被滿足的需求。" } },
        { field: { en: "Objections", zh: "Objections" }, guide: { en: "Why this person may not convert, follow, buy, or trust.", zh: "為甚麼此人可能不轉換、不追蹤、不購買或不信任。" } },
        { field: { en: "Preferred content", zh: "Preferred content" }, guide: { en: "Format, tone, length, depth.", zh: "形式、語氣、長度、深度。" } },
        { field: { en: "Preferred CTA", zh: "Preferred CTA" }, guide: { en: "The action this person is most likely to accept.", zh: "此人最可能接受的行動呼籲。" } },
        { field: { en: "Identifiers", zh: "Identifiers" }, guide: { en: "Traits sales or marketing teams can recognize fast.", zh: "Sales 或 marketing 能快速辨識的特徵。" } },
        { field: { en: "KPI", zh: "KPI" }, guide: { en: "Metric that proves the persona hypothesis is working.", zh: "用來證明 persona 假設是否有效的指標。" } }
      ],
      journeyTemplate: [
        { stage: { en: "Awareness", zh: "Awareness" }, action: { en: "First recognizes a problem", zh: "初次發現問題" }, emotion: { en: "Curious, worried, confused", zh: "好奇、擔憂、困惑" }, touchpoint: { en: "Social, search, blog, short video", zh: "Social、search、blog、短影音" }, content: { en: "Educational content and checklist", zh: "教育型內容與 checklist" }, friction: { en: "Low trust", zh: "低信任" }, opportunity: { en: "Clarify the problem", zh: "釐清問題" }, kpi: { en: "Impressions, reach, CTR", zh: "Impressions、reach、CTR" } },
        { stage: { en: "Consideration", zh: "Consideration" }, action: { en: "Compares solution paths", zh: "比較解法" }, emotion: { en: "Evaluative, cautious", zh: "評估、謹慎" }, touchpoint: { en: "Blog, FAQ, comparison page, webinar", zh: "Blog、FAQ、比較頁、webinar" }, content: { en: "Comparison guide and case study", zh: "比較指南與 case study" }, friction: { en: "Too many options", zh: "選項太多" }, opportunity: { en: "Build credibility", zh: "建立可信度" }, kpi: { en: "Time on page, email signup", zh: "Time on page、email signup" } },
        { stage: { en: "Decision", zh: "Decision" }, action: { en: "Chooses provider or action", zh: "做出選擇" }, emotion: { en: "Urgent, skeptical, ready", zh: "急迫、懷疑、就緒" }, touchpoint: { en: "Landing page, review, trial", zh: "Landing page、review、trial" }, content: { en: "Demo, testimonial, transparent pricing", zh: "Demo、testimonial、透明價格" }, friction: { en: "Price, trust, risk", zh: "價格、信任、風險" }, opportunity: { en: "Lower uncertainty", zh: "降低不確定" }, kpi: { en: "Conversion rate, leads", zh: "Conversion rate、leads" } },
        { stage: { en: "Post Purchase", zh: "Post Purchase" }, action: { en: "Uses, evaluates, returns or refers", zh: "使用、評估、回流或推薦" }, emotion: { en: "Satisfied, disappointed, loyal, frustrated", zh: "滿意、失望、忠誠、挫折" }, touchpoint: { en: "Email, support, app, community", zh: "Email、support、app、社群" }, content: { en: "Onboarding, survey, referral", zh: "Onboarding、survey、referral" }, friction: { en: "Poor follow up", zh: "後續跟進不佳" }, opportunity: { en: "Retention and advocacy", zh: "Retention 與 advocacy" }, kpi: { en: "Repeat purchase, referral, retention", zh: "回購、推薦、留存" } }
      ]
    },

    {
      id: "errors",
      group: "application",
      kicker: { en: "Quality control", zh: "品質控管" },
      title: { en: "Common mistakes to remove before submission", zh: "交件前必須移除的常見錯誤" },
      summary: {
        en: "The course permits AI use. The deliverable still must not look careless, generic, or unsupported. These checks beat another round of theory rewriting.",
        zh: "本課允許使用 AI，但成品不能看起來粗糙、空泛或沒有來源支撐。這些檢核比再打一輪理論筆記更有用。"
      },
      type: "errors",
      errors: [
        { mistake: { en: "Targeting everyone", zh: "目標是所有人" }, harm: { en: "No channel, message, or CTA can be meaningfully optimized.", zh: "通路、訊息、CTA 都無法被有意義地最佳化。" }, fix: { en: "Define one primary persona first.", zh: "先定義一個主 persona。" } },
        { mistake: { en: "Persona equals age plus gender", zh: "Persona = 年齡 + 性別" }, harm: { en: "Too shallow to guide content, objections, or media behavior.", zh: "太淺，無法指導內容、反對理由、媒體行為。" }, fix: { en: "Add motivation, pain points, behavior, objections.", zh: "補上動機、痛點、行為、反對理由。" } },
        { mistake: { en: "Journey map only lists steps", zh: "Journey map 只列步驟" }, harm: { en: "It becomes a process chart, not a customer experience tool.", zh: "它就變成流程圖，不是顧客體驗工具。" }, fix: { en: "Add emotion, touchpoint, friction, content, opportunity.", zh: "加入情緒、接觸點、摩擦、內容、機會。" } },
        { mistake: { en: "Same content at every stage", zh: "每個階段都用同樣內容" }, harm: { en: "Content does not match changing intent.", zh: "內容無法對應意圖變化。" }, fix: { en: "Map content to Awareness, Consideration, Decision, Post Purchase.", zh: "把內容對應到四階段。" } },
        { mistake: { en: "Ignoring Post Purchase", zh: "略過 Post Purchase" }, harm: { en: "Retention, advocacy, and CLV disappear from the plan.", zh: "留存、推薦、CLV 從計畫消失。" }, fix: { en: "Add onboarding, survey, referral, support, return triggers.", zh: "加入 onboarding、survey、referral、support 與回流觸發。" } },
        { mistake: { en: "No KPI", zh: "沒有 KPI" }, harm: { en: "Project cannot prove whether the strategy worked.", zh: "作業無法證明策略是否有效。" }, fix: { en: "Attach at least one meaningful metric to each stage or tactic.", zh: "每階段或 tactic 至少綁定一個有意義指標。" } },
        { mistake: { en: "Uncited source or AI use", zh: "未引用來源或 AI 使用" }, harm: { en: "Academic integrity and professionalism risk.", zh: "造成學術誠信與專業風險。" }, fix: { en: "Cite readings, data sources, and generative AI use in the final exhibit.", zh: "在最後 exhibit 引用閱讀、資料來源、AI 使用。" } },
        { mistake: { en: "Self referential personas", zh: "自說自話的 persona" }, harm: { en: "Reflects internal assumptions, not customer reality.", zh: "反映內部假設，不是顧客現實。" }, fix: { en: "Validate at least one hypothesis through customer or proxy customer interview.", zh: "至少透過一次顧客或代理顧客訪談驗證一個假設。" } }
      ]
    },

    {
      id: "project-application",
      group: "application",
      kicker: { en: "Course execution", zh: "課程執行" },
      title: { en: "Where this directly improves every project on the syllabus", zh: "本週閱讀直接改善 syllabus 上每項作業的地方" },
      summary: {
        en: "Bridge from persona and journey mapping to deliverables, experiments, screenshots, and metrics. Every project on the syllabus has a place for either a persona or a journey decision.",
        zh: "從 persona 與 journey 連到作業、實驗、截圖與數據。Syllabus 上每項作業都有 persona 或 journey 的位置。"
      },
      type: "projects",
      projects: [
        {
          name: { en: "Instagram organic project", zh: "Instagram 自然成長作業" },
          status: { en: "Late Night Zoo with capybara as the late night comfort character. Tiny Problem Lab as a recurring sub series.", zh: "Late Night Zoo，以 capybara 為深夜舒壓主角，Tiny Problem Lab 為固定子系列。" },
          actions: [
            { en: "Primary persona: Late Night Lurker Mia, the post 10pm scroll for soothing content audience", zh: "主 persona：Late Night Lurker Mia，晚上十點後滑社群找慰藉的族群" },
            { en: "Post at least 5 times per week", zh: "每週至少發 5 則" },
            { en: "Mix: Reels 60 percent, carousel 30 percent, single image 10 percent", zh: "比例：Reels 60%、carousel 30%、單張貼文 10%" },
            { en: "Run one experiment, preferably posting time or Reels hook type", zh: "執行一項實驗，優先選發文時段或 Reels 開頭 hook" }
          ],
          metric: { en: "Reach, profile visits, follows, saves, shares, story replies", zh: "Reach、profile visits、follows、saves、shares、story replies" }
        },
        {
          name: { en: "Meta Ads project", zh: "Meta Ads 作業" },
          status: { en: "Use Meta Ads to promote the blog post with a $30 budget and a clear A/B test.", zh: "用 Meta Ads 推廣 blog post，預算 $30，設計清楚的 A/B test。" },
          actions: [
            { en: "Choose one main variable. At a small budget, audience or creative is more readable than placement or CTA", zh: "選一個主變數。小預算下，audience 或 creative 比 placement 或 CTA 更好判讀" },
            { en: "Do not mix audience and creative unless the test cells are clearly separated", zh: "除非 test cells 清楚分開，否則不要同時混測 audience 與 creative" },
            { en: "Launch by May 22 or May 23 to preserve learning and analysis time", zh: "5/22 或 5/23 前上線，保留學習與分析時間" }
          ],
          metric: { en: "CTR, CPC, landing page views, engagement, directional conversion signal", zh: "CTR、CPC、landing page views、engagement、方向性轉換訊號" }
        },
        {
          name: { en: "Blog post project", zh: "Blog post 作業" },
          status: { en: "Recommended topic: comparing AI writing tools for MBA students. v1.0 shaped for Meta Ads, v2.0 improved for search intent, SEO, AIO, and GEO.", zh: "建議主題：MBA 學生 AI 寫作工具比較。v1.0 配合 Meta Ads，v2.0 改進 search intent、SEO、AIO、GEO。" },
          actions: [
            { en: "Select one persona and one stage for v1.0", zh: "v1.0 只鎖定一個 persona 與一個 stage" },
            { en: "Best starting point: first year MBA students under heavy coursework load", zh: "較佳起點：課業負擔重的一年級 MBA 學生" },
            { en: "Use long tail keyword logic, not a generic AI tools article", zh: "用長尾關鍵字邏輯，不寫泛泛的 AI tools 文章" }
          ],
          metric: { en: "Organic relevance, paid social fit, time on page, CTA clarity", zh: "Organic 相關度、paid social 適配、time on page、CTA 清楚度" }
        },
        {
          name: { en: "Google Ads project", zh: "Google Ads 作業" },
          status: { en: "$30 budget, safest configuration is a 3 day campaign with a Campaign Total Budget. The shared class blog domain skews keyword recommendations.", zh: "預算 $30，最穩配置是 3 天 campaign 搭配 Campaign Total Budget。班級共用 blog 網域會扭曲 keyword 建議。" },
          actions: [
            { en: "Leave a 48 to 72 hour review buffer before going live", zh: "上線前預留 48 到 72 小時審核緩衝" },
            { en: "Use blog post v2.0 as the landing page", zh: "用 blog post v2.0 作為 landing page" },
            { en: "Choose long tail keywords from the persona's actual question vocabulary", zh: "從 persona 真正會問的詞彙裡挑長尾關鍵字" }
          ],
          metric: { en: "CTR, CPC, impressions, search term match quality", zh: "CTR、CPC、impressions、search term match quality" }
        },
        {
          name: { en: "Team project", zh: "團隊作業" },
          status: { en: "Three deliverables: Proposal (5/20), Digital Audit (6/8), Final Presentation (slides 6/15 noon, talks 6/15 and 6/17). Worth 30% of the final grade.", zh: "三項產出：Proposal（5/20）、Digital Audit（6/8）、Final Presentation（簡報 6/15 中午前繳，6/15 與 6/17 上臺）。佔學期成績 30%。" },
          actions: [
            { en: "Choose a company with a strong but analyzable digital footprint", zh: "選一間數位足跡夠強但仍可分析的公司" },
            { en: "Avoid companies too large to say anything original, or too small to audit", zh: "避免大到無法原創判斷，或小到沒有足夠 digital footprint 的公司" },
            { en: "Each recommendation should specify persona, stage, channel, content or feature, and KPI", zh: "每項 recommendation 都應指出 persona、stage、channel、content 或 feature、KPI" }
          ],
          metric: { en: "Feasibility for Q3, strategic fit, source support, clarity", zh: "Q3 可行性、策略契合度、來源支持、清楚度" }
        }
      ]
    },

    {
      id: "schedule",
      group: "application",
      kicker: { en: "Timeline", zh: "時間軸" },
      title: { en: "The next five weeks of deadlines this work feeds into", zh: "未來五週這份工作要餵養的截止點" },
      summary: {
        en: "Every deadline below depends on persona and journey clarity being in place. Deciding now beats deciding under pressure later.",
        zh: "下面每個截止點都需要 persona 與 journey 已經想清楚。現在決定比等等再被壓力推著走更好。"
      },
      type: "timeline",
      events: [
        { date: { en: "Mon, May 11", zh: "5/11（一）" }, title: { en: "Class 02", zh: "第二堂課" }, detail: { en: "Customer journeys, buyer personas, Meta Ads. Survey 1 due.", zh: "顧客旅程、買方 persona、Meta Ads。Survey 1 截止。" } },
        { date: { en: "Wed, May 13", zh: "5/13（三）" }, title: { en: "Social campaign starts", zh: "社群 campaign 開始" }, detail: { en: "Instagram account begins posting. Day 1 of evidence chain.", zh: "Instagram 帳號開始發文。證據鏈第一天。" } },
        { date: { en: "Wed, May 20", zh: "5/20（三）" }, title: { en: "Team proposal due", zh: "Team proposal 截止" }, detail: { en: "Company scope, customer hypothesis, initial digital strategy framing.", zh: "公司 scope、customer hypothesis、初步數位策略架構。" } },
        { date: { en: "Wed, May 27", zh: "5/27（三）" }, title: { en: "Meta Ads and Blog v1.0", zh: "Meta Ads 與 Blog v1.0" }, detail: { en: "Paid social test plus first blog submission. Survey 2 due.", zh: "Paid social 測試與第一版 blog 交件。Survey 2 截止。" } },
        { date: { en: "Mon, June 8", zh: "6/8（一）" }, title: { en: "Social project and digital audit", zh: "社群作業與 digital audit" }, detail: { en: "Report campaign learning. Team audit due.", zh: "回報 campaign 學習，團隊 audit 繳交。" } },
        { date: { en: "Wed, June 10", zh: "6/10（三）" }, title: { en: "Google Ads and Blog v2.0", zh: "Google Ads 與 Blog v2.0" }, detail: { en: "Search traffic test plus SEO, AIO, and GEO improvements.", zh: "搜尋流量測試與 SEO、AIO、GEO 改進。" } },
        { date: { en: "Mon, June 15", zh: "6/15（一）" }, title: { en: "Final slides due at noon", zh: "Final 簡報中午截止" }, detail: { en: "Team presentations begin in the afternoon.", zh: "下午開始團隊 presentation。" } },
        { date: { en: "Wed, June 17", zh: "6/17（三）" }, title: { en: "Final presentations conclude", zh: "Final presentation 結束" }, detail: { en: "Remaining teams present.", zh: "其餘團隊發表。" } }
      ]
    },

    {
      id: "source-map",
      group: "application",
      kicker: { en: "Sources", zh: "來源" },
      title: { en: "What each source contributes", zh: "各來源提供甚麼" },
      summary: {
        en: "Quick reference for which reading or document grounds which claim. Useful when deciding what to cite directly versus what to label as application or inference.",
        zh: "快速查表，看哪份閱讀或文件支援哪個論點。決定甚麼可直接引用、甚麼要標為應用或推論時可用。"
      },
      type: "sources",
      sources: [
        { name: { en: "SilverTech, Mapping the Customer Journey", zh: "SilverTech《Mapping the Customer Journey》" }, use: { en: "CX versus UX, journey map elements, four stage model, content by stage, onstage and offstage, implementation principles, content gap analysis, the Gumball example.", zh: "CX 與 UX、journey map 五要素、四階段模型、分階段內容、onstage 與 offstage、實施原則、content gap analysis、Gumball 例子。" } },
        { name: { en: "SmartBug, Ultimate Guide to Inbound Marketing Personas", zh: "SmartBug《Ultimate Guide to Inbound Marketing Personas》" }, use: { en: "Persona definition, what is not a persona, three phase build process, six interview categories, profile elements, advanced personas (customer, negative, micro), Marketing Mary and Pat examples, KPI alignment, maintenance triggers.", zh: "Persona 定義、甚麼不是 persona、三階段建構流程、六大訪談類別、profile 元素、進階 personas、Marketing Mary 與 Pat 範例、KPI 對應、維護觸發條件。" } },
        { name: { en: "Class 01 Marketing Basics Revisited", zh: "Class 01 Marketing Basics Revisited" }, use: { en: "Two Questions, STP, CLV, 4Ps, SWOT, funnel, A/B test, automation, channel, content, CRM, KPI, paid, owned, earned, SEO, AIO, GEO.", zh: "Two Questions、STP、CLV、4Ps、SWOT、funnel、A/B test、automation、channel、content、CRM、KPI、paid、owned、earned、SEO、AIO、GEO。" } },
        { name: { en: "MKTG 6222 syllabus and Class 01 overview", zh: "MKTG 6222 syllabus 與 Class 01 overview" }, use: { en: "Project structure, deadlines, grading logic, AI citation policy, source citation expectations, professional slide standards.", zh: "作業結構、截止日、評分邏輯、AI 引用政策、來源引用要求、專業簡報標準。" } }
      ]
    }
  ]
};

/* ============================================================================
   HELPERS
   ============================================================================ */

const MODE_ORDER = ["en", "zh", "bi"];
const MODE_LABEL = { en: "EN", zh: "中文", bi: "雙語" };

function DualText({ value, mode }) {
  if (value == null) return null;
  if (typeof value === "string") return <>{value}</>;
  if (mode === "bi") {
    return (
      <span className="dual">
        <span className="dual-en">{value.en}</span>
        <span className="dual-zh">{value.zh}</span>
      </span>
    );
  }
  if (mode === "zh") return <>{value.zh || value.en}</>;
  return <>{value.en || value.zh}</>;
}

function Tag({ tag, mode }) {
  if (!tag) return null;
  const entry = DATA.sourceLegend.find((x) => x.tag === tag);
  if (!entry) return null;
  return (
    <span className="src-tag" data-tag={tag.replace(/\s+/g, "-").toLowerCase()}>
      {mode === "zh" ? entry.zhTag : entry.tag}
    </span>
  );
}

/* ============================================================================
   ICONS (compact, line based)
   ============================================================================ */

function Icon({ name, size = 18 }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  const p = {
    persona: <><circle cx="12" cy="9" r="3.2" /><path d="M5 20c1.5-4 4.2-6 7-6s5.5 2 7 6" /></>,
    map: <><path d="M3 6.5l6-2 6 2 6-2v13l-6 2-6-2-6 2z" /><path d="M9 4.5v13" /><path d="M15 6.5v13" /></>,
    bridge: <><path d="M3 17h18" /><path d="M5 17V10l7-4 7 4v7" /><path d="M9 17v-4" /><path d="M15 17v-4" /></>,
    arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
    check: <><path d="M20 6L9 17l-5-5" /></>,
    quote: <><path d="M7 8c-1.5 0-2.5 1.2-2.5 2.7 0 1.4 1 2.5 2.4 2.5h.4l-1.3 3.3h2L11 11V8z" /><path d="M16 8c-1.5 0-2.5 1.2-2.5 2.7 0 1.4 1 2.5 2.4 2.5h.4l-1.3 3.3h2L20 11V8z" /></>,
    spark: <><path d="M12 3v3" /><path d="M12 18v3" /><path d="M5 12H2" /><path d="M22 12h-3" /><circle cx="12" cy="12" r="3" /></>,
    warn: <><path d="M12 3l10 18H2z" /><path d="M12 10v5" /><path d="M12 18v.01" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 8v.01" /><path d="M11 12h2v5h-1" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></>,
    bubble: <><path d="M21 12c0 4.4-4 8-9 8a11 11 0 01-2.8-.4L4 21l1.4-4.6A8 8 0 014 12c0-4.4 4-8 9-8s8 3.6 8 8z" /></>,
    book: <><path d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2z" /><path d="M4 17h15" /></>,
    flag: <><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></>
  };
  return <svg {...c}>{p[name] || p.map}</svg>;
}

/* ============================================================================
   SECTION VIEWS
   ============================================================================ */

function LogicView({ section, mode }) {
  return (
    <>
      <div className="grid-3">
        {section.items.map((item, idx) => (
          <article className="card logic-card" key={idx}>
            <header className="logic-head">
              <span className="card-index">0{idx + 1}</span>
              <span className="logic-label"><DualText value={item.label} mode={mode} /></span>
            </header>
            <div className="logic-icon"><Icon name={idx === 0 ? "persona" : idx === 1 ? "map" : "bridge"} size={20} /></div>
            <p className="logic-sub"><DualText value={item.sub} mode={mode} /></p>
            <h4 className="card-h"><DualText value={item.title} mode={mode} /></h4>
            <p className="card-body"><DualText value={item.body} mode={mode} /></p>
            <Tag tag={item.tag} mode={mode} />
          </article>
        ))}
      </div>
      <div className="flow-line" aria-hidden="true">
        <span>{mode === "zh" ? "定義人" : "Defines who"}</span>
        <Icon name="arrow" size={14} />
        <span>{mode === "zh" ? "描繪流程" : "Maps the flow"}</span>
        <Icon name="arrow" size={14} />
        <span>{mode === "zh" ? "成為作業" : "Becomes deliverable"}</span>
      </div>
    </>
  );
}

function LegendView({ mode }) {
  return (
    <div className="legend-grid">
      {DATA.sourceLegend.map((item) => (
        <div className="legend-card" key={item.tag}>
          <span className="src-tag" data-tag={item.tag.replace(/\s+/g, "-").toLowerCase()}>
            {mode === "zh" ? item.zhTag : item.tag}
          </span>
          <p className="legend-text">
            {mode === "bi" ? (
              <span className="dual">
                <span className="dual-en">{item.en}</span>
                <span className="dual-zh">{item.zh}</span>
              </span>
            ) : (mode === "zh" ? item.zh : item.en)}
          </p>
        </div>
      ))}
    </div>
  );
}

function CxUxView({ section, mode }) {
  return (
    <>
      <div className="cxux-layout">
        <div className="cxux-diagram">
          <svg viewBox="0 0 440 440" role="img" aria-label="CX contains UX">
            <defs>
              <radialGradient id="cxg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(46,92,110,0.04)" />
                <stop offset="100%" stopColor="rgba(46,92,110,0.16)" />
              </radialGradient>
              <radialGradient id="uxg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(107,58,90,0.08)" />
                <stop offset="100%" stopColor="rgba(107,58,90,0.22)" />
              </radialGradient>
            </defs>
            <circle cx="220" cy="220" r="200" fill="url(#cxg)" stroke="var(--slate)" strokeOpacity="0.5" strokeWidth="1" />
            <circle cx="220" cy="220" r="128" fill="none" stroke="var(--slate)" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 5" />
            <circle cx="220" cy="220" r="68" fill="url(#uxg)" stroke="var(--plum)" strokeOpacity="0.6" strokeWidth="1" />
            <text x="220" y="38" textAnchor="middle" className="diag-eyebrow">CX</text>
            <text x="220" y="226" textAnchor="middle" className="diag-center">UX</text>
            {[
              { x: 220, y: 22 },
              { x: 388, y: 92 },
              { x: 422, y: 252 },
              { x: 332, y: 402 },
              { x: 108, y: 402 },
              { x: 18, y: 252 }
            ].map((pt, i) => (
              <text key={i} x={pt.x} y={pt.y} textAnchor="middle" className="diag-spoke">
                {mode === "zh" ? section.cxSpokes[i].zh : section.cxSpokes[i].en}
              </text>
            ))}
          </svg>
        </div>

        <div className="cxux-notes">
          <div className="note-block">
            <span className="key-pill cx-key">CX</span>
            <p>{mode === "zh" ? "完整顧客關係。包含客服、廣告、品牌聲譽、銷售流程、價格公平性、交付體驗以及 UX 本身。" : "The full customer relationship. Includes service, advertising, brand reputation, sales process, pricing fairness, delivery, and UX itself."}</p>
            {mode === "bi" && <p className="dual-zh">完整顧客關係。包含客服、廣告、品牌聲譽、銷售流程、價格公平性、交付體驗以及 UX 本身。</p>}
          </div>
          <div className="note-block">
            <span className="key-pill ux-key">UX</span>
            <ul className="inline-list">
              {section.uxList.map((u, i) => (<li key={i}><DualText value={u} mode={mode} /></li>))}
            </ul>
          </div>
        </div>
      </div>

      <div className="case-stack">
        {section.cases.map((c, i) => (
          <div className="case-row" key={i}>
            <div className="case-text">
              <p className="case-title"><DualText value={c.situation} mode={mode} /></p>
              <p className="case-lesson"><DualText value={c.lesson} mode={mode} /></p>
            </div>
            <div className="case-scores">
              <span className={`pill ${c.ux.en === "Strong" ? "ok" : "bad"}`}>UX · <DualText value={c.ux} mode={mode} /></span>
              <span className={`pill ${c.cx.en === "Strong" ? "ok" : "bad"}`}>CX · <DualText value={c.cx} mode={mode} /></span>
            </div>
          </div>
        ))}
      </div>

      <div className="callout">
        <Icon name="info" size={16} />
        <p><DualText value={section.sideNote} mode={mode} /></p>
      </div>
    </>
  );
}

function WhyView({ section, mode }) {
  return (
    <>
      <div className="why-questions">
        {section.questions.map((q, i) => (
          <div className="why-q" key={i}>
            <span className="q-num">{String(i + 1).padStart(2, "0")}</span>
            <p><DualText value={q} mode={mode} /></p>
          </div>
        ))}
      </div>

      <div className="grid-3 tight">
        {section.reasons.map((r, i) => (
          <article className="card reason-card" key={i}>
            <span className="card-index">0{i + 1}</span>
            <h4 className="card-h"><DualText value={r.name} mode={mode} /></h4>
            <p className="card-body"><DualText value={r.body} mode={mode} /></p>
            <Tag tag={r.tag} mode={mode} />
          </article>
        ))}
      </div>

      <div className="split-2">
        <div>
          <h5 className="sub-h">{mode === "zh" ? "Persona 幫你決定" : "Personas determine"}</h5>
          <ul className="check-list">
            {section.determines.map((it, i) => (
              <li key={i}><Icon name="check" size={13} /><DualText value={it} mode={mode} /></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function NotView({ section, mode }) {
  return (
    <>
      <div className="contrast-stack">
        {section.contrasts.map((c, idx) => (
          <div key={idx}>
            <h5 className="sub-h"><DualText value={c.label} mode={mode} /></h5>
            <div className="contrast-row">
              <div className="contrast-col weak">
                <span className="flag bad-flag">{mode === "zh" ? "不是" : "Not this"}</span>
                <strong><DualText value={c.left.title} mode={mode} /></strong>
                <ul>{c.left.bullets.map((b, i) => (<li key={i}><DualText value={b} mode={mode} /></li>))}</ul>
              </div>
              <div className="contrast-arrow" aria-hidden="true"><Icon name="arrow" size={18} /></div>
              <div className="contrast-col strong">
                <span className="flag good-flag">{mode === "zh" ? "更接近" : "Closer to it"}</span>
                <strong><DualText value={c.right.title} mode={mode} /></strong>
                <ul>{c.right.bullets.map((b, i) => (<li key={i}><DualText value={b} mode={mode} /></li>))}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h5 className="sub-h">{mode === "zh" ? "四種誤解" : "Four misconceptions"}</h5>
      <div className="miscon-grid">
        {section.misconceptions.map((m, i) => (
          <div className="miscon-card" key={i}>
            <span className="miscon-num">{i + 1}</span>
            <strong><DualText value={m.bad} mode={mode} /></strong>
            <p><DualText value={m.why} mode={mode} /></p>
          </div>
        ))}
      </div>
    </>
  );
}

function BuildView({ section, mode }) {
  return (
    <div className="build-stack">
      {section.phases.map((phase, idx) => (
        <div className="phase" key={idx}>
          <div className="phase-head">
            <div className="phase-marker">{phase.num}</div>
            <div className="phase-meta">
              <h4 className="card-h"><DualText value={phase.name} mode={mode} /></h4>
              <p className="card-body"><DualText value={phase.body} mode={mode} /></p>
            </div>
          </div>

          {phase.interviews && (
            <div className="iv-grid">
              {phase.interviews.map((iv, i) => (
                <div className="iv-card" key={i}>
                  <div className="iv-head">
                    <strong><DualText value={iv.who} mode={mode} /></strong>
                    <Icon name="bubble" size={14} />
                  </div>
                  <p className="iv-note"><DualText value={iv.note} mode={mode} /></p>
                  <ul className="iv-qs">
                    {iv.questions.map((q, j) => (<li key={j}><DualText value={q} mode={mode} /></li>))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {phase.candidates && (
            <>
              <div className="cand-grid">
                {phase.candidates.map((c, i) => (
                  <div className="cand-card" key={i}>
                    <span className="cand-num">{i + 1}</span>
                    <strong><DualText value={c.name} mode={mode} /></strong>
                    <p><DualText value={c.why} mode={mode} /></p>
                  </div>
                ))}
              </div>
              <div className="callout method">
                <Icon name="spark" size={16} />
                <p><DualText value={phase.method} mode={mode} /></p>
              </div>
            </>
          )}

          {phase.dataSources && (
            <ul className="check-list two-col">
              {phase.dataSources.map((d, i) => (<li key={i}><Icon name="check" size={13} /><DualText value={d} mode={mode} /></li>))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function InterviewView({ section, mode }) {
  const [tab, setTab] = useState(0);
  const cat = section.categories[tab];
  return (
    <div className="iv-lib">
      <div className="iv-tabs" role="tablist">
        {section.categories.map((c, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === tab}
            className={`iv-tab ${i === tab ? "active" : ""}`}
            onClick={() => setTab(i)}
          >
            <span className="iv-tab-num">{String(i + 1).padStart(2, "0")}</span>
            <DualText value={c.name} mode={mode} />
          </button>
        ))}
      </div>
      <div className="iv-panel" role="tabpanel">
        <p className="iv-intent"><Icon name="target" size={14} /><DualText value={cat.intent} mode={mode} /></p>
        <ol className="iv-question-list">
          {cat.qs.map((q, i) => (
            <li key={i}>
              <span className="q-num small">{i + 1}</span>
              <DualText value={q} mode={mode} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function ProfileView({ section, mode }) {
  return (
    <>
      <div className="profile-split">
        <div className="profile-col">
          <div className="profile-head">
            <span className="profile-source">SmartBug</span>
            <h5 className="sub-h">{mode === "zh" ? "Persona 文件四要素" : "Persona document, four elements"}</h5>
          </div>
          {section.smartbug.map((f, i) => (
            <div className="profile-row" key={i}>
              <span className="profile-key letter">{f.key}</span>
              <div>
                <strong><DualText value={f.field} mode={mode} /></strong>
                <p><DualText value={f.detail} mode={mode} /></p>
              </div>
            </div>
          ))}
        </div>
        <div className="profile-col">
          <div className="profile-head">
            <span className="profile-source">SilverTech</span>
            <h5 className="sub-h">{mode === "zh" ? "Journey 內 persona 五要素" : "Persona inside a journey map, five elements"}</h5>
          </div>
          {section.silvertech.map((f, i) => (
            <div className="profile-row" key={i}>
              <span className="profile-key">{f.key}</span>
              <div>
                <strong><DualText value={f.field} mode={mode} /></strong>
                <p><DualText value={f.detail} mode={mode} /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="callout">
        <Icon name="info" size={16} />
        <p><DualText value={section.recommendation} mode={mode} /></p>
      </div>
    </>
  );
}

function AdvancedView({ section, mode }) {
  return (
    <>
      <div className="grid-3 tight">
        {section.types.map((t, i) => (
          <article className="card adv-card" key={i}>
            <h4 className="card-h"><DualText value={t.name} mode={mode} /></h4>
            <span className="adv-use"><DualText value={t.useFor} mode={mode} /></span>
            <p className="card-body"><DualText value={t.summary} mode={mode} /></p>
            {t.questions && (
              <ul className="dot-list">
                {t.questions.map((q, j) => (<li key={j}><DualText value={q} mode={mode} /></li>))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <h5 className="sub-h">{mode === "zh" ? "Micro persona 範例：Marketing Mary" : "Micro persona example: Marketing Mary"}</h5>
      <div className="micro-block">
        <div className="micro-macro">
          <span className="macro-label">{mode === "zh" ? "Macro" : "Macro"}</span>
          <strong>Marketing Mary</strong>
          <p><DualText value={section.mary.macro} mode={mode} /></p>
        </div>
        <div className="micro-grid">
          {section.mary.micros.map((m, i) => (
            <div className="micro-leaf" key={i}>
              <strong><DualText value={m.name} mode={mode} /></strong>
              <p><DualText value={m.body} mode={mode} /></p>
            </div>
          ))}
        </div>
      </div>

      <h5 className="sub-h">{mode === "zh" ? "Micro persona 範例：Stay-at-Home Pat" : "Micro persona example: Stay-at-Home Pat"}</h5>
      <div className="micro-block">
        <div className="micro-macro">
          <span className="macro-label">{mode === "zh" ? "Macro" : "Macro"}</span>
          <strong>Stay-at-Home Parent Pat</strong>
          <p><DualText value={section.pat.macro} mode={mode} /></p>
        </div>
        <div className="micro-grid">
          {section.pat.micros.map((m, i) => (
            <div className="micro-leaf" key={i}>
              <strong><DualText value={m.name} mode={mode} /></strong>
              <p><DualText value={m.body} mode={mode} /></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function UseView({ section, mode }) {
  return (
    <>
      <div className="use-grid">
        {section.teams.map((t, i) => (
          <article className="card use-card" key={i}>
            <div className="use-head">
              <h4 className="card-h"><DualText value={t.name} mode={mode} /></h4>
              <span className="use-purpose"><DualText value={t.purpose} mode={mode} /></span>
            </div>
            <p className="card-body"><DualText value={t.how} mode={mode} /></p>
          </article>
        ))}
      </div>
      <h5 className="sub-h">{mode === "zh" ? "內容書寫三原則" : "Three writing rules"}</h5>
      <ul className="check-list">
        {section.rules.map((r, i) => (<li key={i}><Icon name="check" size={13} /><DualText value={r} mode={mode} /></li>))}
      </ul>
    </>
  );
}

function KpiView({ section, mode }) {
  return (
    <div className="grid-4 tight">
      {section.kpis.map((k, i) => (
        <article className="card kpi-card" key={i}>
          <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
          <strong><DualText value={k.name} mode={mode} /></strong>
          <p><DualText value={k.why} mode={mode} /></p>
        </article>
      ))}
    </div>
  );
}

function TriggersView({ section, mode }) {
  return (
    <ol className="trigger-list">
      {section.triggers.map((t, i) => (
        <li key={i}>
          <span className="trig-num">{String(i + 1).padStart(2, "0")}</span>
          <DualText value={t} mode={mode} />
        </li>
      ))}
    </ol>
  );
}

function JourneyWhyView({ section, mode }) {
  return (
    <>
      <div className="split-2">
        <div>
          <h5 className="sub-h">{mode === "zh" ? "Journey map 帶來的效益" : "What a journey map delivers"}</h5>
          <ul className="check-list">
            {section.benefits.map((b, i) => (<li key={i}><Icon name="check" size={13} /><DualText value={b} mode={mode} /></li>))}
          </ul>
        </div>
        <div>
          <h5 className="sub-h">{mode === "zh" ? "需要做幾張？" : "How many maps?"}</h5>
          <p className="prose"><DualText value={section.howMany} mode={mode} /></p>
        </div>
      </div>

      <h5 className="sub-h">{mode === "zh" ? "例：銀行臨櫃開戶流程" : "Example: in-branch account opening"}</h5>
      <div className="flow-chips">
        {section.bankFlow.map((step, i) => (
          <React.Fragment key={i}>
            <span className="flow-chip"><DualText value={step} mode={mode} /></span>
            {i < section.bankFlow.length - 1 && <Icon name="arrow" size={14} />}
          </React.Fragment>
        ))}
      </div>

      <div className="callout">
        <Icon name="info" size={16} />
        <p><DualText value={section.forms} mode={mode} /></p>
      </div>
    </>
  );
}

function ElementsView({ section, mode }) {
  return (
    <div className="elements-grid">
      {section.cards.map((card, i) => (
        <article className="card element-card" key={i}>
          <span className="element-num">{card.num}</span>
          <h4 className="card-h"><DualText value={card.title} mode={mode} /></h4>
          <p className="card-body"><DualText value={card.body} mode={mode} /></p>
          <Tag tag={card.tag} mode={mode} />
        </article>
      ))}
    </div>
  );
}

function StagesView({ section, mode }) {
  return (
    <>
      <div className="stage-rail" aria-hidden="true">
        <div className="rail-line" />
        {section.stages.map((s, i) => (
          <div className="rail-dot" key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="stage-grid">
        {section.stages.map((s, idx) => (
          <article className="card stage-card" key={idx}>
            <header className="stage-cap">
              <span className="stage-dot">{idx + 1}</span>
              <span className="stage-source">{s.source}</span>
            </header>
            <h4 className="card-h"><DualText value={s.name} mode={mode} /></h4>
            <blockquote className="stage-quote">
              <Icon name="quote" size={14} />
              <span><DualText value={s.quote} mode={mode} /></span>
            </blockquote>
            <p className="stage-mindset">{mode === "zh" ? "想法：" : "Mindset: "}<DualText value={s.mindset} mode={mode} /></p>
            <dl className="stage-dl">
              <div><dt>{mode === "zh" ? "內容" : "Content"}</dt><dd><DualText value={s.content} mode={mode} /></dd></div>
              <div><dt>{mode === "zh" ? "情緒" : "Emotion"}</dt><dd><DualText value={s.emotion} mode={mode} /></dd></div>
              <div><dt>KPI</dt><dd><DualText value={s.kpi} mode={mode} /></dd></div>
            </dl>
          </article>
        ))}
      </div>
      <div className="callout warn">
        <Icon name="warn" size={16} />
        <p><DualText value={section.nonLinear} mode={mode} /></p>
      </div>
    </>
  );
}

function EmotionView({ section, mode }) {
  const stageLabels = ["Awareness", "Consideration", "Decision", "Post Purchase"];
  const pts = [
    { x: 80, y: 160, label: mode === "zh" ? "好奇" : "curious" },
    { x: 250, y: 120, label: mode === "zh" ? "謹慎" : "cautious" },
    { x: 420, y: 135, label: mode === "zh" ? "懷疑" : "skeptical" },
    { x: 590, y: 85, label: mode === "zh" ? "就緒" : "ready" },
    { x: 760, y: 70, label: mode === "zh" ? "忠誠" : "loyal" }
  ];
  return (
    <>
      <div className="emotion-chart">
        <svg viewBox="0 0 840 220" role="img" aria-label="customer emotion curve">
          <defs>
            <linearGradient id="emoGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--plum)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--slate)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <line x1="20" y1="190" x2="820" y2="190" stroke="var(--hairline-strong)" strokeWidth="1" />
          {[80, 250, 420, 590].map((x, i) => (
            <line key={i} x1={x + 85} y1="190" x2={x + 85} y2="200" stroke="var(--hairline)" strokeWidth="1" />
          ))}
          {stageLabels.map((label, i) => {
            const x = [80, 250, 420, 590][i] + 85;
            return <text key={i} x={x} y="214" textAnchor="middle" className="emo-stage">{label}</text>;
          })}
          <path
            d={`M ${pts[0].x} ${pts[0].y} Q ${(pts[0].x + pts[1].x) / 2} ${pts[0].y - 30}, ${pts[1].x} ${pts[1].y} T ${pts[2].x} ${pts[2].y} T ${pts[3].x} ${pts[3].y} T ${pts[4].x} ${pts[4].y}`}
            fill="none" stroke="url(#emoGrad)" strokeWidth="2.5"
          />
          {pts.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="4" fill="var(--paper)" stroke="var(--plum)" strokeWidth="1.8" />
              <text x={p.x} y={p.y - 12} textAnchor="middle" className="emo-label">{p.label}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="tone-grid">
        {section.tones.map((t, i) => (
          <div className="tone-card" key={i}>
            <strong><DualText value={t.state} mode={mode} /></strong>
            <p><DualText value={t.prescription} mode={mode} /></p>
          </div>
        ))}
      </div>
    </>
  );
}

function ContentStageView({ section, mode }) {
  return (
    <div className="table-wrap">
      <table className="dense">
        <thead>
          <tr>
            <th>{mode === "zh" ? "階段" : "Stage"}</th>
            <th>{mode === "zh" ? "內容形式" : "Content forms"}</th>
            <th>{mode === "zh" ? "工作" : "Job"}</th>
          </tr>
        </thead>
        <tbody>
          {section.rows.map((r, i) => (
            <tr key={i}>
              <td className="nowrap"><strong><DualText value={r.stage} mode={mode} /></strong></td>
              <td><DualText value={r.forms} mode={mode} /></td>
              <td><DualText value={r.job} mode={mode} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OnstageView({ section, mode }) {
  return (
    <div className="onstage-stack">
      <div className="onstage-head">
        <span className="onstage-label on">{mode === "zh" ? "Onstage 顧客可見" : "Onstage · visible to customer"}</span>
        <span className="onstage-label off">{mode === "zh" ? "Offstage 系統運作" : "Offstage · system layer"}</span>
      </div>
      {section.pairs.map((p, i) => (
        <div className="onstage-row" key={i}>
          <div className="onstage-cell on"><DualText value={p.on} mode={mode} /></div>
          <Icon name="arrow" size={14} />
          <div className="onstage-cell off"><DualText value={p.off} mode={mode} /></div>
        </div>
      ))}
    </div>
  );
}

function ImplementationView({ section, mode }) {
  return (
    <>
      <div className="grid-4 tight">
        {section.principles.map((pr, i) => (
          <article className="card impl-card" key={i}>
            <span className="card-index">0{i + 1}</span>
            <h4 className="card-h"><DualText value={pr.name} mode={mode} /></h4>
            <p className="card-body"><DualText value={pr.body} mode={mode} /></p>
          </article>
        ))}
      </div>
      <div className="callout">
        <Icon name="info" size={16} />
        <p><DualText value={section.gumball} mode={mode} /></p>
      </div>
    </>
  );
}

function ContentGapView({ section, mode }) {
  return (
    <div className="gap-flow">
      <div className="gap-step">
        <span className="gap-num">1</span>
        <strong>{mode === "zh" ? "為每個 persona 描繪理想體驗" : "Map the ideal online experience for each persona"}</strong>
      </div>
      <Icon name="arrow" size={16} />
      <div className="gap-step">
        <span className="gap-num">2</span>
        <strong>{mode === "zh" ? "對照網站目前的內容" : "Compare to what the site currently offers"}</strong>
      </div>
      <Icon name="arrow" size={16} />
      <div className="gap-step gap-final">
        <span className="gap-num">3</span>
        <strong>{mode === "zh" ? "標出缺口：比較指南、onboarding、FAQ、白皮書等等" : "Flag the gaps: comparison guide, onboarding, FAQ, whitepaper, etc."}</strong>
      </div>
    </div>
  );
}

function FrameworksView({ section, mode }) {
  return (
    <div className="table-wrap">
      <table className="dense framework-table">
        <thead>
          <tr><th>{mode === "zh" ? "框架" : "Framework"}</th><th>{mode === "zh" ? "Class 02 的接點" : "Class 02 connection"}</th></tr>
        </thead>
        <tbody>
          {section.rows.map((r, i) => (
            <tr key={i}>
              <td className="nowrap"><strong><DualText value={r.framework} mode={mode} /></strong></td>
              <td><DualText value={r.connection} mode={mode} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TemplatesView({ section, mode }) {
  return (
    <div className="tmpl-stack">
      <div className="tmpl-block">
        <h5 className="sub-h">{mode === "zh" ? "Persona 模板" : "Persona template"}</h5>
        <div className="table-wrap">
          <table className="dense">
            <thead><tr><th>{mode === "zh" ? "欄位" : "Field"}</th><th>{mode === "zh" ? "填寫指引" : "Guide"}</th></tr></thead>
            <tbody>
              {section.personaTemplate.map((r, i) => (
                <tr key={i}>
                  <td className="nowrap"><strong><DualText value={r.field} mode={mode} /></strong></td>
                  <td><DualText value={r.guide} mode={mode} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="tmpl-block">
        <h5 className="sub-h">{mode === "zh" ? "Journey map 模板" : "Journey map template"}</h5>
        <div className="table-wrap">
          <table className="dense journey-table">
            <thead>
              <tr>
                <th>{mode === "zh" ? "階段" : "Stage"}</th>
                <th>{mode === "zh" ? "行動" : "Action"}</th>
                <th>{mode === "zh" ? "情緒" : "Emotion"}</th>
                <th>{mode === "zh" ? "接觸點" : "Touchpoint"}</th>
                <th>{mode === "zh" ? "內容" : "Content"}</th>
                <th>{mode === "zh" ? "摩擦" : "Friction"}</th>
                <th>{mode === "zh" ? "機會" : "Opportunity"}</th>
                <th>KPI</th>
              </tr>
            </thead>
            <tbody>
              {section.journeyTemplate.map((r, i) => (
                <tr key={i}>
                  <td className="nowrap"><strong><DualText value={r.stage} mode={mode} /></strong></td>
                  <td><DualText value={r.action} mode={mode} /></td>
                  <td><DualText value={r.emotion} mode={mode} /></td>
                  <td><DualText value={r.touchpoint} mode={mode} /></td>
                  <td><DualText value={r.content} mode={mode} /></td>
                  <td><DualText value={r.friction} mode={mode} /></td>
                  <td><DualText value={r.opportunity} mode={mode} /></td>
                  <td><DualText value={r.kpi} mode={mode} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ErrorsView({ section, mode }) {
  return (
    <div className="table-wrap">
      <table className="dense">
        <thead>
          <tr>
            <th>{mode === "zh" ? "錯誤" : "Mistake"}</th>
            <th>{mode === "zh" ? "危害" : "Why it hurts"}</th>
            <th>{mode === "zh" ? "修正" : "Fix"}</th>
          </tr>
        </thead>
        <tbody>
          {section.errors.map((r, i) => (
            <tr key={i}>
              <td><strong><DualText value={r.mistake} mode={mode} /></strong></td>
              <td><DualText value={r.harm} mode={mode} /></td>
              <td><DualText value={r.fix} mode={mode} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProjectsView({ section, mode }) {
  return (
    <div className="project-grid">
      {section.projects.map((p, i) => (
        <article className="card project-card" key={i}>
          <h4 className="card-h"><DualText value={p.name} mode={mode} /></h4>
          <p className="proj-status"><DualText value={p.status} mode={mode} /></p>
          <ul className="dot-list">
            {p.actions.map((a, j) => (<li key={j}><DualText value={a} mode={mode} /></li>))}
          </ul>
          <div className="metric-row">
            <span className="metric-label">KPI</span>
            <span className="metric-value"><DualText value={p.metric} mode={mode} /></span>
          </div>
        </article>
      ))}
    </div>
  );
}

function TimelineView({ section, mode }) {
  return (
    <ol className="timeline">
      {section.events.map((e, i) => (
        <li className="timeline-item" key={i}>
          <span className="tl-date"><DualText value={e.date} mode={mode} /></span>
          <div className="tl-marker" aria-hidden="true">
            <span className="tl-dot" />
            {i < section.events.length - 1 && <span className="tl-line" />}
          </div>
          <div className="tl-body">
            <strong><DualText value={e.title} mode={mode} /></strong>
            <p><DualText value={e.detail} mode={mode} /></p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function SourcesView({ section, mode }) {
  return (
    <div className="sources-grid">
      {section.sources.map((s, i) => (
        <div className="source-card" key={i}>
          <Icon name="book" size={16} />
          <strong><DualText value={s.name} mode={mode} /></strong>
          <p><DualText value={s.use} mode={mode} /></p>
        </div>
      ))}
    </div>
  );
}

function SectionBody({ section, mode }) {
  switch (section.type) {
    case "logic": return <LogicView section={section} mode={mode} />;
    case "legend": return <LegendView mode={mode} />;
    case "cxux": return <CxUxView section={section} mode={mode} />;
    case "why": return <WhyView section={section} mode={mode} />;
    case "not": return <NotView section={section} mode={mode} />;
    case "build": return <BuildView section={section} mode={mode} />;
    case "interview": return <InterviewView section={section} mode={mode} />;
    case "profile": return <ProfileView section={section} mode={mode} />;
    case "advanced": return <AdvancedView section={section} mode={mode} />;
    case "use": return <UseView section={section} mode={mode} />;
    case "kpi": return <KpiView section={section} mode={mode} />;
    case "triggers": return <TriggersView section={section} mode={mode} />;
    case "journey-why": return <JourneyWhyView section={section} mode={mode} />;
    case "elements": return <ElementsView section={section} mode={mode} />;
    case "stages": return <StagesView section={section} mode={mode} />;
    case "emotion": return <EmotionView section={section} mode={mode} />;
    case "content-stage": return <ContentStageView section={section} mode={mode} />;
    case "onstage": return <OnstageView section={section} mode={mode} />;
    case "implementation": return <ImplementationView section={section} mode={mode} />;
    case "content-gap": return <ContentGapView section={section} mode={mode} />;
    case "frameworks": return <FrameworksView section={section} mode={mode} />;
    case "templates": return <TemplatesView section={section} mode={mode} />;
    case "errors": return <ErrorsView section={section} mode={mode} />;
    case "projects": return <ProjectsView section={section} mode={mode} />;
    case "timeline": return <TimelineView section={section} mode={mode} />;
    case "sources": return <SourcesView section={section} mode={mode} />;
    default: return null;
  }
}

/* ============================================================================
   APP SHELL
   ============================================================================ */

function Section({ section, mode }) {
  return (
    <section id={section.id} className="section">
      <header className="section-head">
        <div className="section-meta">
          <span className="kicker"><DualText value={section.kicker} mode={mode} /></span>
        </div>
        <h2 className="section-title"><DualText value={section.title} mode={mode} /></h2>
        <p className="section-summary"><DualText value={section.summary} mode={mode} /></p>
      </header>
      <div className="section-body">
        <SectionBody section={section} mode={mode} />
      </div>
    </section>
  );
}

function Hero({ mode }) {
  return (
    <header className="hero">
      <div className="hero-inner">
        <p className="hero-kicker"><DualText value={DATA.meta.kicker} mode={mode} /></p>
        <h1 className="hero-title"><DualText value={DATA.meta.title} mode={mode} /></h1>
        <p className="hero-thesis"><DualText value={DATA.meta.thesis} mode={mode} /></p>
        <p className="hero-source"><DualText value={DATA.meta.sourceLine} mode={mode} /></p>
        <ul className="hero-stats" aria-label="key counts">
          {DATA.meta.stats.map((s, i) => (
            <li key={i}>
              <strong>{s.value}</strong>
              <span><DualText value={s.label} mode={mode} /></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Nav({ mode, activeId, onNavigate }) {
  const byGroup = useMemo(() => {
    const acc = {};
    DATA.sections.forEach((s) => {
      if (!acc[s.group]) acc[s.group] = [];
      acc[s.group].push(s);
    });
    return acc;
  }, []);
  return (
    <nav className="nav" aria-label="section index">
      {Object.keys(byGroup).map((g) => (
        <div className="nav-group" key={g}>
          <span className="nav-group-label"><DualText value={DATA.groups[g]} mode={mode} /></span>
          <ul>
            {byGroup[g].map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={activeId === s.id ? "active" : ""}
                  onClick={(e) => { e.preventDefault(); onNavigate(s.id); }}
                >
                  <DualText value={s.title} mode={mode} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function ModeToggle({ mode, setMode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return (
    <div className={`mode-toggle ${open ? "open" : ""}`} ref={ref}>
      {open && (
        <div className="mode-menu" role="menu">
          {MODE_ORDER.map((m) => (
            <button
              key={m}
              role="menuitemradio"
              aria-checked={m === mode}
              className={m === mode ? "active" : ""}
              onClick={() => { setMode(m); setOpen(false); }}
            >
              {MODE_LABEL[m]}
            </button>
          ))}
        </div>
      )}
      <button className="mode-trigger" aria-label="language mode" onClick={() => setOpen(!open)}>
        <span className="mode-glyph">文</span>
        <span className="mode-current">{MODE_LABEL[mode]}</span>
      </button>
    </div>
  );
}

export default function Class02CustomerJourneyInfrastructure() {
  const [mode, setMode] = useState("en");
  const [activeId, setActiveId] = useState(DATA.sections[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = [];
    DATA.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      sectionRefs.current[s.id] = el;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(s.id);
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const onNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 16;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className={`page mode-${mode}`}>
      <style>{styles}</style>
      <Hero mode={mode} />
      <div className="layout">
        <aside className="layout-nav">
          <Nav mode={mode} activeId={activeId} onNavigate={onNavigate} />
        </aside>
        <main className="layout-main">
          {DATA.sections.map((s) => (
            <Section key={s.id} section={s} mode={mode} />
          ))}
        </main>
      </div>
      <ModeToggle mode={mode} setMode={setMode} />
    </div>
  );
}

/* ============================================================================
   STYLES
   ============================================================================ */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --paper: #FCFAF2;
  --paper-soft: #F6F1E2;
  --paper-card: #FFFDF6;
  --ink: #1B1F26;
  --muted: #5F6168;
  --muted-soft: #8A8C92;
  --hairline: rgba(27,31,38,0.10);
  --hairline-strong: rgba(27,31,38,0.24);
  --slate: #2E5C6E;
  --plum: #6B3A5A;
  --beni: #B43A40;
  --ochre: #B4854C;
  --moss: #5E7B5A;
  --cream: #F2E4C2;

  --font-serif: 'Spectral', Georgia, 'Source Han Serif TC', 'Noto Serif CJK TC', serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
}

* { box-sizing: border-box; }

html, body { background: var(--paper); }

.page {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
}

.page p, .page li { color: var(--ink); }

/* ============ Typography ============ */
.kicker, .hero-kicker, .nav-group-label, .stage-source, .macro-label, .metric-label,
.profile-source, .use-purpose {
  font-family: var(--font-sans);
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
}

.hero-title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1.08;
  letter-spacing: -0.012em;
  margin: 8px 0 22px;
  max-width: 18ch;
  color: var(--ink);
}

.hero-thesis {
  font-family: var(--font-serif);
  font-size: clamp(16px, 1.6vw, 19px);
  line-height: 1.55;
  color: var(--ink);
  max-width: 64ch;
  margin: 0 0 14px;
}

.hero-source {
  font-size: 12.5px;
  color: var(--muted);
  max-width: 70ch;
  margin: 0 0 26px;
  line-height: 1.55;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-top: 18px;
  border-top: 1px solid var(--hairline);
  max-width: 720px;
}
.hero-stats li { display: flex; flex-direction: column; gap: 4px; }
.hero-stats strong {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 500;
  color: var(--slate);
  line-height: 1;
}
.hero-stats span {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

/* ============ Hero ============ */
.hero {
  padding: 72px 64px 56px;
  border-bottom: 1px solid var(--hairline);
}
.hero-inner { max-width: 1200px; margin: 0 auto; }
.hero-kicker { display: block; margin-bottom: 6px; }

/* ============ Layout ============ */
.layout {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 56px;
  padding: 56px 64px 120px;
  align-items: start;
}

.layout-nav { position: sticky; top: 28px; max-height: calc(100vh - 56px); overflow-y: auto; padding-right: 8px; }
.layout-nav::-webkit-scrollbar { width: 4px; }
.layout-nav::-webkit-scrollbar-thumb { background: var(--hairline-strong); border-radius: 2px; }

.layout-main { min-width: 0; display: flex; flex-direction: column; gap: 64px; }

/* ============ Nav ============ */
.nav { display: flex; flex-direction: column; gap: 22px; }
.nav-group { display: flex; flex-direction: column; gap: 8px; }
.nav-group-label { padding-bottom: 4px; border-bottom: 1px solid var(--hairline); }
.nav ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px; }
.nav a {
  display: block;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted);
  text-decoration: none;
  padding: 5px 10px 5px 12px;
  border-left: 2px solid transparent;
  transition: all 0.15s;
}
.nav a:hover { color: var(--ink); border-left-color: var(--hairline-strong); }
.nav a.active {
  color: var(--ink);
  border-left-color: var(--slate);
  background: rgba(46,92,110,0.04);
  font-weight: 500;
}

/* ============ Section ============ */
.section { display: flex; flex-direction: column; gap: 22px; scroll-margin-top: 24px; }

.section-head {
  position: sticky;
  top: 0;
  background: var(--paper);
  z-index: 5;
  padding: 14px 0 16px;
  margin-bottom: -4px;
  border-bottom: 1px solid var(--hairline);
}
.section-meta { display: flex; align-items: baseline; gap: 12px; margin-bottom: 6px; }
.section-title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(22px, 2.6vw, 32px);
  line-height: 1.18;
  letter-spacing: -0.005em;
  margin: 0 0 10px;
  color: var(--ink);
  max-width: 32ch;
}
.section-summary {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--muted);
  max-width: 68ch;
  margin: 0;
}

.section-body { display: flex; flex-direction: column; gap: 22px; }

/* ============ Cards ============ */
.card {
  background: var(--paper-card);
  border: 1px solid var(--hairline);
  border-radius: 4px;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}
.card-index {
  font-size: 10.5px;
  letter-spacing: 0.18em;
  color: var(--muted-soft);
  font-weight: 600;
}
.card-h {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  color: var(--ink);
}
.card-body { font-size: 13.5px; line-height: 1.6; margin: 0; color: var(--ink); }

.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.tight .card { padding: 16px 18px; }
.split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }

/* ============ Source tags ============ */
.src-tag {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 2px;
  align-self: flex-start;
  margin-top: auto;
}
.src-tag[data-tag="source-fact"]      { background: rgba(46,92,110,0.10);   color: var(--slate); }
.src-tag[data-tag="source-synthesis"] { background: rgba(94,123,90,0.12);   color: var(--moss); }
.src-tag[data-tag="course-application"]{ background: rgba(180,133,76,0.14); color: var(--ochre); }
.src-tag[data-tag="strategic-inference"]{ background: rgba(107,58,90,0.10); color: var(--plum); }
.src-tag[data-tag="practical-advice"] { background: rgba(180,58,64,0.10);   color: var(--beni); }

/* ============ Bilingual ============ */
.dual { display: block; }
.dual-en { display: block; }
.dual-zh {
  display: block;
  margin-top: 4px;
  font-size: 0.86em;
  line-height: 1.55;
  color: var(--muted);
  font-family: var(--font-sans);
}
.card-h .dual-zh,
.section-title .dual-zh,
.hero-title .dual-zh {
  font-family: var(--font-serif);
  font-size: 0.62em;
  font-weight: 500;
  color: var(--muted);
  margin-top: 6px;
}
.kicker .dual-zh,
.hero-kicker .dual-zh,
.nav-group-label .dual-zh {
  font-size: 1em;
  letter-spacing: 0.16em;
  margin-top: 2px;
}
.mode-zh .page,
.mode-zh .hero-title,
.mode-zh .section-title,
.mode-zh .card-h,
.mode-zh .hero-thesis {
  font-family: var(--font-sans);
}
.mode-zh .hero-title,
.mode-zh .section-title,
.mode-zh .card-h {
  letter-spacing: 0;
  font-weight: 600;
}

/* ============ LogicView ============ */
.logic-card { gap: 8px; }
.logic-head { display: flex; align-items: baseline; justify-content: space-between; }
.logic-label { font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--slate); font-weight: 600; }
.logic-icon { color: var(--slate); margin-top: 4px; }
.logic-sub {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.flow-line {
  display: flex; align-items: center; justify-content: center; gap: 12px;
  padding: 14px 0; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--muted); border-top: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline);
}

/* ============ Legend ============ */
.legend-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }
.legend-card {
  padding: 14px 16px;
  background: var(--paper-card);
  border: 1px solid var(--hairline);
  border-radius: 4px;
  display: flex; flex-direction: column; gap: 8px;
}
.legend-text { font-size: 13px; line-height: 1.55; margin: 0; color: var(--ink); }

/* ============ CX/UX ============ */
.cxux-layout { display: grid; grid-template-columns: 360px 1fr; gap: 36px; align-items: center; }
.cxux-diagram svg { width: 100%; height: auto; max-width: 360px; }
.diag-eyebrow { font-size: 13px; letter-spacing: 0.2em; font-weight: 600; fill: var(--slate); font-family: var(--font-sans); }
.diag-center { font-size: 15px; letter-spacing: 0.16em; font-weight: 600; fill: var(--plum); font-family: var(--font-sans); }
.diag-spoke { font-size: 11px; letter-spacing: 0.06em; fill: var(--muted); font-family: var(--font-sans); }

.cxux-notes { display: flex; flex-direction: column; gap: 18px; }
.note-block { display: flex; flex-direction: column; gap: 8px; }
.note-block p { font-size: 13.5px; line-height: 1.6; margin: 0; color: var(--ink); }
.key-pill { display: inline-block; font-size: 11px; letter-spacing: 0.12em; font-weight: 700; padding: 3px 9px; border-radius: 2px; align-self: flex-start; }
.cx-key { background: rgba(46,92,110,0.12); color: var(--slate); }
.ux-key { background: rgba(107,58,90,0.12); color: var(--plum); }
.inline-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 6px 12px; }
.inline-list li { font-size: 13px; color: var(--ink); padding-left: 10px; position: relative; }
.inline-list li::before { content: ""; position: absolute; left: 0; top: 8px; width: 4px; height: 4px; background: var(--plum); border-radius: 50%; }

.case-stack { display: flex; flex-direction: column; gap: 0; border-top: 1px solid var(--hairline); }
.case-row {
  display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center;
  padding: 14px 0; border-bottom: 1px solid var(--hairline);
}
.case-text { display: flex; flex-direction: column; gap: 4px; }
.case-title { font-size: 13.5px; margin: 0; line-height: 1.55; color: var(--ink); }
.case-lesson { font-size: 12.5px; margin: 0; color: var(--muted); font-style: italic; font-family: var(--font-serif); }
.case-scores { display: flex; gap: 8px; }
.pill { font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 9px; border-radius: 2px; font-weight: 600; }
.pill.ok { background: rgba(94,123,90,0.14); color: var(--moss); }
.pill.bad { background: rgba(180,58,64,0.12); color: var(--beni); }

/* ============ Callouts ============ */
.callout {
  display: flex; gap: 10px; align-items: flex-start;
  padding: 12px 14px;
  background: var(--paper-soft);
  border-left: 2px solid var(--slate);
  border-radius: 0 3px 3px 0;
}
.callout p { font-size: 13px; line-height: 1.55; margin: 0; color: var(--ink); }
.callout svg { flex-shrink: 0; margin-top: 2px; color: var(--slate); }
.callout.warn { border-left-color: var(--beni); background: rgba(180,58,64,0.05); }
.callout.warn svg { color: var(--beni); }
.callout.method { border-left-color: var(--ochre); background: rgba(180,133,76,0.06); }
.callout.method svg { color: var(--ochre); }

/* ============ Why ============ */
.why-questions { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.why-q {
  display: flex; gap: 12px; padding: 14px 16px;
  border: 1px solid var(--hairline); background: var(--paper-card); border-radius: 4px;
}
.why-q p { font-size: 13.5px; line-height: 1.55; margin: 0; color: var(--ink); }
.q-num {
  font-family: var(--font-serif); font-size: 22px; font-weight: 500;
  color: var(--plum); line-height: 1; flex-shrink: 0;
}
.q-num.small { font-size: 14px; color: var(--muted); }

.reason-card { gap: 8px; }
.sub-h {
  font-family: var(--font-serif); font-size: 15px; font-weight: 500;
  color: var(--ink); margin: 6px 0 0; letter-spacing: 0;
}

.check-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
.check-list li {
  display: flex; gap: 8px; align-items: flex-start;
  font-size: 13.5px; line-height: 1.55; color: var(--ink);
}
.check-list li svg { color: var(--moss); flex-shrink: 0; margin-top: 4px; }
.check-list.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 18px; }

/* ============ Not (contrasts) ============ */
.contrast-stack { display: flex; flex-direction: column; gap: 22px; }
.contrast-row {
  display: grid; grid-template-columns: 1fr 36px 1fr; gap: 14px; align-items: stretch;
}
.contrast-col {
  padding: 14px 16px; border-radius: 4px; border: 1px solid var(--hairline);
  background: var(--paper-card); display: flex; flex-direction: column; gap: 8px;
}
.contrast-col.weak { background: rgba(180,58,64,0.04); }
.contrast-col.strong { background: rgba(94,123,90,0.06); }
.contrast-col strong { font-size: 14px; color: var(--ink); }
.contrast-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; }
.contrast-col li { font-size: 12.5px; line-height: 1.5; color: var(--ink); padding-left: 10px; position: relative; }
.contrast-col li::before { content: "·"; position: absolute; left: 2px; color: var(--muted); }
.flag {
  font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700;
  padding: 2px 7px; border-radius: 2px; align-self: flex-start;
}
.bad-flag { background: rgba(180,58,64,0.14); color: var(--beni); }
.good-flag { background: rgba(94,123,90,0.16); color: var(--moss); }
.contrast-arrow { display: flex; align-items: center; justify-content: center; color: var(--muted); }

.miscon-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.miscon-card {
  padding: 12px 14px; border: 1px solid var(--hairline); background: var(--paper-card);
  border-radius: 4px; display: flex; flex-direction: column; gap: 6px;
}
.miscon-num {
  font-family: var(--font-serif); font-size: 18px; color: var(--beni);
  font-weight: 500; line-height: 1;
}
.miscon-card strong { font-size: 13.5px; color: var(--ink); }
.miscon-card p { font-size: 12.5px; line-height: 1.5; color: var(--muted); margin: 0; }

/* ============ Build ============ */
.build-stack { display: flex; flex-direction: column; gap: 28px; }
.phase {
  padding: 22px 24px; border: 1px solid var(--hairline);
  border-radius: 4px; background: var(--paper-card);
  display: flex; flex-direction: column; gap: 18px;
}
.phase-head { display: grid; grid-template-columns: 48px 1fr; gap: 16px; align-items: start; }
.phase-marker {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--slate); color: var(--paper);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-serif); font-size: 20px; font-weight: 500;
}
.phase-meta .card-h { margin-bottom: 4px; }

.iv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.iv-card {
  padding: 14px 16px; border: 1px solid var(--hairline);
  background: var(--paper); border-radius: 4px;
  display: flex; flex-direction: column; gap: 8px;
}
.iv-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.iv-head strong { font-size: 14px; color: var(--ink); }
.iv-head svg { color: var(--slate); }
.iv-note { font-size: 12px; line-height: 1.5; color: var(--muted); font-style: italic; margin: 0; font-family: var(--font-serif); }
.iv-qs { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
.iv-qs li { font-size: 12.5px; line-height: 1.5; color: var(--ink); padding-left: 12px; position: relative; }
.iv-qs li::before { content: "—"; position: absolute; left: 0; color: var(--muted-soft); }

.cand-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.cand-card {
  padding: 14px 16px; border: 1px solid var(--hairline);
  background: var(--paper); border-radius: 4px;
  display: flex; flex-direction: column; gap: 6px;
}
.cand-num {
  font-family: var(--font-serif); font-size: 20px; color: var(--plum);
  font-weight: 500; line-height: 1;
}
.cand-card strong { font-size: 13.5px; color: var(--ink); }
.cand-card p { font-size: 12.5px; line-height: 1.5; color: var(--muted); margin: 0; }

/* ============ Interview Library ============ */
.iv-lib {
  border: 1px solid var(--hairline); border-radius: 4px;
  background: var(--paper-card); overflow: hidden;
}
.iv-tabs {
  display: flex; flex-wrap: wrap; border-bottom: 1px solid var(--hairline);
  background: var(--paper-soft);
}
.iv-tab {
  flex: 1 1 auto; min-width: 140px;
  background: transparent; border: none; cursor: pointer;
  padding: 10px 14px; font-family: var(--font-sans);
  font-size: 12.5px; color: var(--muted);
  display: flex; align-items: center; gap: 8px; justify-content: center;
  border-right: 1px solid var(--hairline);
  border-bottom: 2px solid transparent;
  transition: all 0.15s;
}
.iv-tab:last-child { border-right: none; }
.iv-tab:hover { color: var(--ink); }
.iv-tab.active {
  background: var(--paper-card); color: var(--ink); font-weight: 600;
  border-bottom-color: var(--slate);
}
.iv-tab-num {
  font-family: var(--font-serif); font-size: 14px; color: var(--slate); font-weight: 500;
}
.iv-panel { padding: 20px 24px; }
.iv-intent {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 13px; color: var(--muted); font-style: italic;
  font-family: var(--font-serif); margin: 0 0 14px;
  padding-bottom: 12px; border-bottom: 1px dashed var(--hairline);
}
.iv-intent svg { color: var(--slate); flex-shrink: 0; margin-top: 3px; }
.iv-question-list {
  list-style: none; padding: 0; margin: 0;
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 6px 24px;
}
.iv-question-list li {
  display: flex; gap: 10px; align-items: flex-start;
  font-size: 13px; line-height: 1.55; color: var(--ink);
  padding: 2px 0;
}

/* ============ Profile ============ */
.profile-split { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.profile-col {
  padding: 18px 20px; border: 1px solid var(--hairline);
  background: var(--paper-card); border-radius: 4px;
  display: flex; flex-direction: column; gap: 12px;
}
.profile-head {
  display: flex; flex-direction: column; gap: 4px;
  padding-bottom: 10px; border-bottom: 1px solid var(--hairline);
}
.profile-row {
  display: grid; grid-template-columns: 28px 1fr; gap: 10px; align-items: start;
}
.profile-key {
  font-family: var(--font-serif); font-size: 16px; color: var(--slate);
  font-weight: 500; line-height: 1.2;
}
.profile-key.letter { color: var(--plum); font-style: italic; }
.profile-row strong { font-size: 13.5px; color: var(--ink); display: block; margin-bottom: 2px; }
.profile-row p { font-size: 12.5px; line-height: 1.55; color: var(--muted); margin: 0; }

/* ============ Advanced personas ============ */
.adv-card { gap: 6px; }
.adv-use {
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--ochre); font-weight: 600; margin-bottom: 2px;
}
.dot-list { list-style: none; padding: 0; margin: 4px 0 0; display: flex; flex-direction: column; gap: 4px; }
.dot-list li { font-size: 12.5px; line-height: 1.5; color: var(--ink); padding-left: 12px; position: relative; }
.dot-list li::before { content: "·"; position: absolute; left: 4px; color: var(--muted); }

.micro-block {
  padding: 18px 20px; border: 1px solid var(--hairline);
  background: var(--paper-card); border-radius: 4px;
  display: flex; flex-direction: column; gap: 14px;
}
.micro-macro { display: flex; flex-direction: column; gap: 4px; padding-bottom: 12px; border-bottom: 1px solid var(--hairline); }
.macro-label { color: var(--plum); }
.micro-macro strong { font-family: var(--font-serif); font-size: 17px; color: var(--ink); font-weight: 500; }
.micro-macro p { font-size: 13px; line-height: 1.55; color: var(--muted); margin: 0; }
.micro-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.micro-leaf {
  padding: 12px 14px; background: var(--paper); border: 1px solid var(--hairline); border-radius: 4px;
  display: flex; flex-direction: column; gap: 4px;
}
.micro-leaf strong { font-size: 13px; color: var(--slate); }
.micro-leaf p { font-size: 12px; line-height: 1.5; color: var(--ink); margin: 0; }

/* ============ Use personas ============ */
.use-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.use-card { gap: 8px; }
.use-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
.use-purpose { color: var(--ochre); white-space: nowrap; }

/* ============ KPI ============ */
.kpi-card { gap: 6px; }
.kpi-card strong { font-size: 14px; color: var(--ink); }
.kpi-card p { font-size: 12.5px; line-height: 1.5; color: var(--muted); margin: 0; }

/* ============ Triggers ============ */
.trigger-list {
  list-style: none; padding: 0; margin: 0;
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px 24px;
  counter-reset: trig;
}
.trigger-list li {
  display: flex; gap: 12px; align-items: center;
  padding: 10px 12px; border: 1px solid var(--hairline);
  background: var(--paper-card); border-radius: 3px;
  font-size: 13.5px; color: var(--ink);
}
.trig-num { font-family: var(--font-serif); font-size: 14px; color: var(--plum); font-weight: 500; }

/* ============ Flow chips ============ */
.flow-chips { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.flow-chip {
  padding: 6px 12px; background: var(--paper-card); border: 1px solid var(--hairline);
  border-radius: 99px; font-size: 12.5px; color: var(--ink);
}
.flow-chips svg { color: var(--muted-soft); }

/* ============ Elements ============ */
.elements-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
.element-card { padding: 14px 16px; gap: 6px; }
.element-num {
  font-family: var(--font-serif); font-size: 22px; font-weight: 500;
  color: var(--slate); line-height: 1;
}

/* ============ Stages ============ */
.stage-rail { position: relative; height: 28px; display: grid; grid-template-columns: repeat(4, 1fr); align-items: center; margin-bottom: 4px; }
.rail-line { position: absolute; left: 12%; right: 12%; height: 1px; background: var(--hairline-strong); }
.rail-dot {
  position: relative; z-index: 1; justify-self: center;
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--paper); border: 1.5px solid var(--slate); color: var(--slate);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 600; font-family: var(--font-serif);
}
.stage-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.stage-card { gap: 10px; }
.stage-cap { display: flex; align-items: center; justify-content: space-between; }
.stage-dot {
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--slate); color: var(--paper);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 600;
}
.stage-source {
  font-size: 9.5px; letter-spacing: 0.1em; color: var(--muted);
}
.stage-quote {
  display: flex; gap: 8px; align-items: flex-start;
  margin: 0; padding: 8px 0;
  border-top: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline);
  font-family: var(--font-serif); font-style: italic;
  font-size: 13px; line-height: 1.5; color: var(--ink);
}
.stage-quote svg { color: var(--plum); flex-shrink: 0; margin-top: 2px; }
.stage-mindset { font-size: 12.5px; line-height: 1.5; color: var(--muted); margin: 0; }
.stage-mindset::before { content: ""; }
.stage-dl { display: flex; flex-direction: column; gap: 6px; margin: 0; }
.stage-dl > div { display: grid; grid-template-columns: 60px 1fr; gap: 8px; align-items: baseline; }
.stage-dl dt {
  font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--muted); font-weight: 600;
}
.stage-dl dd { font-size: 12px; line-height: 1.5; color: var(--ink); margin: 0; }

/* ============ Emotion ============ */
.emotion-chart {
  background: var(--paper-card); border: 1px solid var(--hairline);
  border-radius: 4px; padding: 18px 22px;
}
.emotion-chart svg { width: 100%; height: auto; }
.emo-stage { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; fill: var(--muted); font-family: var(--font-sans); font-weight: 600; }
.emo-label { font-size: 11px; fill: var(--plum); font-family: var(--font-sans); font-style: italic; }

.tone-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
.tone-card {
  padding: 12px 14px; background: var(--paper-card); border: 1px solid var(--hairline);
  border-radius: 4px; display: flex; flex-direction: column; gap: 6px;
}
.tone-card strong { font-size: 13px; color: var(--plum); font-family: var(--font-serif); font-weight: 500; }
.tone-card p { font-size: 12px; line-height: 1.5; color: var(--ink); margin: 0; }

/* ============ Tables ============ */
.table-wrap {
  overflow-x: auto; border: 1px solid var(--hairline); border-radius: 4px;
  background: var(--paper-card); -webkit-overflow-scrolling: touch;
}
table.dense {
  width: 100%; border-collapse: collapse; font-size: 13px;
}
table.dense th, table.dense td {
  text-align: left; padding: 8px 12px;
  border-bottom: 1px solid var(--hairline); vertical-align: top;
  line-height: 1.5;
}
table.dense thead th {
  background: var(--paper-soft);
  font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--muted); font-weight: 600;
  border-bottom: 1px solid var(--hairline-strong);
  white-space: nowrap;
}
table.dense tbody tr:last-child td { border-bottom: none; }
table.dense tbody tr:hover { background: rgba(46,92,110,0.025); }
.nowrap { white-space: nowrap; }
.journey-table { font-size: 12px; }
.journey-table th, .journey-table td { padding: 7px 10px; }

/* ============ Onstage / Offstage ============ */
.onstage-stack { display: flex; flex-direction: column; gap: 8px; }
.onstage-head {
  display: grid; grid-template-columns: 1fr 24px 1fr; gap: 12px;
  padding-bottom: 8px; border-bottom: 1px solid var(--hairline);
}
.onstage-label {
  font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase;
  font-weight: 600; padding: 4px 0;
}
.onstage-label.on { color: var(--slate); }
.onstage-label.off { color: var(--plum); text-align: left; }
.onstage-row {
  display: grid; grid-template-columns: 1fr 24px 1fr; gap: 12px; align-items: center;
}
.onstage-row svg { color: var(--muted-soft); justify-self: center; }
.onstage-cell {
  padding: 10px 14px; border-radius: 3px; font-size: 13px; line-height: 1.5;
}
.onstage-cell.on { background: rgba(46,92,110,0.06); color: var(--ink); }
.onstage-cell.off { background: rgba(107,58,90,0.06); color: var(--ink); }

/* ============ Implementation ============ */
.impl-card { gap: 8px; }

/* ============ Content Gap ============ */
.gap-flow {
  display: flex; align-items: stretch; gap: 12px; flex-wrap: wrap;
  padding: 18px 20px; background: var(--paper-card);
  border: 1px solid var(--hairline); border-radius: 4px;
}
.gap-flow svg { align-self: center; color: var(--muted-soft); flex-shrink: 0; }
.gap-step {
  flex: 1 1 200px; padding: 14px 16px;
  background: var(--paper); border: 1px solid var(--hairline); border-radius: 3px;
  display: flex; align-items: center; gap: 10px;
}
.gap-final { background: rgba(94,123,90,0.06); border-color: rgba(94,123,90,0.3); }
.gap-num {
  font-family: var(--font-serif); font-size: 22px; color: var(--slate);
  font-weight: 500; flex-shrink: 0; line-height: 1;
}
.gap-step strong { font-size: 13px; line-height: 1.5; color: var(--ink); font-weight: 500; }

/* ============ Templates ============ */
.tmpl-stack { display: flex; flex-direction: column; gap: 22px; }
.tmpl-block { display: flex; flex-direction: column; gap: 10px; }

/* ============ Projects ============ */
.project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.project-card { gap: 10px; }
.proj-status { font-size: 13px; line-height: 1.55; color: var(--muted); font-style: italic; font-family: var(--font-serif); margin: 0; }
.metric-row {
  display: flex; gap: 10px; align-items: baseline;
  padding-top: 10px; border-top: 1px solid var(--hairline);
}
.metric-label { color: var(--ochre); flex-shrink: 0; }
.metric-value { font-size: 12.5px; color: var(--ink); }

/* ============ Timeline ============ */
.timeline { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }
.timeline-item {
  display: grid; grid-template-columns: 110px 24px 1fr;
  gap: 14px; padding: 10px 0; align-items: start;
}
.tl-date {
  font-size: 11.5px; letter-spacing: 0.08em; color: var(--slate);
  font-weight: 600; padding-top: 3px;
}
.tl-marker { position: relative; height: 100%; display: flex; flex-direction: column; align-items: center; }
.tl-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--paper); border: 1.5px solid var(--slate); margin-top: 6px; flex-shrink: 0;
}
.tl-line { flex: 1; width: 1px; background: var(--hairline-strong); margin-top: 4px; min-height: 14px; }
.tl-body { display: flex; flex-direction: column; gap: 3px; padding-bottom: 8px; }
.tl-body strong { font-size: 14px; color: var(--ink); font-weight: 600; }
.tl-body p { font-size: 12.5px; line-height: 1.5; color: var(--muted); margin: 0; }

/* ============ Sources ============ */
.sources-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.source-card {
  padding: 16px 18px; background: var(--paper-card); border: 1px solid var(--hairline); border-radius: 4px;
  display: flex; flex-direction: column; gap: 6px;
}
.source-card svg { color: var(--slate); }
.source-card strong { font-family: var(--font-serif); font-size: 14.5px; color: var(--ink); font-weight: 500; line-height: 1.3; }
.source-card p { font-size: 12.5px; line-height: 1.55; color: var(--muted); margin: 0; }

.prose { font-size: 14px; line-height: 1.65; color: var(--ink); margin: 0; max-width: 64ch; }

/* ============ Mode Toggle ============ */
.mode-toggle {
  position: fixed; right: 20px; bottom: 20px; z-index: 50;
  display: flex; flex-direction: column; align-items: flex-end; gap: 8px;
}
.mode-trigger {
  display: flex; align-items: center; gap: 8px;
  padding: 9px 14px; background: var(--ink); color: var(--paper);
  border: none; border-radius: 99px; cursor: pointer;
  font-family: var(--font-sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.06em; box-shadow: 0 4px 12px rgba(27,31,38,0.18);
  transition: transform 0.15s;
}
.mode-trigger:hover { transform: translateY(-1px); }
.mode-glyph {
  font-family: var(--font-serif); font-size: 14px;
  width: 18px; height: 18px; display: flex; align-items: center; justify-content: center;
  background: var(--paper); color: var(--ink); border-radius: 50%; font-weight: 500;
}
.mode-current { letter-spacing: 0.1em; }
.mode-menu {
  display: flex; flex-direction: column;
  background: var(--paper-card); border: 1px solid var(--hairline);
  border-radius: 6px; overflow: hidden;
  box-shadow: 0 8px 24px rgba(27,31,38,0.12);
  min-width: 120px;
}
.mode-menu button {
  background: transparent; border: none; cursor: pointer;
  padding: 9px 14px; font-family: var(--font-sans); font-size: 12.5px;
  color: var(--ink); text-align: right; letter-spacing: 0.04em;
  border-bottom: 1px solid var(--hairline);
}
.mode-menu button:last-child { border-bottom: none; }
.mode-menu button:hover { background: var(--paper-soft); }
.mode-menu button.active { color: var(--slate); font-weight: 700; background: rgba(46,92,110,0.06); }

/* ============ Responsive ============ */
@media (max-width: 1100px) {
  .layout { grid-template-columns: 200px 1fr; gap: 40px; padding: 40px 32px 100px; }
  .hero { padding: 56px 32px 44px; }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .why-questions { grid-template-columns: 1fr; }
  .iv-grid, .cand-grid { grid-template-columns: 1fr 1fr; }
  .micro-grid { grid-template-columns: 1fr 1fr; }
  .stage-grid { grid-template-columns: 1fr 1fr; }
  .stage-rail { grid-template-columns: repeat(2, 1fr); }
  .elements-grid { grid-template-columns: repeat(2, 1fr); }
  .tone-grid { grid-template-columns: 1fr 1fr; }
  .project-grid { grid-template-columns: 1fr; }
  .iv-question-list { grid-template-columns: 1fr; }
  .cxux-layout { grid-template-columns: 1fr; }
  .cxux-diagram { display: flex; justify-content: center; }
}

@media (max-width: 760px) {
  .page { font-size: 14.5px; }
  .hero { padding: 40px 18px 32px; border-bottom: 1px solid var(--hairline); }
  .hero-title { font-size: clamp(28px, 8vw, 38px); margin-bottom: 16px; }
  .hero-thesis { font-size: 15px; }
  .hero-source { font-size: 12px; }
  .hero-stats { gap: 18px; padding-top: 14px; }
  .hero-stats strong { font-size: 22px; }
  .layout {
    grid-template-columns: 1fr; gap: 28px; padding: 24px 16px 80px;
  }
  .layout-nav {
    position: static; max-height: none; padding: 12px 0;
    border-bottom: 1px solid var(--hairline); margin-bottom: 4px;
  }
  .nav { flex-direction: row; flex-wrap: nowrap; overflow-x: auto; gap: 18px; padding-bottom: 8px; }
  .nav-group { flex: 0 0 auto; min-width: 180px; }
  .layout-main { gap: 44px; }
  .section { gap: 16px; }
  .section-head { padding: 10px 0 12px; }
  .section-title { font-size: clamp(20px, 5.6vw, 26px); }
  .section-summary { font-size: 13.5px; }
  .card { padding: 14px 16px; }
  .card-h { font-size: 16px; }
  .card-body { font-size: 13px; }
  .grid-3, .grid-4 { grid-template-columns: 1fr; gap: 12px; }
  .iv-grid, .cand-grid { grid-template-columns: 1fr; }
  .micro-grid { grid-template-columns: 1fr; }
  .stage-grid { grid-template-columns: 1fr; }
  .stage-rail { display: none; }
  .elements-grid { grid-template-columns: 1fr; }
  .tone-grid { grid-template-columns: 1fr; }
  .miscon-grid { grid-template-columns: 1fr; }
  .legend-grid { grid-template-columns: 1fr; }
  .profile-split { grid-template-columns: 1fr; gap: 14px; }
  .split-2 { grid-template-columns: 1fr; gap: 22px; }
  .contrast-row { grid-template-columns: 1fr; }
  .contrast-arrow { transform: rotate(90deg); padding: 4px 0; }
  .case-row { grid-template-columns: 1fr; gap: 8px; }
  .case-scores { gap: 6px; flex-wrap: wrap; }
  .trigger-list { grid-template-columns: 1fr; }
  .check-list.two-col { grid-template-columns: 1fr; }
  .use-grid { grid-template-columns: 1fr; }
  .use-head { flex-direction: column; align-items: flex-start; gap: 4px; }
  .gap-flow { flex-direction: column; gap: 8px; }
  .gap-flow svg { transform: rotate(90deg); }
  .gap-step { flex: 1 1 auto; }
  .onstage-row, .onstage-head { grid-template-columns: 1fr; gap: 6px; }
  .onstage-row svg { transform: rotate(90deg); justify-self: start; }
  .onstage-head { display: none; }
  .onstage-cell.on::before { content: "Onstage · "; font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--slate); font-weight: 700; margin-right: 6px; }
  .onstage-cell.off::before { content: "Offstage · "; font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--plum); font-weight: 700; margin-right: 6px; }
  .phase { padding: 16px 16px; }
  .phase-head { grid-template-columns: 36px 1fr; gap: 12px; }
  .phase-marker { width: 32px; height: 32px; font-size: 16px; }
  .iv-tab { min-width: 110px; padding: 8px 10px; font-size: 11.5px; }
  .iv-panel { padding: 14px 16px; }
  table.dense { font-size: 12px; }
  table.dense th, table.dense td { padding: 6px 8px; }
  .journey-table { font-size: 11px; }
  .timeline-item { grid-template-columns: 80px 18px 1fr; gap: 10px; }
  .tl-date { font-size: 11px; }
  .mode-toggle { right: 14px; bottom: 14px; }
  .mode-trigger { padding: 8px 12px; font-size: 11px; }
  .section-head { position: static; }
}

@media print {
  .mode-toggle { display: none; }
  .layout-nav { display: none; }
  .layout { grid-template-columns: 1fr; padding: 24px; }
  .section-head { position: static; }
}
`;
