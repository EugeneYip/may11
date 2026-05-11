import React, { useMemo, useState } from "react";

const DATA = {
  "meta": {
    "title": {
      "en": "MKTG 6222 Class 02",
      "zh": "MKTG 6222 第二堂課"
    },
    "subtitle": {
      "en": "Customer Journeys and Buyer Personas",
      "zh": "顧客旅程與買方人物誌"
    },
    "courseLine": {
      "en": "Digital marketing study guide",
      "zh": "數位行銷學習指南"
    },
    "thesis": {
      "en": "SmartBug defines the customer. SilverTech maps that customer’s experience. MKTG 6222 turns both into real digital marketing execution across Instagram, blog, Meta Ads, Google Ads, and team recommendations.",
      "zh": "SmartBug 定義顧客，SilverTech 描繪顧客體驗，MKTG 6222 要把兩者轉成真實數位行銷執行，包含 Instagram、blog、Meta Ads、Google Ads 與團隊建議。"
    },
    "defaultMode": "en"
  },
  "sourceLegend": [
    {
      "tag": "Source Fact",
      "zhTag": "來源事實",
      "en": "Directly supported by a reading, slide deck, or syllabus.",
      "zh": "由閱讀、簡報或 syllabus 直接支持。"
    },
    {
      "tag": "Source Based Synthesis",
      "zhTag": "來源整合",
      "en": "A reasonable conclusion drawn from more than one source.",
      "zh": "由多份來源合理整合出的結論。"
    },
    {
      "tag": "Course Application",
      "zhTag": "課程應用",
      "en": "An application of the reading to MKTG 6222 projects.",
      "zh": "把閱讀內容套用到 MKTG 6222 作業。"
    },
    {
      "tag": "Strategic Inference",
      "zhTag": "策略推論",
      "en": "A defensible business judgment, not stated directly in the source.",
      "zh": "合理商業判斷，但非來源直接明講。"
    },
    {
      "tag": "Practical Advice",
      "zhTag": "實務建議",
      "en": "Execution guidance for producing stronger work.",
      "zh": "為了做出更好成果的執行建議。"
    }
  ],
  "sections": [
    {
      "id": "reading-logic",
      "kicker": {
        "en": "Master logic",
        "zh": "主架構"
      },
      "title": {
        "en": "The two readings do different jobs",
        "zh": "兩份閱讀各自處理不同問題"
      },
      "summary": {
        "en": "The correct sequence is persona first, journey map second. A persona explains whom the strategy is for. A journey map explains how that person moves through the brand experience.",
        "zh": "正確順序是先 persona，再 journey map。Persona 說明策略服務誰，journey map 說明這個人如何經歷品牌體驗。"
      },
      "type": "logic",
      "items": [
        {
          "label": {
            "en": "SmartBug",
            "zh": "SmartBug"
          },
          "title": {
            "en": "Who is the customer?",
            "zh": "顧客是誰？"
          },
          "body": {
            "en": "Persona methodology: research, internal conversations, customer interviews, synthesis, writing, use, maintenance, and advanced personas.",
            "zh": "Persona 方法論，包含研究、內部訪談、顧客訪談、整合、書寫、使用、維護與進階 personas。"
          },
          "tag": "Source Fact"
        },
        {
          "label": {
            "en": "SilverTech",
            "zh": "SilverTech"
          },
          "title": {
            "en": "How does the customer experience the brand?",
            "zh": "顧客如何經歷品牌？"
          },
          "body": {
            "en": "Journey mapping architecture: persona, stage, action, emotion, touchpoint, content, features, insights, and opportunities.",
            "zh": "Journey map 架構，包含 persona、stage、action、emotion、touchpoint、content、features、insights 與 opportunities。"
          },
          "tag": "Source Fact"
        },
        {
          "label": {
            "en": "MKTG 6222",
            "zh": "MKTG 6222"
          },
          "title": {
            "en": "How does this become execution?",
            "zh": "如何轉成執行？"
          },
          "body": {
            "en": "The course asks students to apply these concepts through Instagram growth, a blog post, Meta Ads, Google Ads, and team recommendations.",
            "zh": "本課要求把概念套用在 Instagram 成長、blog post、Meta Ads、Google Ads 與團隊建議。"
          },
          "tag": "Course Application"
        }
      ]
    },
    {
      "id": "attribution",
      "kicker": {
        "en": "Attribution discipline",
        "zh": "來源歸屬紀律"
      },
      "title": {
        "en": "Separate reading facts from project judgment",
        "zh": "把閱讀事實與作業判斷分開"
      },
      "summary": {
        "en": "Most grading risk comes from mixing source facts, course applications, and personal recommendations. Use the label system before turning notes into slides, posts, or campaign memos.",
        "zh": "主要扣分風險往往不是不懂內容，而是把來源事實、課程應用與個人建議混在一起。把筆記轉成簡報、貼文或 campaign memo 前，先使用標籤系統。"
      },
      "type": "legend"
    },
    {
      "id": "cx-ux",
      "kicker": {
        "en": "SilverTech core",
        "zh": "SilverTech 核心"
      },
      "title": {
        "en": "CX is broader than UX",
        "zh": "CX 比 UX 更廣"
      },
      "summary": {
        "en": "UX covers the digital or interface portion of an experience. CX covers the full customer relationship, including service, brand reputation, sales process, pricing fairness, delivery, and the UX layer itself.",
        "zh": "UX 處理體驗中的數位或介面部分。CX 處理完整顧客關係，包含客服、品牌聲譽、銷售流程、價格公平性、交付體驗，以及 UX 本身。"
      },
      "type": "cxux",
      "cases": [
        {
          "situation": {
            "en": "Starbucks app reload fails and gives unclear feedback.",
            "zh": "Starbucks app 加值失敗，而且訊息不清楚。"
          },
          "ux": {
            "en": "Weak",
            "zh": "弱"
          },
          "cx": {
            "en": "Strong",
            "zh": "強"
          },
          "lesson": {
            "en": "A bad digital touchpoint can be partly repaired by strong human service.",
            "zh": "數位接觸點失敗，仍可能被優秀的人員服務部分補救。"
          }
        },
        {
          "situation": {
            "en": "A patient portal books an appointment smoothly, but the clinic has no appointment record.",
            "zh": "診所網站預約順暢，但現場系統查不到紀錄。"
          },
          "ux": {
            "en": "Strong",
            "zh": "強"
          },
          "cx": {
            "en": "Weak",
            "zh": "弱"
          },
          "lesson": {
            "en": "A clean interface cannot compensate for a broken operational handoff.",
            "zh": "介面再順，若後端交接斷裂，整體體驗仍然失敗。"
          }
        }
      ]
    },
    {
      "id": "journey-map",
      "kicker": {
        "en": "Journey map anatomy",
        "zh": "Journey map 結構"
      },
      "title": {
        "en": "Five elements make the map useful",
        "zh": "五個要素讓 journey map 具備實用價值"
      },
      "summary": {
        "en": "A useful journey map does not only list steps. It connects the customer, the decision stage, visible actions, emotional state, touchpoints, content needs, features, and improvement opportunities.",
        "zh": "有用的 journey map 不只是列步驟，而是把顧客、決策階段、可見行動、情緒狀態、接觸點、內容需求、功能與改善機會連在一起。"
      },
      "type": "cards",
      "cards": [
        {
          "title": {
            "en": "Persona",
            "zh": "Persona"
          },
          "body": {
            "en": "Whose journey is this map describing?",
            "zh": "這張圖描述的是誰的旅程？"
          },
          "tag": "Source Fact"
        },
        {
          "title": {
            "en": "Stage",
            "zh": "Stage"
          },
          "body": {
            "en": "Where is this person in the decision process?",
            "zh": "這個人在決策流程中的哪個位置？"
          },
          "tag": "Source Fact"
        },
        {
          "title": {
            "en": "Action, Emotion, Touchpoint",
            "zh": "Action、Emotion、Touchpoint"
          },
          "body": {
            "en": "What does the person do, feel, and interact with?",
            "zh": "這個人做甚麼、感受甚麼、接觸甚麼？"
          },
          "tag": "Source Fact"
        },
        {
          "title": {
            "en": "Supporting Content and Features",
            "zh": "Supporting Content and Features"
          },
          "body": {
            "en": "What content or feature helps at this exact moment?",
            "zh": "此刻需要甚麼內容或功能來協助？"
          },
          "tag": "Source Fact"
        },
        {
          "title": {
            "en": "Insights and Opportunities",
            "zh": "Insights and Opportunities"
          },
          "body": {
            "en": "What can be improved, automated, or made more reassuring?",
            "zh": "哪裡可以改善、自動化，或讓顧客更安心？"
          },
          "tag": "Source Fact"
        }
      ]
    },
    {
      "id": "stages",
      "kicker": {
        "en": "Stage model",
        "zh": "階段模型"
      },
      "title": {
        "en": "Use four stages, but do not pretend the journey is linear",
        "zh": "採用四階段，但不要假裝顧客旅程是線性的"
      },
      "summary": {
        "en": "SilverTech uses HubSpot’s Awareness, Consideration, and Decision stages, then extends the map with Post Purchase. For this course, the fourth stage matters because it connects directly to loyalty, referrals, retention, and CLV.",
        "zh": "SilverTech 使用 HubSpot 的 Awareness、Consideration 與 Decision，並加入 Post Purchase。對本課而言，第四階段很重要，因為它直接連到忠誠、推薦、留存與 CLV。"
      },
      "type": "stages",
      "stages": [
        {
          "stage": {
            "en": "Awareness",
            "zh": "Awareness"
          },
          "mindset": {
            "en": "I have a problem or goal.",
            "zh": "我有一個問題或目標。"
          },
          "content": {
            "en": "Whitepaper, checklist, how to video, educational post",
            "zh": "白皮書、checklist、教學影片、教育型貼文"
          },
          "emotion": {
            "en": "Curious, concerned, unsure",
            "zh": "好奇、擔憂、不確定"
          },
          "kpi": {
            "en": "Impressions, reach, CTR",
            "zh": "Impressions、reach、CTR"
          }
        },
        {
          "stage": {
            "en": "Consideration",
            "zh": "Consideration"
          },
          "mindset": {
            "en": "I am comparing solution paths.",
            "zh": "我正在比較可能解法。"
          },
          "content": {
            "en": "Webinar, case study, FAQ, comparison guide",
            "zh": "Webinar、case study、FAQ、比較指南"
          },
          "emotion": {
            "en": "Evaluative, cautious",
            "zh": "評估中、謹慎"
          },
          "kpi": {
            "en": "Time on page, email signup, saves",
            "zh": "Time on page、email signup、saves"
          }
        },
        {
          "stage": {
            "en": "Decision",
            "zh": "Decision"
          },
          "mindset": {
            "en": "I am choosing among providers or options.",
            "zh": "我正在供應商或選項之間做選擇。"
          },
          "content": {
            "en": "Trial, demo, consultation, testimonial, transparent pricing",
            "zh": "Trial、demo、consultation、testimonial、透明價格"
          },
          "emotion": {
            "en": "Ready, urgent, skeptical",
            "zh": "準備好、急迫、懷疑"
          },
          "kpi": {
            "en": "Conversion rate, leads, purchases",
            "zh": "Conversion rate、leads、purchases"
          }
        },
        {
          "stage": {
            "en": "Post Purchase",
            "zh": "Post Purchase"
          },
          "mindset": {
            "en": "Did this meet expectations, and should I stay?",
            "zh": "這是否符合期待？我是否要留下？"
          },
          "content": {
            "en": "Satisfaction survey, special offer, referral bonus, onboarding",
            "zh": "滿意度問卷、special offer、referral bonus、onboarding"
          },
          "emotion": {
            "en": "Satisfied, disappointed, loyal, frustrated",
            "zh": "滿意、失望、忠誠、挫折"
          },
          "kpi": {
            "en": "Retention, repeat purchase, referral",
            "zh": "Retention、repeat purchase、referral"
          }
        }
      ]
    },
    {
      "id": "emotion-content",
      "kicker": {
        "en": "Emotion as design input",
        "zh": "情緒是設計輸入"
      },
      "title": {
        "en": "The same content needs a different tone at different emotional states",
        "zh": "同一份內容在不同情緒狀態下需要不同語氣"
      },
      "summary": {
        "en": "SilverTech emphasizes emotion because tone and presentation change how content is received. A nervous customer needs reassurance. A frustrated customer needs clarity and speed. An excited customer can accept more aspirational messaging.",
        "zh": "SilverTech 強調 emotion，因為內容的語氣與呈現方式會影響顧客如何接收。緊張的顧客需要 reassurance，挫折的顧客需要 clarity 與速度，興奮的顧客可接受較有想像力的 aspirational messaging。"
      },
      "type": "emotion"
    },
    {
      "id": "onstage-offstage",
      "kicker": {
        "en": "Automation leverage",
        "zh": "自動化槓桿"
      },
      "title": {
        "en": "Onstage touchpoints are visible. Offstage systems create leverage.",
        "zh": "Onstage 是顧客看得到的接觸點，Offstage 是真正形成槓桿的系統"
      },
      "summary": {
        "en": "A customer reading a blog post and signing up for a newsletter is onstage. The form trigger, email sequence, CRM update, retargeting audience, and lead scoring logic are offstage. Digital marketing becomes stronger when both layers are designed together.",
        "zh": "顧客閱讀 blog post 並註冊 newsletter 是 onstage。表單觸發、email sequence、CRM 更新、retargeting audience 與 lead scoring 則是 offstage。數位行銷強度來自兩層一起設計。"
      },
      "type": "onstage",
      "pairs": [
        {
          "on": {
            "en": "Reads blog post",
            "zh": "閱讀 blog post"
          },
          "off": {
            "en": "Page view recorded in analytics",
            "zh": "分析工具紀錄 page view"
          }
        },
        {
          "on": {
            "en": "Signs up for newsletter",
            "zh": "註冊 newsletter"
          },
          "off": {
            "en": "CRM contact and segment update",
            "zh": "CRM contact 與 segment 更新"
          }
        },
        {
          "on": {
            "en": "Receives next post email",
            "zh": "收到下一篇文章 email"
          },
          "off": {
            "en": "Automation sends based on trigger or cadence",
            "zh": "自動化依 trigger 或 cadence 發送"
          }
        },
        {
          "on": {
            "en": "Returns to site",
            "zh": "回到網站"
          },
          "off": {
            "en": "Retargeting or lead scoring becomes possible",
            "zh": "可進一步 retargeting 或 lead scoring"
          }
        }
      ]
    },
    {
      "id": "personas",
      "kicker": {
        "en": "SmartBug core",
        "zh": "SmartBug 核心"
      },
      "title": {
        "en": "A persona is a behavior based representation, not a label",
        "zh": "Persona 是以行為為核心的 representation，不是標籤"
      },
      "summary": {
        "en": "Personas go beyond demographics. They help determine content format, channel, tone, CTA, sales preferences, and the problems customers need solved.",
        "zh": "Persona 超越 demographics。它協助判斷內容形式、通路、語氣、CTA、銷售互動偏好，以及顧客真正需要被解決的問題。"
      },
      "type": "persona",
      "notPersona": [
        {
          "bad": {
            "en": "A job title",
            "zh": "一個職稱"
          },
          "why": {
            "en": "The same title can behave differently across products and buying contexts.",
            "zh": "同一職稱在不同產品與購買情境中可能有完全不同的行為。"
          }
        },
        {
          "bad": {
            "en": "A demographic segment",
            "zh": "一組人口統計分類"
          },
          "why": {
            "en": "Age, gender, and income do not explain motivation, objections, or media behavior by themselves.",
            "zh": "年齡、性別與收入本身無法解釋動機、反對理由或媒體行為。"
          }
        },
        {
          "bad": {
            "en": "Every buying role",
            "zh": "每一個 buying role"
          },
          "why": {
            "en": "Roles matter only if they create meaningful behavioral differences.",
            "zh": "Role 只有在造成具策略意義的行為差異時才重要。"
          }
        },
        {
          "bad": {
            "en": "The buyer journey itself",
            "zh": "Buyer journey 本身"
          },
          "why": {
            "en": "The journey is the process. The persona is the person moving through it.",
            "zh": "Journey 是流程，persona 是走過流程的人。"
          }
        }
      ]
    },
    {
      "id": "build-persona",
      "kicker": {
        "en": "Persona building process",
        "zh": "Persona 建構流程"
      },
      "title": {
        "en": "Build personas through hypothesis, validation, and synthesis",
        "zh": "Persona 透過假設、驗證與整合建立"
      },
      "summary": {
        "en": "SmartBug’s process is deliberately evidence based. Internal teams form hypotheses, real customer conversations test them, and qualitative plus quantitative data are synthesized into a profile.",
        "zh": "SmartBug 的流程本質上是 evidence based。內部團隊先形成假設，真實顧客訪談驗證假設，再把質化與量化資料整合為 profile。"
      },
      "type": "process",
      "steps": [
        {
          "step": {
            "en": "1",
            "zh": "1"
          },
          "title": {
            "en": "Internal conversations",
            "zh": "Internal conversations"
          },
          "body": {
            "en": "Interview sales, marketing, and customer service to identify pain points, goals, behaviors, objections, questions, and existing campaign signals.",
            "zh": "訪談 sales、marketing 與 customer service，找出 pain points、goals、behaviors、objections、questions 與既有 campaign signals。"
          }
        },
        {
          "step": {
            "en": "2",
            "zh": "2"
          },
          "title": {
            "en": "Customer conversations",
            "zh": "Customer conversations"
          },
          "body": {
            "en": "Interview people who bought your solution, people who bought nothing, and people who bought from competitors.",
            "zh": "訪談已購買者、誰都不買者，以及購買競爭者方案的人。"
          }
        },
        {
          "step": {
            "en": "3",
            "zh": "3"
          },
          "title": {
            "en": "Synthesis and writing",
            "zh": "Synthesis and writing"
          },
          "body": {
            "en": "Combine qualitative interviews with hard data from web tools, keywords, engagement, email, and buying intent signals.",
            "zh": "結合質化訪談，以及 web tools、keywords、engagement、email 與 buying intent signals 等硬資料。"
          }
        }
      ],
      "interviewCategories": [
        {
          "category": {
            "en": "Demographic",
            "zh": "Demographic"
          },
          "focus": {
            "en": "Marital status, income, location, home ownership, gender, age, children",
            "zh": "婚姻、收入、地點、自有住宅、性別、年齡、子女"
          }
        },
        {
          "category": {
            "en": "Career",
            "zh": "Career"
          },
          "focus": {
            "en": "Industry, job level, aspirations, tenure, education",
            "zh": "產業、職級、職涯抱負、年資、教育"
          }
        },
        {
          "category": {
            "en": "Daily life",
            "zh": "Daily life"
          },
          "focus": {
            "en": "Typical day, work and home split, leisure, vehicles, media habits",
            "zh": "典型一天、工作與家庭比例、休閒、車輛、媒體習慣"
          }
        },
        {
          "category": {
            "en": "Consumer habits",
            "zh": "Consumer habits"
          },
          "focus": {
            "en": "Learning channels, online and offline resources, shopping preferences, vendor interaction, recommendations, deal sensitivity, devices",
            "zh": "學習管道、線上與線下資源、購物偏好、與廠商互動偏好、推薦來源、價格敏感度、裝置"
          }
        },
        {
          "category": {
            "en": "Pain points",
            "zh": "Pain points"
          },
          "focus": {
            "en": "Frustration, stress, anxiety, anger triggers, regret, worries, pride, bucket list",
            "zh": "挫折、壓力、焦慮、憤怒觸發、後悔、擔憂、自豪、bucket list"
          }
        },
        {
          "category": {
            "en": "Industry specific",
            "zh": "Industry specific"
          },
          "focus": {
            "en": "Industry challenges, value drivers, preferred sales experience, objections, common questions",
            "zh": "產業挑戰、價值驅動、偏好銷售體驗、反對理由、常見問題"
          }
        }
      ]
    },
    {
      "id": "profile-advanced",
      "kicker": {
        "en": "Persona profile and variants",
        "zh": "Persona profile 與進階類型"
      },
      "title": {
        "en": "A usable persona must be specific enough to guide content and measurement",
        "zh": "可用的 persona 必須具體到足以指導內容與衡量"
      },
      "summary": {
        "en": "The point is not to write a cute profile. The point is to make marketing, sales, support, and product decisions more precise.",
        "zh": "重點不是寫一個可愛人物設定，而是讓 marketing、sales、support 與 product decisions 更精準。"
      },
      "type": "profile",
      "profileFields": [
        {
          "field": {
            "en": "Name",
            "zh": "Name"
          },
          "detail": {
            "en": "A descriptive name that helps the team remember the customer logic.",
            "zh": "描述性名稱，用來幫助團隊記住顧客邏輯。"
          }
        },
        {
          "field": {
            "en": "Description",
            "zh": "Description"
          },
          "detail": {
            "en": "Demographics plus behavioral narrative: daily life, challenges, purchase behavior, and relevant context.",
            "zh": "Demographics 加上行為敘事，包含日常生活、挑戰、購買行為與相關情境。"
          }
        },
        {
          "field": {
            "en": "Image",
            "zh": "Image"
          },
          "detail": {
            "en": "Optional visual representation. Useful only if it clarifies rather than stereotypes.",
            "zh": "可選的代表圖像。只有在有助於理解且不造成刻板化時才有價值。"
          }
        },
        {
          "field": {
            "en": "Identifiers",
            "zh": "Identifiers"
          },
          "detail": {
            "en": "Traits that help marketers or sales teams recognize the persona quickly.",
            "zh": "協助行銷或銷售團隊快速辨識 persona 的特徵。"
          }
        }
      ],
      "advanced": [
        {
          "type": {
            "en": "Customer persona",
            "zh": "Customer persona"
          },
          "use": {
            "en": "Explains what drives people after conversion, supporting retention, loyalty, and advocacy.",
            "zh": "解釋顧客轉換後的驅動因素，支援 retention、loyalty 與 advocacy。"
          }
        },
        {
          "type": {
            "en": "Negative persona",
            "zh": "Negative persona"
          },
          "use": {
            "en": "Identifies prospects who drain time, money, morale, or reputation, reducing cost per lead and cost per customer.",
            "zh": "辨識會消耗時間、金錢、士氣或聲譽的 prospects，降低 cost per lead 與 cost per customer。"
          }
        },
        {
          "type": {
            "en": "Micro persona",
            "zh": "Micro persona"
          },
          "use": {
            "en": "A subset of one macro persona, often separated by communication preference, technology adoption, life stage, or tactical responsibility.",
            "zh": "屬於單一 macro persona 的子類型，常依溝通偏好、技術接受度、人生階段或執行責任區分。"
          }
        }
      ]
    },
    {
      "id": "course-frameworks",
      "kicker": {
        "en": "Class 01 connection",
        "zh": "Class 01 連結"
      },
      "title": {
        "en": "Personas and journey maps plug directly into core marketing strategy",
        "zh": "Persona 與 journey map 直接連到核心行銷策略"
      },
      "summary": {
        "en": "Class 01 is not separate background reading. It supplies the strategy language used to turn Class 02 into project work.",
        "zh": "Class 01 不是獨立背景閱讀，而是提供把 Class 02 轉成作業成果的策略語言。"
      },
      "type": "frameworks",
      "rows": [
        {
          "framework": {
            "en": "Two Questions",
            "zh": "Two Questions"
          },
          "connection": {
            "en": "Persona answers who the target market is. Journey clarifies where the value proposition must be delivered.",
            "zh": "Persona 回答 target market 是誰，journey 釐清 value proposition 要在哪些接觸點被交付。"
          }
        },
        {
          "framework": {
            "en": "STP",
            "zh": "STP"
          },
          "connection": {
            "en": "Persona sharpens segmentation and targeting. Journey supports positioning through stage specific experience design.",
            "zh": "Persona 強化 segmentation 與 targeting，journey 透過分階段體驗設計支援 positioning。"
          }
        },
        {
          "framework": {
            "en": "CLV",
            "zh": "CLV"
          },
          "connection": {
            "en": "Post Purchase turns retention, repeat purchase, and referrals into explicit marketing work.",
            "zh": "Post Purchase 把留存、回購與推薦變成明確的行銷工作。"
          }
        },
        {
          "framework": {
            "en": "4Ps",
            "zh": "4Ps"
          },
          "connection": {
            "en": "Product becomes the full experience. Promotion becomes stage specific communication. Place becomes channel and accessibility design.",
            "zh": "Product 變成完整體驗，Promotion 變成分階段溝通，Place 變成通路與可及性設計。"
          }
        },
        {
          "framework": {
            "en": "Funnel",
            "zh": "Funnel"
          },
          "connection": {
            "en": "Funnel is the conversion focused simplification of the journey. It is not the opposite of journey mapping.",
            "zh": "Funnel 是偏 conversion 的 journey 簡化版，不是 journey map 的對立面。"
          }
        },
        {
          "framework": {
            "en": "SWOT",
            "zh": "SWOT"
          },
          "connection": {
            "en": "Persona findings must be classified before entering SWOT: internal capabilities become strengths or weaknesses, external market conditions become opportunities or threats.",
            "zh": "Persona 訪談發現不能直接丟進 SWOT，必須先分類。內部能力是 strengths 或 weaknesses，外部市場條件是 opportunities 或 threats。"
          }
        }
      ]
    },
    {
      "id": "project-application",
      "kicker": {
        "en": "Course execution",
        "zh": "課程執行"
      },
      "title": {
        "en": "Class 02 should immediately improve the project system",
        "zh": "Class 02 應直接改善作業系統"
      },
      "summary": {
        "en": "The strongest use of today’s reading is not another theory note. It is a working bridge from persona and journey mapping to deliverables, experiments, screenshots, and metrics.",
        "zh": "今天閱讀最有價值的用途不是再寫一份理論筆記，而是建立從 persona 與 journey map 到作業、實驗、截圖與數據的工作橋梁。"
      },
      "type": "projects",
      "projects": [
        {
          "name": {
            "en": "Instagram Project",
            "zh": "Instagram Project"
          },
          "status": {
            "en": "Late Night Zoo with capybara as the late night comfort character, including Tiny Problem Lab as a recurring series.",
            "zh": "Late Night Zoo，以 capybara 作為深夜舒壓主角，並以 Tiny Problem Lab 作為固定子系列。"
          },
          "actions": [
            {
              "en": "Primary persona: Late Night Lurker Mia",
              "zh": "主 persona：Late Night Lurker Mia"
            },
            {
              "en": "Post at least 5 times per week",
              "zh": "每週至少發 5 則"
            },
            {
              "en": "Suggested mix: Reels 60 percent, carousel 30 percent, single image 10 percent",
              "zh": "建議比例：Reels 60%、carousel 30%、單張貼文 10%"
            },
            {
              "en": "Run one experiment, preferably posting time or Reels hook type",
              "zh": "執行一項實驗，優先選發文時段或 Reels 開頭 hook 類型"
            }
          ],
          "metrics": {
            "en": "Reach, profile visits, follows, saves, shares, story replies",
            "zh": "Reach、profile visits、follows、saves、shares、story replies"
          }
        },
        {
          "name": {
            "en": "Meta Ads Project",
            "zh": "Meta Ads Project"
          },
          "status": {
            "en": "Use Meta Ads to promote the blog post with a $30 budget and a clear A/B test.",
            "zh": "用 Meta Ads 推廣 blog post，預算 $30，並設計清楚的 A/B test。"
          },
          "actions": [
            {
              "en": "Choose one main variable: audience or creative is more useful than placement or CTA under a small budget",
              "zh": "選一個主變數：小預算下 audience 或 creative 通常比 placement 或 CTA 更有判讀價值"
            },
            {
              "en": "Do not mix audience and creative unless the test cells are clearly separated",
              "zh": "除非 test cells 清楚分開，否則不要同時混測 audience 與 creative"
            },
            {
              "en": "Launch by May 22 or May 23 to preserve time for learning and analysis",
              "zh": "5 月 22 或 23 日前上線，以保留學習與分析時間"
            }
          ],
          "metrics": {
            "en": "CTR, CPC, landing page views, engagement, directional conversion signal",
            "zh": "CTR、CPC、landing page views、engagement、方向性 conversion signal"
          }
        },
        {
          "name": {
            "en": "Blog Post Project",
            "zh": "Blog Post Project"
          },
          "status": {
            "en": "Recommended topic: comparing AI writing tools for MBA students, with v1.0 shaped for Meta Ads and v2.0 improved for search intent, SEO, AIO, and GEO.",
            "zh": "建議主題：MBA 學生 AI 寫作工具比較。v1.0 配合 Meta Ads，v2.0 改進 search intent、SEO、AIO 與 GEO。"
          },
          "actions": [
            {
              "en": "Select one persona and one stage for v1.0",
              "zh": "v1.0 只鎖定一個 persona 與一個 stage"
            },
            {
              "en": "Likely best starting point: first year MBA students under heavy coursework load",
              "zh": "較佳起點：課業負擔重的一年級 MBA 學生"
            },
            {
              "en": "Use long tail keyword logic rather than a generic AI tools article",
              "zh": "使用 long tail keyword 邏輯，不寫泛泛的 AI tools 文章"
            }
          ],
          "metrics": {
            "en": "Organic relevance, paid social fit, time on page, CTA clarity",
            "zh": "Organic relevance、paid social fit、time on page、CTA clarity"
          }
        },
        {
          "name": {
            "en": "Team Project Proposal",
            "zh": "Team Project Proposal"
          },
          "status": {
            "en": "Short professional slide deck defining company, scope, customer hypothesis, journey hypothesis, audit focus, and next quarter direction.",
            "zh": "短而專業的簡報，界定公司、scope、customer hypothesis、journey hypothesis、audit focus 與下一季方向。"
          },
          "actions": [
            {
              "en": "Choose a company with a strong but analyzable digital footprint",
              "zh": "選擇數位足跡夠強但仍可分析的公司"
            },
            {
              "en": "Avoid companies that are too large to say anything original or too small to audit",
              "zh": "避免大到難以提出原創判斷，或小到沒有足夠 digital footprint 的公司"
            },
            {
              "en": "Each recommendation later should specify persona, stage, channel, content or feature, and KPI",
              "zh": "後續每項 recommendation 都應明確說明 persona、stage、channel、content 或 feature，以及 KPI"
            }
          ],
          "metrics": {
            "en": "Feasibility for Q3, strategic fit, source support, clarity",
            "zh": "Q3 可行性、策略契合度、來源支持、清楚度"
          }
        }
      ]
    },
    {
      "id": "templates",
      "kicker": {
        "en": "Reusable templates",
        "zh": "可重複使用模板"
      },
      "title": {
        "en": "Use these tables before writing deliverables",
        "zh": "寫作業前先使用這些表格"
      },
      "summary": {
        "en": "These templates reduce vague thinking. Fill the rows first, then turn them into slides, captions, ads, or a blog outline.",
        "zh": "這些模板可降低空泛思考。先填完表格，再轉成簡報、caption、廣告或 blog outline。"
      },
      "type": "templates",
      "personaTemplate": [
        {
          "field": {
            "en": "Persona name",
            "zh": "Persona name"
          },
          "guide": {
            "en": "Short descriptive name, not a generic SmartBug style clone.",
            "zh": "簡短描述性名稱，不要直接複製 SmartBug 風格。"
          }
        },
        {
          "field": {
            "en": "Segment logic",
            "zh": "Segment logic"
          },
          "guide": {
            "en": "Why this group is strategically similar.",
            "zh": "為甚麼這群人在策略上相似。"
          }
        },
        {
          "field": {
            "en": "Demographics",
            "zh": "Demographics"
          },
          "guide": {
            "en": "Age, location, education, income, family context if relevant.",
            "zh": "年齡、地點、教育、收入、家庭情境，視需要使用。"
          }
        },
        {
          "field": {
            "en": "Psychographics",
            "zh": "Psychographics"
          },
          "guide": {
            "en": "Values, lifestyle, identity, personality, and emotional drivers.",
            "zh": "價值觀、生活方式、身份認同、個性與情緒驅動。"
          }
        },
        {
          "field": {
            "en": "Behavior",
            "zh": "Behavior"
          },
          "guide": {
            "en": "Search, click, view, save, purchase, channel, device, and timing behavior.",
            "zh": "搜尋、點擊、觀看、儲存、購買、通路、裝置與時間行為。"
          }
        },
        {
          "field": {
            "en": "Motivation",
            "zh": "Motivation"
          },
          "guide": {
            "en": "The job the customer is trying to complete.",
            "zh": "顧客想完成的任務。"
          }
        },
        {
          "field": {
            "en": "Pain points",
            "zh": "Pain points"
          },
          "guide": {
            "en": "Friction, worry, stress, delay, or unmet need.",
            "zh": "阻力、擔憂、壓力、延遲或未被滿足的需求。"
          }
        },
        {
          "field": {
            "en": "Objections",
            "zh": "Objections"
          },
          "guide": {
            "en": "Why this person may not convert, follow, buy, or trust.",
            "zh": "為甚麼此人可能不轉換、不追蹤、不購買或不信任。"
          }
        },
        {
          "field": {
            "en": "Preferred content",
            "zh": "Preferred content"
          },
          "guide": {
            "en": "Format, tone, length, and depth.",
            "zh": "形式、語氣、長度與深度。"
          }
        },
        {
          "field": {
            "en": "Preferred CTA",
            "zh": "Preferred CTA"
          },
          "guide": {
            "en": "The action this person is most likely to accept.",
            "zh": "此人最可能接受的行動呼籲。"
          }
        },
        {
          "field": {
            "en": "KPI",
            "zh": "KPI"
          },
          "guide": {
            "en": "Metric that proves the persona hypothesis is working.",
            "zh": "用來證明 persona 假設是否有效的指標。"
          }
        }
      ],
      "journeyRows": [
        {
          "stage": {
            "en": "Awareness",
            "zh": "Awareness"
          },
          "action": {
            "en": "First recognizes a problem",
            "zh": "初次發現問題"
          },
          "emotion": {
            "en": "Curious, worried, confused",
            "zh": "好奇、擔憂、困惑"
          },
          "touchpoint": {
            "en": "Social, search, blog, short video",
            "zh": "Social、search、blog、短影音"
          },
          "content": {
            "en": "Educational content and checklist",
            "zh": "教育型內容與 checklist"
          },
          "friction": {
            "en": "Low trust",
            "zh": "低信任"
          },
          "opportunity": {
            "en": "Clarify the problem",
            "zh": "釐清問題"
          },
          "kpi": {
            "en": "Impressions, reach, CTR",
            "zh": "Impressions、reach、CTR"
          }
        },
        {
          "stage": {
            "en": "Consideration",
            "zh": "Consideration"
          },
          "action": {
            "en": "Compares solution paths",
            "zh": "比較解法"
          },
          "emotion": {
            "en": "Evaluative, cautious",
            "zh": "評估、謹慎"
          },
          "touchpoint": {
            "en": "Blog, FAQ, comparison page, webinar",
            "zh": "Blog、FAQ、比較頁、webinar"
          },
          "content": {
            "en": "Comparison guide and case study",
            "zh": "比較指南與 case study"
          },
          "friction": {
            "en": "Too many options",
            "zh": "選項太多"
          },
          "opportunity": {
            "en": "Build credibility",
            "zh": "建立可信度"
          },
          "kpi": {
            "en": "Time on page, email signup",
            "zh": "Time on page、email signup"
          }
        },
        {
          "stage": {
            "en": "Decision",
            "zh": "Decision"
          },
          "action": {
            "en": "Chooses provider or action",
            "zh": "做出選擇"
          },
          "emotion": {
            "en": "Urgent, skeptical, ready",
            "zh": "急迫、懷疑、就緒"
          },
          "touchpoint": {
            "en": "Landing page, review, trial",
            "zh": "Landing page、review、trial"
          },
          "content": {
            "en": "Demo, testimonial, transparent pricing",
            "zh": "Demo、testimonial、透明價格"
          },
          "friction": {
            "en": "Price, trust, risk",
            "zh": "價格、信任、風險"
          },
          "opportunity": {
            "en": "Lower uncertainty",
            "zh": "降低不確定"
          },
          "kpi": {
            "en": "Conversion rate, leads",
            "zh": "Conversion rate、leads"
          }
        },
        {
          "stage": {
            "en": "Post Purchase",
            "zh": "Post Purchase"
          },
          "action": {
            "en": "Uses, evaluates, returns or refers",
            "zh": "使用、評估、回流或推薦"
          },
          "emotion": {
            "en": "Satisfied, disappointed, loyal, frustrated",
            "zh": "滿意、失望、忠誠、挫折"
          },
          "touchpoint": {
            "en": "Email, support, app, community",
            "zh": "Email、support、app、社群"
          },
          "content": {
            "en": "Onboarding, survey, referral",
            "zh": "Onboarding、survey、referral"
          },
          "friction": {
            "en": "Poor follow up",
            "zh": "後續跟進不佳"
          },
          "opportunity": {
            "en": "Retention and advocacy",
            "zh": "Retention 與 advocacy"
          },
          "kpi": {
            "en": "Repeat purchase, referral, retention",
            "zh": "回購、推薦、留存"
          }
        }
      ]
    },
    {
      "id": "errors",
      "kicker": {
        "en": "Quality control",
        "zh": "品質控管"
      },
      "title": {
        "en": "Common mistakes to remove before submission",
        "zh": "交件前必須移除的常見錯誤"
      },
      "summary": {
        "en": "The course allows AI, but the work must not look careless, generic, or unsupported. These checks are more useful than another round of theory polishing.",
        "zh": "本課允許使用 AI，但成品不能看起來粗糙、空泛或無來源支持。這些檢核比再打一輪理論筆記更有用。"
      },
      "type": "errors",
      "errors": [
        {
          "mistake": {
            "en": "Targeting everyone",
            "zh": "目標是所有人"
          },
          "harm": {
            "en": "No channel, message, or CTA can be meaningfully optimized.",
            "zh": "通路、訊息與 CTA 都無法有效優化。"
          },
          "fix": {
            "en": "Define one primary persona first.",
            "zh": "先定義一個主 persona。"
          }
        },
        {
          "mistake": {
            "en": "Persona equals age plus gender",
            "zh": "Persona 等於年齡加性別"
          },
          "harm": {
            "en": "Too shallow to guide content, objections, and media behavior.",
            "zh": "太淺，無法指導內容、反對理由與媒體行為。"
          },
          "fix": {
            "en": "Add motivation, pain points, behavior, and objections.",
            "zh": "加入 motivation、pain points、behavior 與 objections。"
          }
        },
        {
          "mistake": {
            "en": "Journey map only lists steps",
            "zh": "Journey map 只列步驟"
          },
          "harm": {
            "en": "It becomes a process chart, not a customer experience tool.",
            "zh": "它會變成流程圖，而不是顧客體驗工具。"
          },
          "fix": {
            "en": "Add emotion, touchpoint, friction, content, and opportunity.",
            "zh": "加入 emotion、touchpoint、friction、content 與 opportunity。"
          }
        },
        {
          "mistake": {
            "en": "Same content at every stage",
            "zh": "每個階段都用同樣內容"
          },
          "harm": {
            "en": "The content does not match changing intent.",
            "zh": "內容無法對應顧客意圖變化。"
          },
          "fix": {
            "en": "Map content to Awareness, Consideration, Decision, and Post Purchase.",
            "zh": "將內容對應到 Awareness、Consideration、Decision 與 Post Purchase。"
          }
        },
        {
          "mistake": {
            "en": "Ignoring Post Purchase",
            "zh": "忽略 Post Purchase"
          },
          "harm": {
            "en": "Retention, advocacy, and CLV disappear from the plan.",
            "zh": "留存、推薦與 CLV 會從計畫中消失。"
          },
          "fix": {
            "en": "Add onboarding, survey, referral, support, and return triggers.",
            "zh": "加入 onboarding、survey、referral、support 與回流觸發。"
          }
        },
        {
          "mistake": {
            "en": "No KPI",
            "zh": "沒有 KPI"
          },
          "harm": {
            "en": "The project cannot prove whether the strategy worked.",
            "zh": "作業無法證明策略是否有效。"
          },
          "fix": {
            "en": "Attach at least one meaningful metric to each stage or tactic.",
            "zh": "每個階段或 tactic 至少綁定一個有意義的指標。"
          }
        },
        {
          "mistake": {
            "en": "Uncited source or AI use",
            "zh": "未引用來源或 AI 使用"
          },
          "harm": {
            "en": "This creates academic integrity and professionalism risk.",
            "zh": "這會造成學術誠信與專業風險。"
          },
          "fix": {
            "en": "Cite readings, data sources, and generative AI use in the final exhibit.",
            "zh": "在最後 exhibit 引用閱讀、資料來源與生成式 AI 使用。"
          }
        }
      ]
    },
    {
      "id": "schedule",
      "kicker": {
        "en": "Execution map",
        "zh": "執行地圖"
      },
      "title": {
        "en": "Class 02 work should feed the next four deadlines",
        "zh": "Class 02 的產出應支援接下來四個截止點"
      },
      "summary": {
        "en": "The timeline shows why the final system should prioritize deliverables over more theory rewriting.",
        "zh": "這條時間線說明為甚麼最終系統應優先支援作業產出，而不是繼續重寫理論。"
      },
      "type": "timeline",
      "events": [
        {
          "date": {
            "en": "May 11",
            "zh": "5 月 11 日"
          },
          "title": {
            "en": "Class 02",
            "zh": "第二堂課"
          },
          "detail": {
            "en": "Customer journeys, buyer personas, Meta Ads. Survey 1 due.",
            "zh": "Customer journeys、buyer personas、Meta Ads。Survey 1 due。"
          }
        },
        {
          "date": {
            "en": "May 13",
            "zh": "5 月 13 日"
          },
          "title": {
            "en": "Social campaign starts",
            "zh": "Social campaign 開始"
          },
          "detail": {
            "en": "Instagram account starts posting after planning.",
            "zh": "Instagram 帳號在規劃後開始發文。"
          }
        },
        {
          "date": {
            "en": "May 20",
            "zh": "5 月 20 日"
          },
          "title": {
            "en": "Team proposal due",
            "zh": "Team proposal due"
          },
          "detail": {
            "en": "Company scope, preliminary customer logic, initial digital strategy framing.",
            "zh": "公司 scope、初步顧客邏輯、初步數位策略架構。"
          }
        },
        {
          "date": {
            "en": "May 27",
            "zh": "5 月 27 日"
          },
          "title": {
            "en": "Meta Ads and Blog v1.0",
            "zh": "Meta Ads 與 Blog v1.0"
          },
          "detail": {
            "en": "Paid social test and first blog submission.",
            "zh": "Paid social test 與第一版 blog 交件。"
          }
        },
        {
          "date": {
            "en": "June 8",
            "zh": "6 月 8 日"
          },
          "title": {
            "en": "Social media project and digital audit",
            "zh": "Social media project 與 digital audit"
          },
          "detail": {
            "en": "Deliver social media findings and the team digital audit.",
            "zh": "提交 social media findings 與團隊 digital audit。"
          }
        },
        {
          "date": {
            "en": "June 10",
            "zh": "6 月 10 日"
          },
          "title": {
            "en": "Google Ads and Blog v2.0",
            "zh": "Google Ads 與 Blog v2.0"
          },
          "detail": {
            "en": "Search traffic, keyword research, SEO, AIO, and GEO improvement.",
            "zh": "Search traffic、keyword research、SEO、AIO 與 GEO 改進。"
          }
        }
      ]
    },
    {
      "id": "source-map",
      "kicker": {
        "en": "Source map",
        "zh": "來源地圖"
      },
      "title": {
        "en": "What each source contributes",
        "zh": "各來源提供甚麼"
      },
      "summary": {
        "en": "Use this when deciding what can be cited as a source fact and what should be labeled as application or inference.",
        "zh": "判斷哪些內容可作為來源事實、哪些應標為應用或推論時，可使用此表。"
      },
      "type": "sources",
      "sources": [
        {
          "source": {
            "en": "SilverTech, Mapping the Customer Journey",
            "zh": "SilverTech, Mapping the Customer Journey"
          },
          "use": {
            "en": "CX versus UX, journey map elements, four stage model, content by stage, onstage and offstage, implementation principles, content gap analysis.",
            "zh": "CX 與 UX、journey map 要素、四階段模型、分階段內容、onstage 與 offstage、實施原則、content gap analysis。"
          }
        },
        {
          "source": {
            "en": "SmartBug, Ultimate Guide to Inbound Marketing Personas",
            "zh": "SmartBug, Ultimate Guide to Inbound Marketing Personas"
          },
          "use": {
            "en": "Persona definition, what is not a persona, build process, interview categories, profile elements, advanced personas, KPI alignment, maintenance.",
            "zh": "Persona 定義、甚麼不是 persona、建構流程、訪談類別、profile 元素、進階 personas、KPI 對應、維護。"
          }
        },
        {
          "source": {
            "en": "Class 01 Marketing Basics Revisited",
            "zh": "Class 01 Marketing Basics Revisited"
          },
          "use": {
            "en": "Two Questions, STP, CLV, 4Ps, SWOT, funnel, A/B test, automation, channel, content, CRM, KPI, paid, owned, earned, SEO, AIO, GEO.",
            "zh": "Two Questions、STP、CLV、4Ps、SWOT、funnel、A/B test、automation、channel、content、CRM、KPI、paid、owned、earned、SEO、AIO、GEO。"
          }
        },
        {
          "source": {
            "en": "MKTG 6222 syllabus and Class 01 overview",
            "zh": "MKTG 6222 syllabus 與 Class 01 overview"
          },
          "use": {
            "en": "Project structure, deadlines, grading logic, AI citation policy, source citation expectations, and professional slide standards.",
            "zh": "作業結構、截止日、評分邏輯、AI 引用政策、來源引用要求與專業簡報標準。"
          }
        },
        {
          "source": {
            "en": "User integrated notes and decision memo",
            "zh": "使用者整合筆記與決策備忘錄"
          },
          "use": {
            "en": "Consolidated Class 02 application logic, IG persona draft, project priorities, and immediate action sequence.",
            "zh": "整合後的 Class 02 應用邏輯、IG persona 草稿、作業優先順序與立即行動順序。"
          }
        }
      ]
    }
  ]
};

