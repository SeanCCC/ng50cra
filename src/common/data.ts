enum Category {
  Time = '時',
  Person = '人',
  Thing = '事'
}

enum StepACode {
  A1 = 'A1',
  A2 = 'A2',
  A3 = 'A3',
  A4 = 'A4',
  A5 = 'A5'
}

enum StepBCode {
  B1 = 'B1',
  B2 = 'B2'
}

const stepAActorToCode = {
  吳念真: StepACode.A1,
  王淨: StepACode.A2,
  楊貴媚: StepACode.A3,
  許光漢: StepACode.A4,
  宋芸樺: StepACode.A5
};

export const opening = {
  name: '賓哥',
  subtitle: [
    '我用攝影機捕捉我的電影，',
    '帶你進入一個故事、',
    '一個場景。',
    '現在，攝影燈亮，',
    '你打算說一個怎麼樣的故事？'
  ],
  subtitleTimeline: [0, 3000, 5500, 7000, 10000]
};

export const actorList = [
  {
    category: Category.Time,
    name: '吳念真',
    title: ['結束日治時期', '進入國民政府年代的台灣'],
    subtitle: ['受日本教育的他們，', '在國民政府統治下的新時代，', '他們，', '都成了跟現實格格不入的歷史孤兒。'],
    subtitleTimeline: [0, 2000, 5000, 6000]
  },
  {
    category: Category.Time,
    name: '王淨',
    title: ['1960 年代廢棄校舍裡'],
    subtitle: [
      '那是 1960 年代，',
      '台灣尚未解嚴的時候。',
      '深夜，',
      '在沒有人的廢棄校舍裡面，',
      '桌椅上積著厚厚的灰塵，',
      '黑板上的筆畫寫到一半，',
      '彷彿時間突然靜止。'
    ],
    subtitleTimeline: [0, 2000, 5800, 7000, 10200, 14800, 18000]
  },
  {
    category: Category.Time,
    name: '楊貴媚',
    title: ['2000 年代', '福和大戲院的最後一個晚上'],
    subtitle: [
      '千禧年過後，',
      '台灣傳統戲院漸漸關閉。',
      ' 在福和大戲院最後一晚，',
      '空蕩蕩的戲院大廳，',
      '微弱的膠卷聲',
      '顯得寂寥又落寞。'
    ],
    subtitleTimeline: [0, 2000, 6000, 9200, 12000, 14800]
  },
  {
    category: Category.Time,
    name: '許光漢',
    title: ['略顯疏離的', '現代台北公車站'],
    subtitle: [
      '2010 年代，近代台北。',
      '城市迅速發展，',
      '大部分的人拼命追趕著\n看不見也說不清楚的未來。',
      '夜晚無人的公車站',
      '發出微弱的光，',
      '像一座孤島。'
    ],
    subtitleTimeline: [0, 2800, 5000, 9600, 11000, 13000]
  },
  {
    category: Category.Time,
    name: '宋芸樺',
    title: ['1990 年中期', '熱鬧蓬勃的台灣社會'],
    subtitle: [
      '1990 年代中期，',
      '台灣經濟起飛，',
      '什麼事都在飛速前進。',
      '那時的文具店除了參考書之外，',
      '還有許多ＣＤ、雜誌以及明星小卡，',
      '書店的外頭總是聚集著人群。'
    ],
    subtitleTimeline: [0, 2000, 4000, 6800, 10000, 13500]
  },
  {
    category: Category.Person,
    name: '劉冠廷',
    title: ['慢一拍的男生', '與快一拍的女生'],
    subtitle: [
      '有一個脖子上掛著相機、',
      '看起來不太俐落的男生，',
      '呆呆地停在原地。',
      '與一旁的女生，',
      '帶點鄙視與懷疑的眼神，看著他。'
    ],
    subtitleTimeline: [0, 1900, 3000, 5000, 6000]
  },
  {
    category: Category.Person,
    name: '朱軒洋',
    title: ['三個痞痞的男生'],
    subtitle: [
      '有三個穿著學校制服的男生，',
      '一個痞痞又邪惡的氣質、',
      '一個喜歡仗勢欺人、',
      '最後一個畏畏縮縮的，',
      '感覺十分膽小。'
    ],
    subtitleTimeline: [0, 3000, 6500, 9000, 10800]
  },
  {
    category: Category.Person,
    name: '賈靜雯',
    title: ['一對不說話的母女'],
    subtitle: [
      '有一對不太親近的母女，',
      '媽媽對女兒充滿了猜忌與懷疑，',
      '女兒表面上看起來冷靜，',
      '卻透露出了緊張與不安，',
      '似乎對彼此都有戒心。'
    ],
    subtitleTimeline: [0, 2000, 5500, 8000, 11000]
  },
  {
    category: Category.Person,
    name: '林柏宏',
    title: ['兩個做什麼事', '都在一起的死黨'],
    subtitle: [
      '兩個頑皮的年輕男生，',
      '平常總是一起玩耍、嬉鬧、追女孩子。',
      '在容易衝動的年紀，',
      '身上有著打架留下來的傷疤。'
    ],
    subtitleTimeline: [0, 1800, 6000, 8000]
  },
  {
    category: Category.Person,
    name: '莫子儀',
    title: ['沒有血緣關係的', '年輕男子與小孩'],
    subtitle: [
      '一名氣質文靜的男子',
      '與一個和他長相並不相似的小男孩。',
      '小男孩卻親密的叫著男子爸爸，',
      '兩人之間有著依賴與信任。'
    ],
    subtitleTimeline: [0, 2000, 6000, 9900]
  },
  {
    category: Category.Person,
    name: '張震',
    title: ['一個罹癌的男子與他的妻子'],
    subtitle: [
      '有一個光頭、',
      '蒼白無血色的虛弱男子，',
      '他被癌症折磨得不成人形。',
      '以及他的妻子，',
      '一頭短髮，俐落幹練。'
    ],
    subtitleTimeline: [0, 2000, 4000, 7000, 9500]
  },
  {
    category: Category.Person,
    name: '敬驊',
    title: ['兩個青澀的大男孩'],
    subtitle: ['兩個ㄎ的大男孩，', '一個陽光開朗、', '一個沈默靦腆，', '兩人有些距離，', '卻若有似無地碰觸著彼此。'],
    subtitleTimeline: [0, 2300, 4000, 7000, 9500]
  },
  {
    category: Category.Thing,
    name: '謝盈萱',
    title: ['排練最後一場舞台劇'],
    subtitle: ['他們正在排練一場舞台劇，', '用盡全力的唱著舞台劇的主題曲，', '彷彿這是此生最後一次演出的機會。'],
    subtitleTimeline: [0, 3000, 7000]
  },
  {
    category: Category.Thing,
    name: '柯震東',
    title: ['從指尖牽出一條紅線'],
    subtitle: [
      '他們凝視著指尖牽出的一條發光紅線，',
      '對能夠替人綁上紅線的月老來說，',
      '要怎麼認定這是孽緣還是佳話，',
      '從來不是件容易的事。'
    ],
    subtitleTimeline: [0, 3000, 6000, 9000]
  },
  {
    category: Category.Thing,
    name: '陳淑芳',
    title: ['輕輕唱著一首台語歌'],
    subtitle: [
      '他們認真的聽著一名老奶奶唱著',
      '「青春的味酸甘甜 好聽的歌免歌詞⋯⋯」',
      '聲音不大，',
      '歌聲裡卻充滿許多難以言喻的情感。'
    ],
    subtitleTimeline: [0, 2000, 9500, 12000]
  },
  {
    category: Category.Thing,
    name: '吳慷仁',
    title: ['正在練習搶銀行的流程'],
    subtitle: [
      '他們正在練習搶銀行的流程，',
      '為了讓彼此的動作配合得天衣無縫，',
      '一次又一次，',
      '動作從陌生到熟悉，',
      '慢慢俐落。'
    ],
    subtitleTimeline: [0, 3000, 6000, 8000, 10200]
  },
  {
    category: Category.Thing,
    name: '桂綸鎂',
    title: ['擺弄著一地攤的盜版光碟'],
    subtitle: [
      '他們擺弄著一地攤的盜版光碟，',
      '有一句沒一句地說著話，',
      '算著這樣能入帳多少錢，',
      '想著還得賺多少錢才能不依靠任何人。'
    ],
    subtitleTimeline: [0, 3000, 6000, 8500]
  },
  {
    category: Category.Thing,
    name: '李康生',
    title: ['仔細端詳臉部的表情'],
    subtitle: [
      '一聲不響的，',
      '仔細端詳彼此臉上每一道皺紋、',
      '每一個毛孔、',
      '每一個細節在光影的變化下，',
      '會是什麼樣貌。'
    ],
    subtitleTimeline: [0, 1000, 5500, 7000, 10500]
  },
  {
    category: Category.Thing,
    name: '張艾嘉',
    title: ['燒製霓虹光管'],
    subtitle: [
      '其中一個人拿著霓虹光管，',
      '專注的在火焰上慢慢移動，',
      '燒製成彎曲的角度。',
      '雖然動作不太熟練，',
      '但卻一遍又一遍，',
      '不斷的重複做著。'
    ],
    subtitleTimeline: [0, 3000, 6000, 10000, 13000, 15800]
  },
  {
    category: Category.Thing,
    name: '阮經天',
    title: ['旁觀一場鬥毆'],
    subtitle: [
      '他們正在旁觀一群混混',
      '圍毆一個落單的學生，',
      '打量處於下風卻不肯示弱的他，',
      '盤算招攬這個人的可能性。'
    ],
    subtitleTimeline: [0, 1800, 4000, 7200]
  }
];

