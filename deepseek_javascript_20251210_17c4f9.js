// 普法题目数据
const lawQuestions = [
    {
        id: 1,
        question: "根据《中华人民共和国民法典》，自然人的民事权利能力从何时开始？",
        options: [
            { text: "A. 从出生时起", isCorrect: true },
            { text: "B. 从年满18周岁起", isCorrect: false },
            { text: "C. 从结婚时起", isCorrect: false },
            { text: "D. 从参加工作起", isCorrect: false }
        ],
        explanation: "《民法典》第十三条规定：自然人从出生时起到死亡时止，具有民事权利能力，依法享有民事权利，承担民事义务。"
    },
    {
        id: 2,
        question: "下列哪种情形属于正当防卫？",
        options: [
            { text: "A. 甲被乙辱骂后，次日找人殴打乙", isCorrect: false },
            { text: "B. 甲发现乙正在盗窃自己财物，当场制止并将乙打伤", isCorrect: true },
            { text: "C. 甲被乙打伤后，在乙离开后追上去报复", isCorrect: false },
            { text: "D. 甲乙发生口角，甲先动手打人，乙反击致甲重伤", isCorrect: false }
        ],
        explanation: "正当防卫必须是针对正在进行的不法侵害，且不能超过必要限度。事后报复不属于正当防卫。"
    },
    {
        id: 3,
        question: "消费者因购买商品受到人身伤害，可以要求赔偿的项目不包括？",
        options: [
            { text: "A. 医疗费", isCorrect: false },
            { text: "B. 误工费", isCorrect: false },
            { text: "C. 精神损失费", isCorrect: false },
            { text: "D. 惩罚性赔偿金（如非欺诈情形）", isCorrect: true }
        ],
        explanation: "一般情况下的人身伤害赔偿不包括惩罚性赔偿，除非经营者存在欺诈行为。"
    },
    {
        id: 4,
        question: "劳动合同应当具备的条款不包括？",
        options: [
            { text: "A. 用人单位的名称、住所", isCorrect: false },
            { text: "B. 劳动者的姓名、住址", isCorrect: false },
            { text: "C. 劳动合同期限", isCorrect: false },
            { text: "D. 劳动者的个人爱好", isCorrect: true }
        ],
        explanation: "《劳动合同法》第十七条规定了劳动合同必备条款，个人爱好不属于必备内容。"
    },
    {
        id: 5,
        question: "驾驶机动车在道路上行驶，应当随身携带的证件是？",
        options: [
            { text: "A. 身份证和护照", isCorrect: false },
            { text: "B. 驾驶证和行驶证", isCorrect: true },
            { text: "C. 工作证和学生证", isCorrect: false },
            { text: "D. 户口本和结婚证", isCorrect: false }
        ],
        explanation: "《道路交通安全法》规定，驾驶机动车应当随车携带驾驶证、行驶证。"
    },
    {
        id: 6,
        question: "下列哪种遗嘱形式不需要见证人在场见证？",
        options: [
            { text: "A. 自书遗嘱", isCorrect: true },
            { text: "B. 代书遗嘱", isCorrect: false },
            { text: "C. 录音录像遗嘱", isCorrect: false },
            { text: "D. 口头遗嘱", isCorrect: false }
        ],
        explanation: "根据《民法典》，自书遗嘱由遗嘱人亲笔书写、签名，注明年、月、日，不需要见证人。"
    },
    {
        id: 7,
        question: "向人民法院请求保护民事权利的诉讼时效期间为几年？",
        options: [
            { text: "A. 1年", isCorrect: false },
            { text: "B. 2年", isCorrect: false },
            { text: "C. 3年", isCorrect: true },
            { text: "D. 5年", isCorrect: false }
        ],
        explanation: "《民法典》第一百八十八条规定：向人民法院请求保护民事权利的诉讼时效期间为三年。"
    },
    {
        id: 8,
        question: "网购商品有权自收到商品之日起几日内退货？",
        options: [
            { text: "A. 3日", isCorrect: false },
            { text: "B. 7日", isCorrect: true },
            { text: "C. 15日", isCorrect: false },
            { text: "D. 30日", isCorrect: false }
        ],
        explanation: "《消费者权益保护法》规定，经营者采用网络等方式销售商品，消费者有权自收到商品之日起七日内退货。"
    },
    {
        id: 9,
        question: "下列哪个年龄段的人犯罪，应当负刑事责任？",
        options: [
            { text: "A. 12周岁", isCorrect: false },
            { text: "B. 14周岁", isCorrect: true },
            { text: "C. 10周岁", isCorrect: false },
            { text: "D. 8周岁", isCorrect: false }
        ],
        explanation: "《刑法》规定，已满十六周岁的人犯罪，应当负刑事责任。已满十四周岁不满十六周岁的人，犯故意杀人等重罪的，应当负刑事责任。"
    },
    {
        id: 10,
        question: "夫妻共同财产不包括？",
        options: [
            { text: "A. 工资、奖金", isCorrect: false },
            { text: "B. 知识产权的收益", isCorrect: false },
            { text: "C. 一方婚前财产", isCorrect: true },
            { text: "D. 生产、经营的收益", isCorrect: false }
        ],
        explanation: "《民法典》规定，一方的婚前财产为夫妻一方的个人财产，不属于夫妻共同财产。"
    }
];

// 模拟排名数据
const rankData = {
    today: [
        { id: 1, name: "张三", score: 100, time: 120, avatar: "张" },
        { id: 2, name: "李四", score: 95, time: 150, avatar: "李" },
        { id: 3, name: "王五", score: 90, time: 180, avatar: "王" },
        { id: 4, name: "赵六", score: 85, time: 200, avatar: "赵" },
        { id: 5, name: "刘七", score: 80, time: 220, avatar: "刘" }
    ],
    total: [
        { id: 1, name: "陈明", score: 100, time: 110, avatar: "陈" },
        { id: 2, name: "杨光", score: 100, time: 115, avatar: "杨" },
        { id: 3, name: "周华", score: 95, time: 130, avatar: "周" }
    ],
    friends: [
        { id: 1, name: "你", score: 0, time: 0, avatar: "你" }
    ]
};

// 本地存储工具函数
const storage = {
    saveScore: function(score, time, correctCount) {
        const record = {
            score,
            time,
            correctCount,
            date: new Date().toISOString(),
            accuracy: Math.round((correctCount / lawQuestions.length) * 100)
        };
        
        // 获取历史记录
        let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        history.push(record);
        
        // 只保留最近10次记录
        if (history.length > 10) {
            history = history.slice(-10);
        }
        
        localStorage.setItem('quizHistory', JSON.stringify(history));
        
        // 更新最高分
        const highest = this.getHighestScore();
        if (score > highest) {
            localStorage.setItem('highestScore', score);
        }
        
        // 更新总参与人数
        const total = parseInt(localStorage.getItem('totalPlayers') || '0') + 1;
        localStorage.setItem('totalPlayers', total.toString());
    },
    
    getHistory: function() {
        return JSON.parse(localStorage.getItem('quizHistory') || '[]');
    },
    
    getHighestScore: function() {
        return parseInt(localStorage.getItem('highestScore') || '0');
    },
    
    getTotalPlayers: function() {
        return parseInt(localStorage.getItem('totalPlayers') || '1258');
    }
};