const MODE_ORDER = ["en", "zh", "bi"];
const MODE_LABEL = { en: "EN", zh: "中文", bi: "雙語" };

function t(value, mode) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (mode === "zh") return value.zh || value.en || "";
  return value.en || value.zh || "";
}

function DualText({ value, mode, className = "" }) {
  if (!value) return null;
  if (mode === "bi") {
    return (
      <span className={`dual-text ${className}`}>
        <span>{value.en}</span>
        <span className="zh-line">{value.zh}</span>
      </span>
    );
  }
  return <span className={className}>{t(value, mode)}</span>;
}

function InlineText({ en, zh, mode, className = "" }) {
  return <DualText value={{ en, zh }} mode={mode} className={className} />;
}

function bilingualLabel(en, zh, mode) {
  if (mode === "zh") return zh;
  if (mode === "bi") return `${en}｜${zh}`;
  return en;
}

function Tag({ tag, mode }) {
  const item = DATA.sourceLegend.find((x) => x.tag === tag);
  if (!item) return null;
  return <span className="source-tag"><DualText value={{ en: item.tag, zh: item.zhTag }} mode={mode} /></span>;
}

function Icon({ name }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    map: <><path d="M4 6.5l5-2 6 2 5-2v13l-5 2-6-2-5 2z"/><path d="M9 4.5v13"/><path d="M15 6.5v13"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4.5 20c1.8-4 5-6 7.5-6s5.7 2 7.5 6"/></>,
    chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l3-4 3 2 4-7"/></>,
    layers: <><path d="M12 3l8 4-8 4-8-4z"/><path d="M4 12l8 4 8-4"/><path d="M4 17l8 4 8-4"/></>,
    spark: <><path d="M12 2v5"/><path d="M12 17v5"/><path d="M4.2 4.2l3.6 3.6"/><path d="M16.2 16.2l3.6 3.6"/><path d="M2 12h5"/><path d="M17 12h5"/><path d="M4.2 19.8l3.6-3.6"/><path d="M16.2 7.8l3.6-3.6"/></>,
    check: <><path d="M20 6L9 17l-5-5"/></>,
  };
  return <svg {...common}>{paths[name] || paths.map}</svg>;
}