// https://www.shubo.io/javascript-random-shuffle/
const arrayShuffle = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const stepBActorToCode = {
  [StepACode.A1]: {
    劉冠廷: StepBCode.B1,
    朱軒洋: StepBCode.B1,
    賈靜雯: StepBCode.B1,
    林柏宏: StepBCode.B1,
    莫子儀: StepBCode.B1,
    張震: StepBCode.B1,
    曾敬驊: StepBCode.B1
  },
  [StepACode.A2]: {
    劉冠廷: StepBCode.B1,
    賈靜雯: StepBCode.B1,
    張震: StepBCode.B1,
    朱軒洋: StepBCode.B2,
    林柏宏: StepBCode.B2,
    莫子儀: StepBCode.B2,
    曾敬驊: StepBCode.B2
  },
  [StepACode.A3]: {
    劉冠廷: StepBCode.B1,
    賈靜雯: StepBCode.B1,
    張震: StepBCode.B1,
    朱軒洋: StepBCode.B2,
    林柏宏: StepBCode.B2,
    莫子儀: StepBCode.B2,
    曾敬驊: StepBCode.B2
  },
  [StepACode.A4]: {
    劉冠廷: StepBCode.B1,
    朱軒洋: StepBCode.B1,
    賈靜雯: StepBCode.B1,
    林柏宏: StepBCode.B1,
    莫子儀: StepBCode.B1,
    張震: StepBCode.B1,
    曾敬驊: StepBCode.B1
  },
  [StepACode.A5]: {
    劉冠廷: StepBCode.B1,
    賈靜雯: StepBCode.B1,
    張震: StepBCode.B1,
    朱軒洋: StepBCode.B2,
    林柏宏: StepBCode.B2,
    莫子儀: StepBCode.B2,
    曾敬驊: StepBCode.B2
  }
};

