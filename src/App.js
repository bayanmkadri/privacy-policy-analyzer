import React, { useState } from "react";
import "./App.css";

function App() {
  const [policyText, setPolicyText] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = () => {
    // لاحقًا نربط هذا الزر بالـ backend
    setAnalysisResult("🔍 تحليل تجريبي: السياسة تبدو واضحة وآمنة.");
  };

  return (
    <div className="App">
      <h1>Privacy Policy Analyzer</h1>
      <textarea
        placeholder="ألصقي هنا نص سياسة الخصوصية..."
        value={policyText}
        onChange={(e) => setPolicyText(e.target.value)}
        rows={10}
        cols={60}
      />
      <br />
      <button onClick={handleAnalyze}>تحليل</button>

      {analysisResult && (
        <div className="result">
          <h3>النتيجة:</h3>
          <p>{analysisResult}</p>
        </div>
      )}
    </div>
  );
}

export default App;