function Header({ mode, setMode, query, setQuery }) {
  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div>
          <p className="eyebrow"><DualText value={DATA.meta.courseLine} mode={mode} /></p>
          <h1><DualText value={DATA.meta.title} mode={mode} /></h1>
          <h2><DualText value={DATA.meta.subtitle} mode={mode} /></h2>
          <p className="hero-thesis"><DualText value={DATA.meta.thesis} mode={mode} /></p>
        </div>
        <aside className="hero-card">
          <div className="hero-card-top"><Icon name="layers" /><span><InlineText en="Study map" zh="學習地圖" mode={mode} /></span></div>
          <div className="metric-row"><strong>3</strong><span><InlineText en="Source layers" zh="來源層" mode={mode} /></span></div>
          <div className="metric-row"><strong>4</strong><span><InlineText en="Journey stages" zh="旅程階段" mode={mode} /></span></div>
          <div className="metric-row"><strong>6</strong><span><InlineText en="Interview categories" zh="訪談類別" mode={mode} /></span></div>
          <div className="metric-row"><strong>5+</strong><span><InlineText en="Project outputs" zh="作業輸出" mode={mode} /></span></div>
        </aside>
      </div>
      <div className="control-strip" aria-label="reader controls">
        <label className="search-box">
          <span><InlineText en="Search sections" zh="搜尋章節" mode={mode} /></span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={bilingualLabel("e.g., persona, Meta, KPI", "例如 persona、Meta、KPI", mode)} />
        </label>
        <div className="mode-pills">
          {MODE_ORDER.map((item) => (
            <button key={item} className={item === mode ? "active" : ""} onClick={() => setMode(item)}>{MODE_LABEL[item]}</button>
          ))}
        </div>
      </div>
    </header>
  );
}