const codeToStepCActor: Record<StepACode, Record<StepBCode[number], string[]>> = {
  [StepACode.A1]: {
    [StepBCode.B1]: ['謝盈萱', '柯震東', '陳淑芳', '吳慷仁', '李康生', '阮經天']
  },
  [StepACode.A2]: {
    [StepBCode.B1]: ['謝盈萱', '柯震東', '陳淑芳', '吳慷仁', '李康生', '張艾嘉', '阮經天'],
    [StepBCode.B2]: ['謝盈萱', '柯震東', '陳淑芳', '吳慷仁', '李康生', '阮經天']
  },
  [StepACode.A3]: {
    [StepBCode.B1]: ['謝盈萱', '柯震東', '陳淑芳', '吳慷仁', '桂綸鎂', '李康生', '張艾嘉', '阮經天'],
    [StepBCode.B2]: ['謝盈萱', '柯震東', '陳淑芳', '吳慷仁', '桂綸鎂', '李康生', '阮經天']
  },
  [StepACode.A4]: {
    [StepBCode.B1]: ['謝盈萱', '柯震東', '陳淑芳', '吳慷仁', '桂綸鎂', '李康生', '阮經天']
  },
  [StepACode.A5]: {
    [StepBCode.B1]: ['謝盈萱', '柯震東', '陳淑芳', '吳慷仁', '桂綸鎂', '李康生', '張艾嘉', '阮經天'],
    [StepBCode.B2]: ['謝盈萱', '柯震東', '陳淑芳', '吳慷仁', '桂綸鎂', '李康生', '阮經天']
  }
};

