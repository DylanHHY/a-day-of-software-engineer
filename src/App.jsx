import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "前端：使用者點擊按鈕",
  "前端：資料被打包成請求",
  "後端：收到請求並處理",
  "後端：儲存至資料庫",
  "前端：顯示成功訊息",
];

const developerDayActivities = [
  {
    title: "程式設計與開發",
    description: "編寫清晰、高效且易於維護的程式碼，實現產品需求和功能。",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    title: "問題排解",
    description: "診斷並修復程式錯誤和技術問題，確保系統穩定運行。",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "團隊協作",
    description: "與團隊成員合作，參與代碼審查，分享知識和最佳實踐。",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const realDeveloperSchedule = [
  {
    time: "09:00",
    activity: "沖一杯咖啡",
    description:
      "每天早上上班前一定會沖一杯咖啡，開啟一天的開始。咖啡是程式碼的燃料！",
    icon: "☕",
  },
  {
    time: "09:30",
    activity: "檢查郵件和任務",
    description: "瀏覽郵件、Slack訊息和JIRA任務，規劃今天的工作重點。",
    icon: "📬",
  },
  {
    time: "10:00",
    activity: "解決Bug",
    description:
      "深入程式碼，解決各種詭異的Bug。「昨天還能用的代碼今天為何不能用了？」",
    icon: "🐛",
  },
  {
    time: "12:00",
    activity: "午餐休息",
    description: "與同事一起享用午餐，討論技術難題或是最新的科技新聞。",
    icon: "🍱",
  },
  {
    time: "14:00",
    activity: "下午加餐時間",
    description: "公司發放零食和點心，補充能量繼續奮戰。糖分是偉大創意的來源！",
    icon: "🍪",
  },
  {
    time: "15:00",
    activity: "會議時間",
    description: "參加各種會議：站會、需求討論、技術評審...",
    icon: "👥",
  },
  {
    time: "16:30",
    activity: "深度工作",
    description: "戴上耳機，進入「心流」狀態，高效完成剩餘任務。",
    icon: "🎧",
  },
  {
    time: "18:00",
    activity: "下班，明天見",
    description: "保存今天的工作，思考未解決的問題，明天繼續挑戰。",
    icon: "👋",
  },
];

const webTeamRoles = [
  {
    title: "前端工程師",
    description:
      "負責開發使用者所見的介面，將設計轉化為互動式網頁，使用HTML、CSS和JavaScript等技術。",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "後端工程師",
    description:
      "構建網站的核心功能和邏輯，管理資料庫和API，確保系統高效運行和資料安全，是網站的大腦。",
    imageUrl:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    highlight: true,
  },
  {
    title: "UI/UX設計師",
    description:
      "設計網站的視覺元素和使用者體驗，確保網站美觀且易於使用，創造愉悅的使用者旅程。",
    imageUrl:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "DevOps工程師",
    description:
      "管理部署流程和基礎設施，確保網站穩定運行，負責自動化測試和持續集成。",
    imageUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
  },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [done, setDone] = useState(false);
  const [code, setCode] = useState(
    "// 輸入JavaScript程式碼\n// 例如: console.log('Hello World!');\n// 或是: 2 + 2"
  );
  const [output, setOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showRealDay, setShowRealDay] = useState(false);

  const handleClick = async () => {
    setCurrentStep(0);
    setDone(false);
    for (let i = 1; i < steps.length; i++) {
      await new Promise((res) => setTimeout(res, 1000));
      setCurrentStep(i);
    }
    await new Promise((res) => setTimeout(res, 1000));
    setDone(true);
  };

  const runCode = () => {
    setIsProcessing(true);
    setOutput("");

    // 使用setTimeout模擬程式碼處理時間
    setTimeout(() => {
      try {
        // 捕獲console.log輸出
        const originalConsoleLog = console.log;
        let logs = [];

        console.log = (...args) => {
          logs.push(args.join(" "));
          originalConsoleLog(...args);
        };

        // 執行程式碼並取得結果
        const result = eval(code);

        // 恢復console.log
        console.log = originalConsoleLog;

        // 顯示結果
        setOutput(
          logs.length > 0
            ? logs.join("\n") +
                (result !== undefined ? "\n回傳值: " + result : "")
            : result !== undefined
            ? "回傳值: " + result
            : "程式執行完成，沒有輸出"
        );
      } catch (error) {
        setOutput("錯誤: " + error.message);
      }
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-cyan-400">
        軟體工程師的一天
      </h1>

      <div className="w-full max-w-4xl mb-12">
        <p className="text-lg text-gray-300 mb-6">
          軟體工程師的工作日充滿了創造力、邏輯思維和解決問題的挑戰。從編寫程式碼到與團隊協作，每一天都在打造數位世界的基石。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {developerDayActivities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 mb-4">
          <button
            onClick={() => setShowRealDay(!showRealDay)}
            className="flex items-center justify-center w-full py-3 px-4 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-medium transition duration-300"
          >
            <span className="mr-2">
              {showRealDay ? "隱藏真相" : "揭露真正的軟體工程師的一天"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${
                showRealDay ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <motion.div
          className="bg-gray-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: showRealDay ? 1 : 0,
            height: showRealDay ? "auto" : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">
              軟體工程師的真實日程表
            </h3>
            <div className="space-y-6">
              {realDeveloperSchedule.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showRealDay ? 1 : 0, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-gray-400 font-mono">{item.time}</div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="h-full border-l-2 border-purple-500 pl-4">
                      <h4 className="text-lg font-semibold text-purple-300">
                        {item.activity}
                      </h4>
                      <p className="text-gray-300 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-4xl mb-12 border-t border-gray-700 pt-8">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">
          網站背後的團隊
        </h2>

        <p className="text-lg text-gray-300 mb-6">
          現代網站是由不同專業領域的工程師和設計師共同協作的成果。每個角色都有獨特的專業技能，協同工作打造出完整的網站體驗。
          <span className="block mt-2 font-semibold text-yellow-400">
            作為後端工程師，我負責構建網站的核心功能和邏輯，是網站穩定運行的關鍵。
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {webTeamRoles.map((role, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 rounded-lg overflow-hidden border-2 ${
                role.highlight ? "border-yellow-500" : "border-transparent"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={role.imageUrl}
                  alt={role.title}
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                />
                <div className="p-4 flex-1">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      role.highlight ? "text-yellow-400" : "text-cyan-400"
                    }`}
                  >
                    {role.title}
                    {role.highlight && <span className="ml-2">👈 這是我!</span>}
                  </h3>
                  <p className="text-gray-300">{role.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-cyan-400">
        前端 vs 後端 Demo 模擬
      </h1>

      <button
        className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white font-semibold mb-6"
        onClick={handleClick}
        disabled={currentStep !== -1 && !done}
      >
        {done ? "再跑一次" : currentStep === -1 ? "送出請求" : "進行中..."}
      </button>

      <div className="w-full max-w-md space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`p-4 rounded border ${
              index === currentStep
                ? "bg-cyan-700 border-cyan-400"
                : index < currentStep
                ? "bg-cyan-900 border-cyan-800"
                : "bg-gray-800 border-gray-700"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: index <= currentStep ? 1 : 0.3,
              x: 0,
            }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {step}
          </motion.div>
        ))}
      </div>

      {done && (
        <motion.div
          className="mt-6 text-green-400 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          資料處理完成！
        </motion.div>
      )}

      <div className="w-full max-w-2xl mt-12 border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">
          體驗軟體工程師的工作
        </h2>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">輸入程式碼:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full bg-gray-800 text-white p-4 rounded-md border border-gray-700 font-mono h-40"
            spellCheck="false"
          />
        </div>
        <button
          onClick={runCode}
          disabled={isProcessing}
          className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded text-white font-semibold"
        >
          {isProcessing ? "執行中..." : "執行程式碼"}
        </button>
        {(output || isProcessing) && (
          <div className="mt-4">
            <label className="block text-gray-300 mb-2">執行結果:</label>
            <pre className="w-full bg-gray-800 text-white p-4 rounded-md border border-gray-700 font-mono min-h-20">
              {isProcessing ? "處理中..." : output}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