function Nav({ sections, mode }) {
  const summary = [
    { en: "Persona defines who the strategy serves.", zh: "Persona 定義策略服務誰。" },
    { en: "Journey mapping shows how the experience unfolds.", zh: "Journey map 說明體驗如何展開。" },
    { en: "Funnel, KPI, and A/B testing turn the map into execution.", zh: "Funnel、KPI 與 A/B testing 把地圖轉成執行。" },
  ];
  return (
    <nav className="side-nav" aria-label="section navigation">
      <a href="#top" className="nav-title"><InlineText en="Class 02" zh="第二堂課" mode={mode} /></a>
      <div className="sticky-summary" aria-label="summary">
        <strong><InlineText en="Core takeaway" zh="核心重點" mode={mode} /></strong>
        {summary.map((item) => <p key={item.en}><DualText value={item} mode={mode} /></p>)}
      </div>
      <div className="nav-links">{sections.map((s) => <a key={s.id} href={`#${s.id}`}><DualText value={s.title} mode={mode} /></a>)}</div>
    </nav>
  );
}

function SectionShell({ section, mode, children }) {
  return (
    <section id={section.id} className="section-card">
      <div className="section-heading">
        <p className="eyebrow"><DualText value={section.kicker} mode={mode} /></p>
        <h3><DualText value={section.title} mode={mode} /></h3>
        <p><DualText value={section.summary} mode={mode} /></p>
      </div>
      {children}
    </section>
  );
}