const awardsList = [
  {
    actor: '吳念真',
    optionName: '社會的騷動與時代變化',
    award: '最佳導演',
    reason: '不避諱的展露了對時代變化的觀點，\n真誠動人。'.split('\n')
  },
  {
    actor: '王淨',
    optionName: '廢棄校舍的由來 ',
    award: '最佳美術設計',
    reason: '用細緻場景讓觀者彷彿置身廢棄校舍當下，構成強烈空間感。'.split('\n')
  },
  {
    actor: '王淨',
    optionName: '廢棄校舍的由來 ',
    award: '最佳新演員',
    reason: '用極具說服力的演出，\n帶領觀眾一同置身廢棄校舍，共感情緒。'.split('\n')
  },
  {
    actor: '楊貴媚',
    optionName: '戲院每個角落發生的事',
    award: '最佳剪輯',
    reason: '以獨特的敘事節奏，營造強烈的帶入感。'.split('\n')
  },
  {
    actor: '許光漢',
    optionName: '都市裡疏離的心靈 ',
    award: '最佳劇情片',
    reason: '直視現實，從小人物映照社會，\n各方面都統合得相當成熟。'.split('\n')
  },
  {
    actor: '宋芸樺',
    optionName: '年代變遷與人物成長',
    award: '最佳新導演',
    reason: '首部劇情長片便統合的相當完整，\n實力無庸置疑。'.split('\n')
  },
  {
    actor: '劉冠廷',
    optionName: '兩個人之間的互動',
    award: '最佳原著劇本',
    reason: '將角色關係鋪陳得細膩雋永，\n將相異兩人結合得天衣無縫。'.split('\n')
  },
  {
    actor: '劉冠廷',
    optionName: '兩個人之間的互動',
    award: '最佳動畫片',
    reason: '用非寫實的手法，\n將角色關係鋪陳得細膩雋永。'.split('\n')
  },
  {
    actor: '朱軒洋',
    optionName: '三個男生的關係變化',
    award: '最佳男配角',
    reason: '演出氣勢強勁，展現了黑化的魅力。'.split('\n')
  },
  {
    actor: '朱軒洋',
    optionName: '三個男生的關係變化',
    award: '最佳動畫短片',
    reason: '鏡頭奇幻又引人入勝，\n用動畫造夢的手法令人歎為觀止。'.split('\n')
  },
  {
    actor: '賈靜雯',
    optionName: '呈現母女間緊張氣息的音樂',
    award: '最佳原創電影音樂',
    reason: '恰到好處的音樂凸顯母女間的關係，\n加深故事深度。'.split('\n')
  },
  {
    actor: '林柏宏',
    optionName: '兩位死黨的未來發展',
    award: '最佳男配角',
    reason: '角色魅力涵括鬆弛、幽默以及爆發力，\n渾然天成。'.split('\n')
  },
  {
    actor: '莫子儀',
    optionName: '兩人之間的細微情感',
    award: '最佳男主角',
    reason: '深情、內斂，富含層次的演技，\n讓角色使人產生強烈共感。'.split('\n')
  },
  {
    actor: '莫子儀',
    optionName: '奶奶如何介入兩人關係',
    award: '最佳女配角',
    reason: '演出情感內斂且收放有度，\n帶來更豐厚的角色關係。'.split('\n')
  },
  {
    actor: '張震',
    optionName: '男子與妻子接下來的發展',
    award: '最佳造型設計',
    reason: '極具說服力的造型，\n讓人完全相信角色真實際遇。'.split('\n')
  },
  {
    actor: '曾敬驊',
    optionName: '串連兩人生命軌跡的音樂',
    award: '最佳原創電影歌曲',
    reason: '用極具感染力音樂帶領觀眾進入當下，\n歌曲與情節相輔相成。'.split('\n')
  },
  {
    actor: '謝盈萱',
    optionName: '舞台劇的意義 ',
    award: '最佳女主角',
    reason: '充滿張力、動人深刻的演出，\n讓人相信她即是角色本身。'.split('\n')
  },
  {
    actor: '柯震東',
    optionName: '紅線怎麼綁才能法力滿滿',
    award: '最佳音效',
    reason: '用音效將奇幻的故事擬真，\n彷彿世界都成為真實，令人沉浸其中。'.split('\n')
  },
  {
    actor: '柯震東',
    optionName: '紅線怎麼綁才能法力滿滿',
    award: '最佳視覺效果',
    reason: '用極具魅力的視覺打造奇幻的世界觀，\n彷彿世界都成為真實，令人沉浸其中。'.split('\n')
  },
  {
    actor: '陳淑芳',
    optionName: '歌聲裡的複雜情感',
    award: '最佳改編劇本',
    reason: '深入探索期望與原諒的糾結難分，\n結構縝密、引人入勝。'.split('\n')
  },
  {
    actor: '陳淑芳',
    optionName: '歌聲裡的複雜情感',
    award: '最佳劇情短片',
    reason: '用有限的篇幅說出完整的故事，\n結構縝密、引人入勝。'.split('\n')
  },
  {
    actor: '吳慷仁',
    optionName: '搶銀行的動作',
    award: '最佳動作設計',
    reason: '動作精實，俐落扎實且合理性十足。'.split('\n')
  },
  {
    actor: '桂綸鎂',
    optionName: '當下的時代場景',
    award: '最佳攝影',
    reason: '完美呈現出當下的時代氛圍，\n畫面精準貼合劇情設定。'.split('\n')
  },
  {
    actor: '李康生',
    optionName: '每個人的臉部變化',
    award: '最佳紀錄片',
    reason: '用最誠實的鏡頭記錄時間與當下，\n力道十足。'.split('\n')
  },
  {
    actor: '張艾嘉',
    optionName: '角色執著於霓虹光管的原因',
    award: '最佳女主角',
    reason: '專注且精湛的演出令人動容，\n深刻感受到主角的執著與意念'.split('\n')
  },
  {
    actor: '張艾嘉',
    optionName: '霓虹光管的存在與消失',
    award: '最佳紀錄短片',
    reason: '在有限的篇幅之中留下雋永的紀錄，\n在快速變遷的現代別具意義。'.split('\n')
  },
  {
    actor: '阮經天',
    optionName: '新人加入後的化學效應',
    award: '最佳男主角',
    reason: '渾然天成的表演牽引觀者的情緒，\n對角色產生極大的同理。'.split('\n')
  }
];