function LogicView({ section, mode }) {
  return <div className="logic-grid">{section.items.map((item, idx) => (
    <div className="logic-card" key={idx}>
      <div className="logic-icon"><Icon name={idx === 0 ? "user" : idx === 1 ? "map" : "chart"} /></div>
      <p className="logic-label"><DualText value={item.label} mode={mode} /></p>
      <h4><DualText value={item.title} mode={mode} /></h4>
      <p><DualText value={item.body} mode={mode} /></p>
      <Tag tag={item.tag} mode={mode} />
    </div>
  ))}</div>;
}

function LegendView({ mode }) {
  return <div className="legend-grid">{DATA.sourceLegend.map((item) => (
    <div className="legend-card" key={item.tag}>
      <span className="source-tag"><DualText value={{ en: item.tag, zh: item.zhTag }} mode={mode} /></span>
      <p><DualText value={{ en: item.en, zh: item.zh }} mode={mode} /></p>
    </div>
  ))}</div>;
}

function CxUxView({ section, mode }) {
  return (
    <div className="cx-layout">
      <div className="venn-card">
        <div className="cx-circle"><span>CX</span><div className="ux-circle"><span>UX</span></div></div>
        <div className="venn-notes">
          <p><strong>CX</strong> <InlineText en="includes service, advertising, brand reputation, sales process, pricing fairness, delivery, and UX." zh="包含 service、advertising、brand reputation、sales process、pricing fairness、delivery 與 UX。" mode={mode} /></p>
          <p><strong>UX</strong> <InlineText en="includes usability, interaction design, visual design, information architecture, content strategy, and user research." zh="包含 usability、interaction design、visual design、information architecture、content strategy 與 user research。" mode={mode} /></p>
        </div>
      </div>
      <div className="case-table">{section.cases.map((c, idx) => (
        <div className="case-row" key={idx}>
          <div><strong><DualText value={c.situation} mode={mode} /></strong><p><DualText value={c.lesson} mode={mode} /></p></div>
          <span className={c.ux.en === "Strong" ? "score good" : "score bad"}>UX: <DualText value={c.ux} mode={mode} /></span>
          <span className={c.cx.en === "Strong" ? "score good" : "score bad"}>CX: <DualText value={c.cx} mode={mode} /></span>
        </div>
      ))}</div>
    </div>
  );
}

function CardsView({ section, mode }) {
  return <div className="cards-grid">{section.cards.map((card, idx) => (
    <div className="mini-card" key={idx}>
      <div className="mini-index">{String(idx + 1).padStart(2, "0")}</div>
      <h4><DualText value={card.title} mode={mode} /></h4>
      <p><DualText value={card.body} mode={mode} /></p>
      <Tag tag={card.tag} mode={mode} />
    </div>
  ))}</div>;
}

function StagesView({ section, mode }) {
  return (
    <div>
      <div className="stage-flow">{section.stages.map((s, idx) => (
        <div className="stage-card" key={s.stage.en}>
          <div className="stage-number">{idx + 1}</div>
          <h4><DualText value={s.stage} mode={mode} /></h4>
          <p className="mindset"><DualText value={s.mindset} mode={mode} /></p>
          <dl>
            <dt><InlineText en="Content" zh="內容" mode={mode} /></dt><dd><DualText value={s.content} mode={mode} /></dd>
            <dt><InlineText en="Emotion" zh="情緒" mode={mode} /></dt><dd><DualText value={s.emotion} mode={mode} /></dd>
            <dt>KPI</dt><dd><DualText value={s.kpi} mode={mode} /></dd>
          </dl>
        </div>
      ))}</div>
      <div className="nonlinear-note"><Icon name="spark" /><p><InlineText en="Reading point: the four stages are a usability device. Real customers may skip stages or restart the journey." zh="閱讀重點：四階段只是為了方便使用的表示方式。真實顧客可能跳過階段，也可能重新開始旅程。" mode={mode} /></p></div>
    </div>
  );
}

function EmotionView({ mode }) {
  const labels = mode === "zh" ? ["困惑", "謹慎", "懷疑", "安心", "忠誠"] : mode === "bi" ? ["confused｜困惑", "cautious｜謹慎", "skeptical｜懷疑", "reassured｜安心", "loyal｜忠誠"] : ["confused", "cautious", "skeptical", "reassured", "loyal"];
  return (
    <div className="emotion-panel">
      <svg viewBox="0 0 720 220" role="img" aria-label="emotion curve" className="emotion-svg">
        <path d="M40 160 C140 70, 220 180, 320 120 S500 50, 680 95" />
        {labels.map((label, idx) => <text key={label} x={60 + idx * 150} y={idx % 2 ? 190 : 45}>{label}</text>)}
        {[40, 190, 340, 490, 640].map((x, idx) => <circle key={x} cx={x} cy={idx === 0 ? 160 : idx === 1 ? 118 : idx === 2 ? 128 : idx === 3 ? 78 : 97} r="6" />)}
      </svg>
      <div className="tone-grid">
        <div><strong><InlineText en="Nervous customer" zh="緊張顧客" mode={mode} /></strong><p><InlineText en="Needs reassurance before persuasion." zh="需要 reassurance，先降低風險感。" mode={mode} /></p></div>
        <div><strong><InlineText en="Frustrated customer" zh="挫折顧客" mode={mode} /></strong><p><InlineText en="Needs clarity and speed, not decorative copy." zh="需要 clarity 與速度，不需要華麗文案。" mode={mode} /></p></div>
        <div><strong><InlineText en="Excited customer" zh="興奮顧客" mode={mode} /></strong><p><InlineText en="Can accept more aspirational messaging." zh="可以承受較 aspirational 的訊息。" mode={mode} /></p></div>
      </div>
    </div>
  );
}

function OnstageView({ section, mode }) {
  return <div className="onstage-grid">{section.pairs.map((p, idx) => (
    <div className="onstage-row" key={idx}>
      <div className="onstage-box"><span><InlineText en="Onstage" zh="前臺" mode={mode} /></span><strong><DualText value={p.on} mode={mode} /></strong></div>
      <div className="arrow">→</div>
      <div className="offstage-box"><span><InlineText en="Offstage" zh="後臺" mode={mode} /></span><strong><DualText value={p.off} mode={mode} /></strong></div>
    </div>
  ))}</div>;
}

function PersonaView({ section, mode }) {
  return (
    <div className="persona-layout">
      <div className="persona-core">
        <Icon name="user" />
        <h4><InlineText en="Correct definition" zh="正確定義" mode={mode} /></h4>
        <p><InlineText en="A target customer representation based on research and real customer interviews. It should reveal behavior, motivation, preferences, and objections." zh="以研究與真實顧客訪談建立的 target customer representation。它應揭露行為、動機、偏好與反對理由。" mode={mode} /></p>
      </div>
      <div className="not-grid">{section.notPersona.map((x) => (
        <div className="not-card" key={x.bad.en}>
          <strong><DualText value={x.bad} mode={mode} /></strong>
          <p><DualText value={x.why} mode={mode} /></p>
        </div>
      ))}</div>
    </div>
  );
}

function ProcessView({ section, mode }) {
  return (
    <div>
      <div className="process-flow">{section.steps.map((step) => (
        <div className="process-card" key={step.step.en}>
          <span>{t(step.step, mode)}</span>
          <h4><DualText value={step.title} mode={mode} /></h4>
          <p><DualText value={step.body} mode={mode} /></p>
        </div>
      ))}</div>
      <div className="table-wrap">
        <table><thead><tr><th><InlineText en="Category" zh="類別" mode={mode} /></th><th><InlineText en="Focus" zh="重點" mode={mode} /></th></tr></thead><tbody>
          {section.interviewCategories.map((row) => <tr key={row.category.en}><td><DualText value={row.category} mode={mode} /></td><td><DualText value={row.focus} mode={mode} /></td></tr>)}
        </tbody></table>
      </div>
    </div>
  );
}

function ProfileView({ section, mode }) {
  return <div className="split-two">
    <div className="table-wrap"><h4><InlineText en="Four profile elements" zh="Profile 四要素" mode={mode} /></h4><table><tbody>{section.profileFields.map((row) => <tr key={row.field.en}><td><strong><DualText value={row.field} mode={mode} /></strong></td><td><DualText value={row.detail} mode={mode} /></td></tr>)}</tbody></table></div>
    <div className="advanced-list"><h4><InlineText en="Advanced persona types" zh="進階 persona 類型" mode={mode} /></h4>{section.advanced.map((row) => <div key={row.type.en}><strong><DualText value={row.type} mode={mode} /></strong><p><DualText value={row.use} mode={mode} /></p></div>)}</div>
  </div>;
}

function FrameworksView({ section, mode }) {
  return <div className="framework-grid">{section.rows.map((row) => (
    <div className="framework-row" key={row.framework.en}>
      <strong><DualText value={row.framework} mode={mode} /></strong>
      <p><DualText value={row.connection} mode={mode} /></p>
    </div>
  ))}</div>;
}

function ProjectsView({ section, mode }) {
  return <div className="project-grid">{section.projects.map((project) => (
    <article className="project-card" key={project.name.en}>
      <h4><DualText value={project.name} mode={mode} /></h4>
      <p><DualText value={project.status} mode={mode} /></p>
      <ul>{project.actions.map((a, idx) => <li key={idx}><DualText value={a} mode={mode} /></li>)}</ul>
      <div className="metric-note"><strong><InlineText en="KPI" zh="指標" mode={mode} /></strong><span><DualText value={project.metrics} mode={mode} /></span></div>
    </article>
  ))}</div>;
}