export const getStepA4Actor = () => {
  const candidates = actorList.filter((actor) => actor.category === Category.Time);
  arrayShuffle(candidates);
  return candidates.slice(0, 4);
};

export const getStepB4Actor = () => {
  const candidates = actorList.filter((actor) => actor.category === Category.Person);
  arrayShuffle(candidates);
  return candidates.slice(0, 4);
};

export const getStepC4Actor = (stepACode: StepACode, stepBCode: StepBCode) => {
  const actors = actorList.filter((actor) => actor.category === Category.Thing);
  arrayShuffle(actors);

  const actorRestrictionList = codeToStepCActor[stepACode][stepBCode];

  const candidates = actors.filter((actor) => actorRestrictionList.includes(actor.name));

  return candidates.slice(0, 4);
};

export const getStepAActorCode = (actorName: keyof typeof stepAActorToCode) => {
  return stepAActorToCode[actorName];
};

export const getStepBActorCode = (stepACode: StepACode, actorName: keyof (typeof stepBActorToCode)[StepACode]) => {
  return stepBActorToCode[stepACode][actorName];
};

export const getAwardOption = (actorName: string) => {
  const options = awardsList.filter((award) => award.actor === actorName);
  if (options.length === 1) {
    return options[0];
  } else if (options.length > 1) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  throw new Error('Could not find award by given actor:' + actorName);
};