function TemplatesView({ section, mode }) {
  return (
    <div className="templates-grid">
      <div className="table-wrap"><h4><InlineText en="Persona template" zh="Persona 模板" mode={mode} /></h4><table><thead><tr><th><InlineText en="Field" zh="欄位" mode={mode} /></th><th><InlineText en="Guide" zh="說明" mode={mode} /></th></tr></thead><tbody>{section.personaTemplate.map((row) => <tr key={row.field.en}><td><DualText value={row.field} mode={mode} /></td><td><DualText value={row.guide} mode={mode} /></td></tr>)}</tbody></table></div>
      <div className="table-wrap"><h4><InlineText en="Journey map template" zh="Journey map 模板" mode={mode} /></h4><table className="journey-template"><thead><tr>{[{en:"Stage",zh:"階段"},{en:"Action",zh:"行動"},{en:"Emotion",zh:"情緒"},{en:"Touchpoint",zh:"接觸點"},{en:"Content",zh:"內容"},{en:"Friction",zh:"阻力"},{en:"Opportunity",zh:"機會"},{en:"KPI",zh:"指標"}].map((h) => <th key={h.en}><DualText value={h} mode={mode} /></th>)}</tr></thead><tbody>{section.journeyRows.map((row) => <tr key={row.stage.en}><td><DualText value={row.stage} mode={mode} /></td><td><DualText value={row.action} mode={mode} /></td><td><DualText value={row.emotion} mode={mode} /></td><td><DualText value={row.touchpoint} mode={mode} /></td><td><DualText value={row.content} mode={mode} /></td><td><DualText value={row.friction} mode={mode} /></td><td><DualText value={row.opportunity} mode={mode} /></td><td><DualText value={row.kpi} mode={mode} /></td></tr>)}</tbody></table></div>
    </div>
  );
}

function ErrorsView({ section, mode }) {
  return <div className="table-wrap"><table><thead><tr><th><InlineText en="Mistake" zh="錯誤" mode={mode} /></th><th><InlineText en="Why it hurts" zh="危害" mode={mode} /></th><th><InlineText en="Fix" zh="修正" mode={mode} /></th></tr></thead><tbody>{section.errors.map((row) => <tr key={row.mistake.en}><td><DualText value={row.mistake} mode={mode} /></td><td><DualText value={row.harm} mode={mode} /></td><td><DualText value={row.fix} mode={mode} /></td></tr>)}</tbody></table></div>;
}

function TimelineView({ section, mode }) {
  return <div className="timeline">{section.events.map((event) => (
    <div className="timeline-item" key={event.date.en}>
      <div className="timeline-date"><DualText value={event.date} mode={mode} /></div>
      <div><h4><DualText value={event.title} mode={mode} /></h4><p><DualText value={event.detail} mode={mode} /></p></div>
    </div>
  ))}</div>;
}

function SourcesView({ section, mode }) {
  return <div className="source-map">{section.sources.map((source) => (
    <div key={source.source.en}>
      <strong><DualText value={source.source} mode={mode} /></strong>
      <p><DualText value={source.use} mode={mode} /></p>
    </div>
  ))}</div>;
}

function SectionContent({ section, mode }) {
  switch (section.type) {
    case "logic": return <LogicView section={section} mode={mode} />;
    case "legend": return <LegendView mode={mode} />;
    case "cxux": return <CxUxView section={section} mode={mode} />;
    case "cards": return <CardsView section={section} mode={mode} />;
    case "stages": return <StagesView section={section} mode={mode} />;
    case "emotion": return <EmotionView mode={mode} />;
    case "onstage": return <OnstageView section={section} mode={mode} />;
    case "persona": return <PersonaView section={section} mode={mode} />;
    case "process": return <ProcessView section={section} mode={mode} />;
    case "profile": return <ProfileView section={section} mode={mode} />;
    case "frameworks": return <FrameworksView section={section} mode={mode} />;
    case "projects": return <ProjectsView section={section} mode={mode} />;
    case "templates": return <TemplatesView section={section} mode={mode} />;
    case "errors": return <ErrorsView section={section} mode={mode} />;
    case "timeline": return <TimelineView section={section} mode={mode} />;
    case "sources": return <SourcesView section={section} mode={mode} />;
    default: return null;
  }
}

export default function Class02CustomerJourneyInfrastructure() {
  const [mode, setMode] = useState(DATA.meta.defaultMode);
  const [query, setQuery] = useState("");
  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DATA.sections;
    return DATA.sections.filter((section) => JSON.stringify(section).toLowerCase().includes(q));
  }, [query]);

  const cycleMode = () => {
    const next = MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    setMode(next);
  };

  return (
    <div className={`class02-page mode-${mode}`}>
      <style>{styles}</style>
      <Header mode={mode} setMode={setMode} query={query} setQuery={setQuery} />
      <div className="layout">
        <Nav sections={DATA.sections} mode={mode} />
        <main>
          {sections.map((section) => <SectionShell key={section.id} section={section} mode={mode}><SectionContent section={section} mode={mode} /></SectionShell>)}
        </main>
      </div>
      <button className="floating-mode" onClick={cycleMode} aria-label="Toggle language mode">{MODE_LABEL[mode]}</button>
    </div>
  );
}

const styles = `
:root {
  --paper: #FCFAF2;
  --ink: #1f2528;
  --muted: #5f6768;
  --line: rgba(31,37,40,0.13);
  --slate: #2E5C6E;
  --plum: #622954;
  --beni: #D75455;
  --aonibi: #305A56;
  --kinari: #F7E8C3;
  --hai: #828282;
  --white: #fffdf7;
  --shadow: 0 18px 50px rgba(31,37,40,0.08);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }
.class02-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 12% 10%, rgba(98,41,84,0.08), transparent 28%),
    radial-gradient(circle at 88% 3%, rgba(46,92,110,0.10), transparent 24%),
    var(--paper);
  color: var(--ink);
  font-family: Inter, Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.52;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
.mode-zh, .mode-bi { font-family: Inter, Satoshi, "PingFang TC", "Noto Sans CJK TC", "Microsoft JhengHei", sans-serif; }
.hero { max-width: 1220px; margin: 0 auto; padding: 44px 22px 24px; }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 24px; align-items: stretch; }
.eyebrow { margin: 0 0 10px; text-transform: uppercase; letter-spacing: .12em; color: var(--plum); font-size: 12px; font-weight: 800; }
h1 { margin: 0; font-family: Georgia, "Times New Roman", "PingFang TC", serif; font-size: clamp(38px, 6.6vw, 74px); line-height: .96; color: var(--slate); letter-spacing: -.035em; max-width: 14ch; }
h2 { margin: 12px 0 0; font-family: Georgia, "Times New Roman", "PingFang TC", serif; font-size: clamp(23px, 3.3vw, 36px); line-height: 1.08; color: var(--plum); max-width: 24ch; }
.hero-thesis { max-width: 760px; margin: 18px 0 0; font-size: clamp(16px, 1.55vw, 19px); line-height: 1.55; color: var(--ink); }
.hero-card { background: rgba(255,253,247,.76); border: 1px solid var(--line); border-radius: 24px; padding: 18px; box-shadow: var(--shadow); backdrop-filter: blur(16px); }
.hero-card-top { display: flex; align-items: center; gap: 10px; color: var(--plum); font-weight: 800; margin-bottom: 18px; }
.metric-row { display: flex; justify-content: space-between; align-items: baseline; border-top: 1px solid var(--line); padding: 11px 0; gap: 14px; }
.metric-row strong { font-family: Georgia, serif; font-size: 31px; line-height: 1; color: var(--slate); }
.metric-row span { color: var(--muted); text-align: right; }
.control-strip { margin-top: 22px; display: flex; justify-content: space-between; gap: 14px; align-items: end; padding: 12px; border: 1px solid var(--line); background: rgba(255,253,247,.68); border-radius: 20px; }
.search-box { display: grid; gap: 6px; flex: 1; max-width: 540px; color: var(--muted); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }
.search-box input { width: 100%; border: 1px solid var(--line); background: var(--paper); color: var(--ink); border-radius: 14px; padding: 12px 14px; font-size: 15px; outline: none; }
.search-box input:focus { border-color: var(--slate); box-shadow: 0 0 0 4px rgba(46,92,110,.12); }
.mode-pills { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
.mode-pills button, .floating-mode { border: 1px solid var(--line); background: var(--white); color: var(--ink); border-radius: 999px; padding: 10px 14px; font-weight: 800; cursor: pointer; }
.mode-pills button.active { background: var(--slate); color: var(--white); border-color: var(--slate); }
.layout { max-width: 1220px; margin: 0 auto; padding: 0 22px 76px; display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 22px; align-items: start; }
.side-nav { position: sticky; top: 14px; max-height: calc(100vh - 28px); overflow: auto; border: 1px solid var(--line); background: rgba(255,253,247,.78); border-radius: 22px; padding: 12px; box-shadow: var(--shadow); }
.side-nav a { display: block; color: var(--muted); text-decoration: none; padding: 7px 9px; border-radius: 12px; font-size: 12.5px; line-height: 1.28; overflow-wrap: anywhere; }
.side-nav a:hover { background: rgba(46,92,110,.08); color: var(--slate); }
.side-nav .nav-title { color: var(--ink); font-weight: 900; font-size: 14px; margin-bottom: 6px; }
.sticky-summary { margin: 8px 0 10px; padding: 10px; border: 1px solid rgba(98,41,84,.14); border-radius: 14px; background: rgba(98,41,84,.045); }
.sticky-summary strong { display: block; color: var(--plum); font-size: 12px; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 7px; }
.sticky-summary p { color: var(--muted); font-size: 12.5px; line-height: 1.42; margin: 0 0 6px; }
.sticky-summary p:last-child { margin-bottom: 0; }
.nav-links { display: grid; gap: 2px; }
main { display: grid; gap: 20px; min-width: 0; }
.section-card { background: rgba(255,253,247,.82); border: 1px solid var(--line); border-radius: 26px; padding: clamp(18px, 2.4vw, 30px); box-shadow: var(--shadow); overflow: hidden; min-width: 0; }
.section-heading { max-width: 850px; margin-bottom: 20px; }
.section-heading h3 { margin: 0; font-family: Georgia, "Times New Roman", "PingFang TC", serif; font-size: clamp(25px, 3.2vw, 40px); line-height: 1.08; color: var(--slate); letter-spacing: -.02em; max-width: 24ch; }
.section-heading p:last-child { color: var(--muted); font-size: 15.5px; line-height: 1.6; margin: 11px 0 0; max-width: 78ch; }
.dual-text { display: inline-grid; gap: 3px; max-width: 100%; }
.zh-line { color: var(--muted); font-size: .92em; line-height: 1.45; }
.logic-grid, .cards-grid, .legend-grid, .project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 13px; }
.logic-card, .mini-card, .legend-card, .project-card, .persona-core, .not-card, .process-card, .advanced-list, .framework-row, .source-map > div { border: 1px solid var(--line); background: rgba(252,250,242,.88); border-radius: 20px; padding: 15px; min-width: 0; overflow-wrap: anywhere; }
.logic-icon { width: 48px; height: 48px; border-radius: 16px; display: grid; place-items: center; color: var(--slate); background: rgba(46,92,110,.10); margin-bottom: 14px; }
.logic-label { margin: 0 0 6px; color: var(--plum); font-weight: 900; letter-spacing: .08em; text-transform: uppercase; font-size: 12px; }
h4 { margin: 0 0 7px; color: var(--ink); font-size: 17px; line-height: 1.25; overflow-wrap: anywhere; }
p { margin: 0; }
.logic-card p, .mini-card p, .project-card p, .not-card p, .process-card p, .framework-row p, .source-map p, .timeline-item p, dd, td { overflow-wrap: anywhere; }
.source-tag { display: inline-flex; align-items: center; width: fit-content; margin-top: 14px; padding: 5px 9px; border-radius: 999px; background: rgba(98,41,84,.10); color: var(--plum); font-size: 12px; font-weight: 900; }
.legend-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; }
.legend-card p { margin-top: 9px; color: var(--muted); font-size: 13px; line-height: 1.48; }
.cx-layout { display: grid; grid-template-columns: 330px minmax(0, 1fr); gap: 15px; }
.venn-card { border: 1px solid var(--line); border-radius: 26px; padding: 20px; background: linear-gradient(180deg, rgba(46,92,110,.08), rgba(98,41,84,.06)); }
.cx-circle { position: relative; width: 230px; height: 230px; border-radius: 50%; background: rgba(46,92,110,.22); margin: 0 auto 16px; display: grid; place-items: center; color: var(--slate); font-size: 34px; font-family: Georgia, serif; font-weight: 900; }
.ux-circle { position: absolute; right: 26px; top: 75px; width: 96px; height: 96px; border-radius: 50%; background: rgba(98,41,84,.22); display: grid; place-items: center; color: var(--plum); font-size: 22px; }
.venn-notes { display: grid; gap: 10px; color: var(--muted); font-size: 14px; }
.case-table { display: grid; gap: 12px; }
.case-row { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; gap: 10px; align-items: center; border: 1px solid var(--line); border-radius: 18px; padding: 13px; background: rgba(252,250,242,.74); min-width: 0; }
.case-row p { color: var(--muted); margin-top: 6px; }
.score { padding: 8px 10px; border-radius: 999px; font-weight: 900; white-space: nowrap; }
.score.good { background: rgba(46,92,110,.12); color: var(--slate); }
.score.bad { background: rgba(215,84,85,.12); color: var(--beni); }
.mini-index { color: var(--plum); font-weight: 900; margin-bottom: 18px; font-size: 13px; }
.stage-flow { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
.stage-card { border: 1px solid var(--line); border-radius: 20px; padding: 15px; background: linear-gradient(180deg, rgba(255,253,247,.92), rgba(247,232,195,.32)); position: relative; min-width: 0; overflow-wrap: anywhere; }
.stage-number { width: 34px; height: 34px; border-radius: 50%; background: var(--plum); color: var(--white); display: grid; place-items: center; font-weight: 900; margin-bottom: 12px; }
.mindset { color: var(--slate); font-weight: 800; margin-bottom: 14px; }
dl { margin: 0; display: grid; gap: 6px; }
dt { color: var(--muted); font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: .07em; }
dd { margin: 0 0 8px; }
.nonlinear-note { margin-top: 16px; display: flex; align-items: flex-start; gap: 12px; border: 1px dashed rgba(98,41,84,.35); border-radius: 18px; padding: 14px; color: var(--plum); background: rgba(98,41,84,.06); }
.emotion-panel { border: 1px solid var(--line); border-radius: 24px; background: rgba(252,250,242,.7); padding: 18px; }
.emotion-svg { width: 100%; height: auto; max-height: 240px; }
.emotion-svg path { fill: none; stroke: var(--slate); stroke-width: 5; }
.emotion-svg circle { fill: var(--plum); }
.emotion-svg text { fill: var(--muted); font-size: 16px; font-weight: 800; }
.tone-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.tone-grid div { border-left: 4px solid var(--slate); padding: 12px; background: rgba(46,92,110,.06); border-radius: 12px; }
.onstage-grid { display: grid; gap: 12px; }
.onstage-row { display: grid; grid-template-columns: minmax(0, 1fr) 40px minmax(0, 1fr); gap: 12px; align-items: center; }
.onstage-box, .offstage-box { border: 1px solid var(--line); border-radius: 18px; padding: 16px; background: rgba(255,253,247,.9); }
.onstage-box span, .offstage-box span { display: block; color: var(--muted); font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 8px; }
.offstage-box { background: rgba(46,92,110,.08); }
.arrow { text-align: center; color: var(--plum); font-size: 22px; font-weight: 900; }
.persona-layout { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 14px; }
.persona-core { background: rgba(46,92,110,.08); }
.persona-core svg { color: var(--slate); margin-bottom: 18px; }
.not-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.not-card strong { color: var(--plum); }
.not-card p, .process-card p, .framework-row p, .advanced-list p, .source-map p, .project-card p, .project-card li { color: var(--muted); }
.process-flow { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 14px; }
.process-card span { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; background: var(--slate); color: var(--white); font-weight: 900; margin-bottom: 12px; }
.table-wrap { overflow-x: auto; border: 1px solid var(--line); border-radius: 22px; background: rgba(255,253,247,.72); }
.table-wrap h4 { padding: 16px 16px 0; }
table { width: 100%; border-collapse: collapse; min-width: 620px; }
table.journey-template { min-width: 920px; }
th, td { text-align: left; vertical-align: top; padding: 9px 11px; border-bottom: 1px solid var(--line); overflow-wrap: anywhere; }
th { color: var(--slate); font-size: 11.5px; text-transform: uppercase; letter-spacing: .055em; background: rgba(46,92,110,.07); line-height: 1.3; }
td { color: var(--ink); font-size: 13.5px; line-height: 1.45; }
tr:last-child td { border-bottom: none; }
.split-two, .templates-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr); gap: 16px; }
.advanced-list { display: grid; gap: 14px; }
.advanced-list h4 { margin-bottom: 4px; }
.framework-grid { display: grid; gap: 12px; }
.framework-row { display: grid; grid-template-columns: 180px minmax(0, 1fr); gap: 16px; align-items: start; }
.framework-row strong { color: var(--plum); }
.project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.project-card ul { margin: 14px 0; padding-left: 18px; }
.metric-note { display: grid; gap: 4px; border-top: 1px solid var(--line); padding-top: 12px; }
.metric-note strong { color: var(--slate); }
.timeline { position: relative; display: grid; gap: 14px; }
.timeline-item { display: grid; grid-template-columns: 128px minmax(0, 1fr); gap: 14px; align-items: start; border: 1px solid var(--line); border-radius: 16px; padding: 13px; background: rgba(255,253,247,.74); }
.timeline-date { font-weight: 900; color: var(--plum); }
.timeline-item p { color: var(--muted); }
.source-map { display: grid; gap: 12px; }
.floating-mode { position: fixed; right: 18px; bottom: 18px; z-index: 20; background: var(--plum); color: var(--white); border-color: var(--plum); box-shadow: var(--shadow); opacity: .84; min-width: 58px; }
.floating-mode:hover { opacity: 1; }
@media (max-width: 1040px) {
  .hero-grid, .layout, .cx-layout, .persona-layout, .split-two, .templates-grid { grid-template-columns: 1fr; }
  .hero-card { max-width: 560px; }
  .side-nav { position: relative; top: auto; max-height: none; display: flex; overflow-x: auto; gap: 8px; align-items: stretch; padding: 10px; }
  .side-nav a { white-space: nowrap; }
  .sticky-summary { min-width: 260px; margin: 0 4px 0 0; flex: 0 0 260px; }
  .nav-links { display: flex; gap: 6px; align-items: stretch; }
  .logic-grid, .cards-grid, .legend-grid, .stage-flow, .process-flow, .tone-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 720px) {
  .hero { padding: 28px 14px 16px; }
  h1 { max-width: 100%; font-size: clamp(34px, 12vw, 48px); }
  h2 { max-width: 100%; font-size: clamp(22px, 7vw, 30px); }
  .hero-thesis { margin-top: 14px; font-size: 15.5px; }
  .hero-card { padding: 14px; border-radius: 20px; }
  .layout { padding: 0 14px 64px; gap: 16px; }
  .control-strip { align-items: stretch; flex-direction: column; margin-top: 18px; }
  .mode-pills { justify-content: flex-start; }
  .logic-grid, .cards-grid, .legend-grid, .stage-flow, .process-flow, .tone-grid, .not-grid, .project-grid { grid-template-columns: 1fr; }
  .case-row { grid-template-columns: 1fr; }
  .onstage-row { grid-template-columns: 1fr; }
  .arrow { transform: rotate(90deg); }
  .timeline-item { grid-template-columns: 1fr; }
  .section-card { border-radius: 20px; padding: 16px; }
  .section-heading { margin-bottom: 16px; }
  .section-heading h3 { max-width: 100%; font-size: clamp(23px, 8vw, 31px); }
  .section-heading p:last-child { font-size: 14.5px; }
  .cx-circle { width: 190px; height: 190px; }
  .ux-circle { width: 82px; height: 82px; right: 18px; top: 62px; }
  .table-wrap { margin-left: -4px; margin-right: -4px; border-radius: 16px; }
  th, td { padding: 8px 10px; }
  .floating-mode { right: 12px; bottom: 12px; padding: 9px 12px; }
}
@media print {
  .side-nav, .control-strip, .floating-mode { display: none; }
  .layout, .hero-grid { display: block; }
  .section-card { break-inside: avoid; box-shadow: none; }
}
`;