// title -> white text, subtitle -> red text
const awardNomineesList = [
  {
    award: { zh: '最佳劇情片', en: 'Nominees for Best Narrative Feature' },
    nominees: [
      { title: '《石門》', subtitle: 'Stonewalling' },
      { title: '《關於我和鬼變成家人的那件事》', subtitle: 'Marry My Dead Body' },
      { title: '《年少日記》', subtitle: 'Time Still Turns the Pages' },
      { title: '《疫起》', subtitle: 'Eye of the Storm' },
      { title: '《五月雪》', subtitle: 'Snow in Midsummer' }
    ]
  },
  {
    award: { zh: '最佳導演', en: 'Nominees for Best Director' },
    nominees: [
      { title: '黃驥   大塚龍治', subtitle: '《石門》Stonewalling' },
      { title: '程偉豪', subtitle: '《關於我和鬼變成家人的那件事》\nMarry My Dead Body' },
      { title: '蕭雅全', subtitle: '《老狐狸》Old Fox' },
      { title: '張吉安', subtitle: '《五月雪》\nSnow in Midsummer' },
      { title: '黃精甫', subtitle: '《周處除三害》\nThe Pig, the Snake and the Pigeon' }
    ]
  },
  {
    award: { zh: '最佳女主角', en: 'Nominees for Best Leading Actress' },
    nominees: [
      { title: '胡伶', subtitle: "《菠蘿，鳳梨》\nCarp Leaping Over Dragon's Gate" },
      { title: '林品彤', subtitle: '《小曉》Trouble Girl' },
      { title: '鍾雪瑩', subtitle: '《填詞撚》\nThe Lyricist Wannabe' },
      { title: '陸小芬', subtitle: '《本日公休》Day Off' },
      { title: '余香凝', subtitle: '《白日之下》In Broad Daylight' }
    ]
  },
  {
    award: { zh: '最佳男主角', en: 'Nominees for Best Leading Actor' },
    nominees: [
      { title: '許光漢', subtitle: '《關於我和鬼變成家人的那件事》\nMarry My Dead Body' },
      { title: '林柏宏', subtitle: '《關於我和鬼變成家人的那件事》\nMarry My Dead Body' },
      { title: '吳慷仁', subtitle: '《富都青年》Abang Adik' },
      { title: '王柏傑', subtitle: '《疫起》Eye of the Storm' },
      { title: '阮經天', subtitle: '《周處除三害》\nThe Pig, the Snake and the Pigeon' }
    ]
  },
  {
    award: { zh: '最佳女配角', en: 'Nominees for Best Supporting Actress' },
    nominees: [
      { title: '劉奕兒', subtitle: '《老狐狸》Old Fox' },
      { title: '陳意涵', subtitle: '《小曉》Trouble Girl' },
      { title: '萬芳', subtitle: '《五月雪》\nSnow in Midsummer' },
      { title: '方志友', subtitle: '《本日公休》Day Off' },
      { title: '梁雍婷', subtitle: '《白日之下》In Broad Daylight' }
    ]
  },
  {
    award: { zh: '最佳男配角', en: 'Nominees for Best Supporting Actor' },
    nominees: [
      { title: '陳澤耀', subtitle: '《富都青年》Abang Adik' },
      { title: '黃梓樂', subtitle: '《年少日記》\nTime Still Turns the Pages' },
      { title: '陳慕義', subtitle: '《老狐狸》Old Fox' },
      { title: '傅孟柏', subtitle: '《本日公休》Day Off' },
      { title: '林保怡', subtitle: '《白日之下》In Broad Daylight' }
    ]
  },
  {
    award: { zh: '最佳新演員', en: 'Nominees for Best New Performer' },
    nominees: [
      { title: '鄧金煌', subtitle: '《富都青年》Abang Adik' },
      { title: '洪瑜鴻（春風）', subtitle: '《請問，還有哪裡需要加強》\nMiss Shampoo' },
      { title: '胡語恆', subtitle: '《少男少女》\nA Boy and a Girl' },
      { title: '謝咏欣', subtitle: '《但願人長久》Fly Me to the Moon' },
      { title: '葉曉霏', subtitle: "《青春並不溫柔》Who'll Stop the Rain" }
    ]
  },
  {
    award: { zh: '最佳新導演', en: 'Nominees for Best New Director' },
    nominees: [
      { title: '阿爛', subtitle: '《這個女人》This Woman' },
      { title: '王禮霖', subtitle: '《富都青年》Abang Adik' },
      { title: '卓亦謙', subtitle: '《年少日記》\nTime Still Turns the Pages' },
      { title: '李鴻其', subtitle: '《愛是一把槍》Love Is a Gun' },
      { title: '孫杰', subtitle: '《大山來了》The Mountain Is Coming' }
    ]
  },
  {
    award: { zh: '最佳劇情短片', en: 'Nominees for Best Live Action Short Film' },
    nominees: [
      { title: '《回收場的夏天》\nReclaim My Summer', subtitle: '陳浩維' },
      { title: '《橋頂少年》\nBoys on the Bridge', subtitle: '張不乙' },
      { title: '《裊裊》Al Niente', subtitle: '林璐' },
      { title: '《直到我看見彼岸》\nBefore the Box Gets Emptied', subtitle: '何思蔚' },
      { title: '《公鹿》The Stag', subtitle: '朱建安' }
    ]
  },
  {
    award: { zh: '最佳動畫短片', en: 'Nominees for Best Animated Short Film' },
    nominees: [
      { title: '《鷺鷥河》The Egret River', subtitle: '劉琬琳' },
      { title: '《白雲蒼狗》\nEver-Changing Clouds, Like My Ever-Changing Life', subtitle: '陳鏹' },
      { title: '《夏夢迴》Monsoon Blue', subtitle: '陳嘉言   黃曉傑' },
      { title: '《幽暗小徑的鬼》\nGhost of the Dark Path', subtitle: '王登鈺' },
      { title: '《纏》Braided', subtitle: '張晨曦' }
    ]
  },
  {
    award: { zh: '最佳紀錄短片', en: ' Nominees for Best Documentary Short Film' },
    nominees: [
      { title: '《備忘錄》The Memo', subtitle: '窮山惡水電影小組' },
      { title: '《另一面鏡子裡的夢中之夢》\nOf Dreams in the Dream of Another Mirror', subtitle: '朱云逸' },
      { title: '《鯨之聲》\nHearing from the Dolphin', subtitle: '張弘榤' },
      { title: '《乙方及其後》\nEviction and Beyond', subtitle: '劉人鳳' },
      { title: '《吹夢無蹤》Girl of Wind', subtitle: '袁楠茜' }
    ]
  },
  {
    award: { zh: '最佳紀錄片', en: 'Nominees for Best Documentary Feature' },
    nominees: [
      { title: '《詩》Elegies', subtitle: '許鞍華' },
      { title: '《何處》Where', subtitle: '蔡明亮' },
      { title: '《撼山河  撼向世界》\nFree Beats: The Musical Journey of CHEN Ming Chang', subtitle: '林正盛' },
      { title: '《診所》The Clinic', subtitle: '趙德胤' },
      { title: '《青春（春）》YOUTH (Spring)', subtitle: '王兵' }
    ]
  },
  {
    award: { zh: '最佳動畫片', en: 'Nominees for Best Animated Feature' },
    nominees: [{ title: '《八戒》PIGSY', subtitle: '邱立偉' }]
  },
  {
    award: { zh: '最佳攝影', en: 'Nominees for Best Cinematography' },
    nominees: [
      { title: 'Kartik VIJAY', subtitle: '《富都青年》Abang Adik' },
      { title: '包軒鳴', subtitle: '《疫起》Eye of the Storm' },
      { title: '許之駿', subtitle: '《五月雪》\nSnow in Midsummer' },
      { title: '余靜萍', subtitle: '《（真）新的一天》Fish Memories' },
      { title: '陳麒文', subtitle: "《青春並不溫柔》Who'll Stop the Rain" }
    ]
  },
  {
    award: { zh: '最佳剪輯', en: 'Nominees for Best Film Editing' },
    nominees: [
      { title: '廖慶松   大塚龍治', subtitle: '《石門》Stonewalling' },
      { title: '陳俊宏', subtitle: '《關於我和鬼變成家人的那件事》\nMarry My Dead Body' },
      { title: '陳曉進   卓亦謙', subtitle: '《年少日記》\nTime Still Turns the Pages' },
      { title: '解孟儒', subtitle: '《疫起》Eye of the Storm' },
      { title: '黃精甫', subtitle: '《周處除三害》\nThe Pig, the Snake and the Pigeon' }
    ]
  },
  {
    award: { zh: '最佳動作設計', en: 'Nominees for Best Action Choreography' },
    nominees: [
      { title: '邱立偉   王俊雄', subtitle: '《八戒》PIGSY' },
      { title: '洪昰顥', subtitle: '《關於我和鬼變成家人的那件事》\nMarry My Dead Body' },
      { title: '洪昰顥', subtitle: '《請問，還有哪裡需要加強》\nMiss Shampoo' },
      { title: '吳俊希', subtitle: '《女鬼橋2：怨鬼樓》\nThe Bridge Curse: Ritual' },
      { title: '洪昰顥', subtitle: '《周處除三害》\nThe Pig, the Snake and the Pigeon' }
    ]
  },
  {
    award: { zh: '最佳原創電影歌曲', en: 'Nominees for Best Original Film Song' },
    nominees: [
      { title: '〈親愛的對象〉', subtitle: '《關於我和鬼變成家人的那件事》\nMarry My Dead Body' },
      { title: '〈一路以來〉', subtitle: '《富都青年》Abang Adik' },
      { title: '〈鳥仔〉', subtitle: '《老狐狸》Old Fox' },
      { title: '〈五月的人〉', subtitle: '《五月雪》Snow in Midsummer' },
      { title: '〈同款〉', subtitle: '《本日公休》Day Off' }
    ]
  },
  {
    award: { zh: '最佳原創電影音樂', en: 'Nominees for Best Original Film Score' },
    nominees: [
      { title: '侯志堅', subtitle: '《老狐狸》Old Fox' },
      { title: '福多瑪', subtitle: '《小曉》Trouble Girl' },
      { title: '盧律銘', subtitle: '《疫起》Eye of the Storm' },
      { title: '余家和   張吉安', subtitle: '《五月雪》Snow in Midsummer' },
      {
        title: '盧律銘   林孝親   林思妤   保卜・巴督路',
        subtitle: '《周處除三害》\nThe Pig, the Snake and the Pigeon'
      }
    ]
  },
  {
    award: { zh: '最佳音效', en: 'Nominees for Best Sound Effects' },
    nominees: [
      { title: '胡序嵩   李俊逸', subtitle: '《小曉》Trouble Girl' },
      { title: '簡豐書   孫思媛   湯湘竹', subtitle: '《疫起》Eye of the Storm' },
      { title: '杜篤之   吳書瑤   陳冠廷', subtitle: '《五月雪》\nSnow in Midsummer' },
      { title: '杜篤之   黃元澤', subtitle: '《少男少女》A Boy and a Girl' },
      { title: '簡豐書   陳家俐   楊家慎   湯湘竹', subtitle: '《周處除三害》\nThe Pig, the Snake and the Pigeon' }
    ]
  },
  {
    award: { zh: '最佳視覺效果', en: 'Nominees for Best Visual Effects' },
    nominees: [
      { title: '凃維廷', subtitle: '《小曉》Trouble Girl' },
      { title: '嚴振欽', subtitle: '《疫起》Eye of the Storm' },
      { title: '林奇鋒   林妍伶   劉家萱   李志緯', subtitle: '《女鬼橋2：怨鬼樓》\nThe Bridge Curse: Ritual' },
      { title: '郭憲聰   陳姵均   王建程', subtitle: '《周處除三害》\nThe Pig, the Snake and the Pigeon' }
    ]
  },
  {
    award: { zh: '最佳造型設計', en: 'Nominees for Best Makeup & Costume Design' },
    nominees: [
      { title: '黃菊清', subtitle: '《富都青年》Abang Adik' },
      { title: '王誌成   高仙齡', subtitle: '《老狐狸》Old Fox' },
      { title: '黃菊清', subtitle: '《五月雪》\nSnow in Midsummer' },
      { title: '葉嘉茵   蕭百宸   劉顯嘉', subtitle: '《請問，還有哪裡需要加強》\nMiss Shampoo' },
      { title: '潘燚森   陳巧倩', subtitle: '《白日之下》In Broad Daylight' }
    ]
  },
  {
    award: { zh: '最佳美術設計', en: 'Nominees for Best Art Direction' },
    nominees: [
      { title: '王誌成   尤麗雯', subtitle: '《老狐狸》Old Fox' },
      { title: '黃美清   鄭嘉政', subtitle: '《小曉》Trouble Girl' },
      { title: '黃美清   涂碩峯', subtitle: '《疫起》Eye of the Storm' },
      { title: '吳若昀', subtitle: '《請問，還有哪裡需要加強》\nMiss Shampoo' },
      { title: '潘燚森、謝靄霖', subtitle: '《白日之下》In Broad Daylight' }
    ]
  },
  {
    award: { zh: '最佳改編劇本', en: 'Nominees for Best Adapted Screenplay' },
    nominees: [
      { title: '吳瑾蓉   程偉豪', subtitle: '《關於我和鬼變成家人的那件事》\nMarry My Dead Body' },
      { title: '黃綺琳', subtitle: '《填詞撚》The Lyricist Wannabe' },
      { title: '張吉安', subtitle: '《五月雪》\nSnow in Midsummer' },
      { title: '祝紫嫣', subtitle: '《但願人長久》Fly Me to the Moon' }
    ]
  },
  {
    award: { zh: '最佳原著劇本', en: 'Nominees for Best Original Screenplay' },
    nominees: [
      { title: '閆嘯', subtitle: "《菠蘿，鳳梨》\nCarp Leaping Over Dragon's Gate" },
      { title: '黃驥   大塚龍治', subtitle: '《石門》Stonewalling' },
      { title: '卓亦謙', subtitle: '《年少日記》Time Still Turns the Pages' },
      { title: '靳家驊', subtitle: '《小曉》Trouble Girl' },
      { title: '孫杰', subtitle: '《大山來了》The Mountain Is Coming' }
    ]
  }
];

export const getAwardNominees = (awardZhName: string) => {
  const item = awardNomineesList.find((item) => item.award.zh === awardZhName);

  if (item) return item;
  throw new Error('Could not find award & nominees item');
};
