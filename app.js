// 药品数据库（直接嵌入，共229种药品）
const medicines = [
  { id: 'A001', name: '氯化汞', location: '402-A' },
  { id: 'A002', name: '无水硫酸钠', location: '402-A' },
  { id: 'A003', name: '变色硅胶', location: '402-A' },
  { id: 'A004', name: '硫酸镍', location: '402-A' },
  { id: 'A005', name: '石墨粉', location: '402-A' },
  { id: 'A006', name: '硫酸亚铁', location: '402-A' },
  { id: 'A007', name: '二茂铁', location: '402-A' },
  { id: 'A008', name: '过氧化苯甲酰', location: '402-A' },
  { id: 'A009', name: '铁氰化钾', location: '402-A' },
  { id: 'A010', name: '氢氧化钙', location: '402-A' },
  { id: 'A011', name: '氯化钾', location: '402-A' },
  { id: 'A012', name: '碳酸氢钠', location: '402-A' },
  { id: 'A013', name: '三氯化铝', location: '402-A' },
  { id: 'A014', name: '三氯化铁', location: '402-A' },
  { id: 'A015', name: '酚酞', location: '402-A' },
  { id: 'A016', name: '分子筛', location: '402-A' },
  { id: 'A017', name: '氢氧化钠', location: '402-A' },
  { id: 'A018', name: '溴化钾', location: '402-A' },
  { id: 'A019', name: '硝酸钠', location: '402-A' },
  { id: 'A020', name: '2，2-双（羟甲基）丙酸', location: '402-A' },
  { id: 'A021', name: '三羟甲基丙烷', location: '402-A' },
  { id: 'A022', name: '氯化钠', location: '402-A' },
  { id: 'A023', name: '4-氨基安替比林', location: '402-A' },
  { id: 'A024', name: '氟钛酸铵', location: '402-A' },
  { id: 'A025', name: '硫酸亚铁铵', location: '402-A' },
  { id: 'A026', name: '硫酸氢钠', location: '402-A' },
  { id: 'A027', name: '不明', location: '402-A' },
  { id: 'A028', name: '伊红丫', location: '402-A' },
  { id: 'A029', name: '硫酸铝', location: '402-A' },
  { id: 'A030', name: '硝酸镉', location: '402-A' },
  { id: 'A031', name: '硫酸锰', location: '402-A' },
  { id: 'A032', name: '乙二胺四乙酸二钠', location: '402-A' },
  { id: 'A033', name: '无水碳酸钠', location: '402-A' },
  { id: 'A034', name: '柠檬酸', location: '402-A' },
  { id: 'A035', name: '氯化钴', location: '402-A' },
  { id: 'A036', name: '无水乙醇', location: '402-A' },
  { id: 'A037', name: '磺胺嘧啶', location: '402-A' },
  { id: 'A038', name: '1-丁基-3-甲基咪唑双三氟甲磺酰亚胺盐', location: '402-A' },
  { id: 'A039', name: '丙烯酸乙氧基乙酯', location: '402-A' },
  { id: 'A040', name: '2，2-二乙氧基苯乙酮', location: '402-A' },
  { id: 'A041', name: '223444六氟丁基丙烯酸酯', location: '402-A' },
  { id: 'A042', name: '三乙二醇二甲醚', location: '402-A' },
  { id: 'A043', name: '双三氟甲磺酰基酰亚胺锌', location: '402-A' },
  { id: 'A044', name: '丙酮', location: '402-A' },
  { id: 'A045', name: '四乙二醇二甲醚', location: '402-A' },
  { id: 'A046', name: '二甲基硅油', location: '402-A' },
  { id: 'A047', name: '聚乙二醇', location: '402-A' },
  { id: 'A048', name: '碳酸二甲酯', location: '402-A' },
  { id: 'A049', name: '油酸', location: '402-A' },
  { id: 'A050', name: '甲苯', location: '402-A' },
  { id: 'A051', name: '甲酸', location: '402-A' },
  { id: 'A052', name: '光引发剂', location: '402-A' },
  { id: 'A053', name: '肉豆蔻酸异丙酯', location: '402-A' },
  { id: 'A054', name: '三乙胺', location: '402-A' },
  { id: 'A055', name: '乙醛酸水合物', location: '402-A' },
  { id: 'A056', name: '苯酚', location: '402-A' },
  { id: 'A057', name: '乙二醛水合物', location: '402-A' },
  { id: 'A058', name: '苯酚', location: '402-A' },
  { id: 'A059', name: '水合肼', location: '402-A' },
  { id: 'A060', name: '吐温', location: '402-A' },
  { id: 'A061', name: 'NN二甲基甲酰胺', location: '402-A' },
  { id: 'A062', name: 'IPDI', location: '402-A' },
  { id: 'A063', name: '甲醇', location: '402-A' },
  { id: 'A064', name: '乙醇胺', location: '402-A' },
  { id: 'A065', name: '氯化铋', location: '402-A' },
  { id: 'A066', name: '乙二胺二邻苯基乙酸钠', location: '402-A' },
  { id: 'A067', name: '二甲苯', location: '402-A' },
  { id: 'A068', name: '戊二醛水溶液', location: '402-A' },
  { id: 'A069', name: '乙酸异丁酯', location: '402-A' },
  { id: 'A070', name: '聚丙二醇', location: '402-A' },
  { id: 'A071', name: '二丁基二月桂酸锡', location: '402-A' },
  { id: 'A072', name: 'NMP甲基吡咯烷酮', location: '402-A' },
  { id: 'A073', name: '乙二胺', location: '402-A' },
  { id: 'A074', name: '乙二醇二甲醚', location: '402-A' },
  { id: 'A075', name: '二甲基硅油', location: '402-A' },
  { id: 'A076', name: '二乙醇胺', location: '402-A' },
  { id: 'A077', name: '甲基吗啉盐酸水合物', location: '402-A' },
  { id: 'A078', name: '二聚酰', location: '402-A' },
  { id: 'A079', name: '羊毛脂', location: '402-A' },
  { id: 'A080', name: '冰乙酸', location: '402-A' },
  { id: 'A081', name: '三氯甲烷', location: '402-A' },
  { id: 'A082', name: '癸二酸', location: '402-A' },
  { id: 'A083', name: '蓖麻油', location: '402-A' },
  { id: 'A084', name: '耐高温流平剂', location: '402-A' },
  { id: 'A085', name: '水性硅油', location: '402-A' },
  { id: 'A086', name: '丙烯酸六氟丁酯', location: '402-A' },
  { id: 'A087', name: '13丁二醇', location: '402-A' },
  { id: 'A088', name: '白蜂蜡', location: '402-A' },
  { id: 'A089', name: '22二羟甲基丙酸', location: '402-A' },
  { id: 'A090', name: '111三羟甲基丙烷', location: '402-A' },
  { id: 'A091', name: '二月桂酸二丁锡', location: '402-A' },
  { id: 'A092', name: '双2羟基乙基二硫醚', location: '402-A' },
  { id: 'A093', name: '无水乙醇', location: '402-A' },
  { id: 'A094', name: '聚四氢呋喃', location: '402-A' },
  { id: 'A095', name: '二正丁胺', location: '402-A' },
  { id: 'A096', name: '水性聚氨酯树脂', location: '402-A' },
  { id: 'A097', name: '14丁二醇', location: '402-A' },
  { id: 'A098', name: '二甲基二硫', location: '402-A' },
  { id: 'A099', name: '三氯化铁', location: '402-A' },
  { id: 'A100', name: '氯化亚铁', location: '402-A' },
  { id: 'A101', name: '聚碳酸酯二元醇2000', location: '402-A' },
  { id: 'A102', name: '氢氧化钾', location: '402-A' },
  { id: 'A103', name: '柠檬酸铵', location: '402-A' },
  { id: 'A104', name: '无水氯化钙', location: '402-A' },
  { id: 'A105', name: '硫酸', location: '402-A' },
  { id: 'A106', name: '凡士林', location: '402-A' },
  { id: 'A107', name: '不明', location: '402-A' },
  { id: 'A108', name: '不明', location: '402-A' },
  { id: 'A109', name: '双三氟甲磺酰亚胺盐', location: '402-A' },
  { id: 'A110', name: '硫酸锌', location: '402-A' },
  { id: 'A111', name: 'L脯氨酸', location: '402-A' },
  { id: 'A112', name: '硫酸铁', location: '402-A' },
  { id: 'A113', name: '导电炭黑', location: '402-A' },
  { id: 'A114', name: '丙烯酸甲酯', location: '402-A' },
  { id: 'A115', name: '无水乙醇', location: '402-A' },
  { id: 'A116', name: '氢氧化钠', location: '402-A' },
  { id: 'A117', name: '无水碳酸钠', location: '402-A' },
  { id: 'A118', name: '二氧化锰', location: '402-A' },
  { id: 'A119', name: 'MES', location: '402-A' },
  { id: 'A120', name: '丙烯酸乙氧基乙酯', location: '402-A' },
  { id: 'A121', name: '双三氟甲磺酰基酰亚胺锌', location: '402-A' },
  { id: 'A122', name: '镍锰铁酸钠', location: '402-A' },
  { id: 'A123', name: 'PVDF', location: '402-A' },
  { id: 'A124', name: '硫酸镍', location: '402-A' },
  { id: 'A125', name: '硫酸锰', location: '402-A' },
  { id: 'A126', name: '五氧化二钒', location: '402-A' },
  { id: 'A127', name: '溴化钾', location: '402-A' },
  { id: 'A128', name: '二茂铁甲酸', location: '402-A' },
  { id: 'A129', name: 'NN二甲基甲酰胺', location: '402-A' },
  { id: 'A130', name: '无水乙醇', location: '402-A' },
  { id: 'A131', name: '乙酰丙酮氧钒', location: '402-A' },
  { id: 'A132', name: '甲基硅油', location: '402-A' },
  { id: 'A133', name: '丙烯酸甲酯', location: '402-A' },
  { id: 'A134', name: '不明', location: '402-A' },
  { id: 'A135', name: '硝酸钠', location: '402-A' },
  { id: 'A136', name: '甲醇', location: '402-A' },
  { id: 'A137', name: '乙二胺', location: '402-A' },
  { id: 'A138', name: '丙烯酸甲酯', location: '402-A' },
  { id: 'A139', name: '钛酸丁酯（空）', location: '402-A' },
  { id: 'A140', name: '甲醇', location: '402-A' },
  { id: 'A141', name: '无水乙醇', location: '402-A' },
  { id: 'A142', name: '不明', location: '402-A' },
  { id: 'A143', name: '二乙醇胺', location: '402-A' },
  { id: 'A144', name: '甲醇', location: '402-A' },
  { id: 'A145', name: '邻苯二甲酸二丁酯', location: '402-A' },
  { id: 'A146', name: '过硫酸铵', location: '402-A' },
  { id: 'A147', name: '十二烷基苯磺酸钠', location: '402-A' },
  { id: 'B001', name: '过氧化苯甲酰', location: '403-A' },
  { id: 'B002', name: '过硫酸铵', location: '403-A' },
  { id: 'B003', name: '结晶乙酸钠', location: '403-A' },
  { id: 'B004', name: '硫酸二氢钾', location: '403-A' },
  { id: 'B005', name: '十二烷基硫酸钠', location: '403-A' },
  { id: 'B006', name: '十二烷基苯磺酸钠', location: '403-A' },
  { id: 'B007', name: '可溶性淀粉', location: '403-A' },
  { id: 'B008', name: '聚乙烯醇', location: '403-A' },
  { id: 'B009', name: '碳纳米管粉末', location: '403-A' },
  { id: 'B010', name: '硝酸铁', location: '403-A' },
  { id: 'B011', name: '羧甲基纤维素钠', location: '403-A' },
  { id: 'B012', name: '重铬酸钾', location: '403-A' },
  { id: 'B013', name: '膨润土', location: '403-A' },
  { id: 'B014', name: '氧化铌', location: '403-A' },
  { id: 'B015', name: '甲苯-4-磺酸', location: '403-A' },
  { id: 'B016', name: '多聚磷酸钠', location: '403-A' },
  { id: 'B017', name: '葡萄糖酸钠', location: '403-A' },
  { id: 'B018', name: '氯化钠', location: '403-A' },
  { id: 'B019', name: 'PAA（不明）', location: '403-A' },
  { id: 'B020', name: '硅酸钠', location: '403-A' },
  { id: 'B021', name: '锌粉', location: '403-A' },
  { id: 'B022', name: '结晶四氯化锡', location: '403-A' },
  { id: 'B023', name: '氟钛酸铵', location: '403-A' },
  { id: 'B024', name: '升华硫', location: '403-A' },
  { id: 'B025', name: '葡萄糖', location: '403-A' },
  { id: 'B026', name: '司班', location: '403-A' },
  { id: 'B027', name: '乙酸镍', location: '403-A' },
  { id: 'B028', name: '氢氧化钠', location: '403-A' },
  { id: 'B029', name: '磷酸铁锂', location: '403-A' },
  { id: 'B030', name: '三羟甲基丙烷', location: '403-A' },
  { id: 'B031', name: '硝酸锂', location: '403-A' },
  { id: 'B032', name: '碳酸铵', location: '403-A' },
  { id: 'B033', name: '柠檬酸钠', location: '403-A' },
  { id: 'B034', name: '七水和硫酸亚铁', location: '403-A' },
  { id: 'B035', name: '硝酸铈酸', location: '403-A' },
  { id: 'B036', name: '氯化铵', location: '403-A' },
  { id: 'B037', name: '二氰二胺', location: '403-A' },
  { id: 'B038', name: '乙酸锌', location: '403-A' },
  { id: 'B039', name: '硫酸亚铁铵', location: '403-A' },
  { id: 'B040', name: '硝酸铋', location: '403-A' },
  { id: 'B041', name: '油酸钠', location: '403-A' },
  { id: 'B042', name: '柠檬酸铵', location: '403-A' },
  { id: 'B043', name: '钴酸锂', location: '403-A' },
  { id: 'B044', name: '聚乙烯吡咯啉酮', location: '403-A' },
  { id: 'B045', name: '硒粉', location: '403-A' },
  { id: 'B046', name: '羟基丁二酰亚胺', location: '403-A' },
  { id: 'B047', name: '二氧化钛', location: '403-A' },
  { id: 'B048', name: '甲基橙', location: '403-A' },
  { id: 'B049', name: '耐碱性渗透剂', location: '403-A' },
  { id: 'B050', name: '无水乙醇', location: '403-A' },
  { id: 'B051', name: '冰乙酸', location: '403-A' },
  { id: 'B052', name: '乙二醇', location: '403-A' },
  { id: 'B053', name: '三乙醇胺', location: '403-A' },
  { id: 'B054', name: '丙酮', location: '403-A' },
  { id: 'B055', name: '硅烷偶联剂', location: '403-A' },
  { id: 'B056', name: '环氧树脂', location: '403-A' },
  { id: 'B057', name: '乙酰丙酮', location: '403-A' },
  { id: 'B058', name: '乙酸乙酯', location: '403-A' },
  { id: 'B059', name: '二甲苯', location: '403-A' },
  { id: 'B060', name: '不明', location: '403-A' },
  { id: 'B061', name: '四氢呋喃', location: '403-A' },
  { id: 'B062', name: '氯化锌', location: '403-A' },
  { id: 'B063', name: '氨水', location: '403-A' },
  { id: 'B064', name: '吐温', location: '403-A' },
  { id: 'B065', name: '甲醇', location: '403-A' },
  { id: 'B066', name: 'NN二甲基甲酰胺', location: '403-A' },
  { id: 'B067', name: '液体石蜡', location: '403-A' },
  { id: 'B068', name: '乙二醇', location: '403-A' },
  { id: 'B069', name: '硅油', location: '403-A' },
  { id: 'B070', name: '植酸肌醇六磷酸', location: '403-A' },
  { id: 'B071', name: '乙酸乙酯', location: '403-A' },
  { id: 'B072', name: '正硅酸乙酯', location: '403-A' },
  { id: 'B073', name: '乙醇胺', location: '403-A' },
  { id: 'B074', name: 'NMP甲基吡咯烷酮', location: '403-A' },
  { id: 'B075', name: '溴水', location: '403-A' },
  { id: 'B076', name: '甲醇', location: '403-A' },
  { id: 'B077', name: '甲醛', location: '403-A' },
  { id: 'B078', name: '孟加拉油', location: '403-A' },
  { id: 'B079', name: '三乙烯四胺', location: '403-A' },
  { id: 'B080', name: '聚乙二醇', location: '403-A' },
  { id: 'B081', name: '盐酸', location: '403-A' },
  { id: 'B082', name: '甲苯-4-磺酸', location: '403-A' },
  { id: 'B083', name: '美国馏分燃料', location: '403-A' },
  { id: 'B084', name: '乙二胺', location: '403-A' },
  { id: 'B085', name: '洗涤剂', location: '403-A' },
  { id: 'B086', name: '丙烯酸甲酯', location: '403-A' },
  { id: 'B087', name: '无水乙醇', location: '403-A' },
  { id: 'B088', name: '石墨', location: '403-A' },
  { id: 'B089', name: '不明', location: '403-A' },
  { id: 'B090', name: '低压聚乙烯', location: '403-A' },
  { id: 'B091', name: '沥青石墨', location: '403-A' },
  { id: 'B092', name: '活性炭', location: '403-A' },
  { id: 'B093', name: '二氯甲烷', location: '403-A' },
  { id: 'B094', name: '异丙醇', location: '403-A' },
  { id: 'B095', name: '盐酸', location: '403-A' },
  { id: 'B096', name: '增色剂', location: '403-A' },
  { id: 'B097', name: '戊二醛', location: '403-A' },
  { id: 'B098', name: '水溶性酚多晶', location: '403-A' },
  { id: 'B099', name: '溴甲酚绿', location: '403-A' },
  { id: 'B100', name: '蓖麻油酸锌脂', location: '403-A' },
  { id: 'B101', name: '校正液', location: '403-A' },
  { id: 'B102', name: '氯酸钾', location: '403-A' },
  { id: 'B103', name: '水溶性咪唑啉', location: '403-A' },
  { id: 'B104', name: '双癸基二甲基氯化铵', location: '403-A' },
  { id: 'B105', name: '七水合硫酸亚铁', location: '403-A' },
  { id: 'B106', name: '壳聚糖', location: '403-A' },
  { id: 'B107', name: '长波烟941', location: '403-A' },
  { id: 'B108', name: '硅藻土', location: '403-A' },
  { id: 'B109', name: '单过硫氢钾消毒粉', location: '403-A' },
  { id: 'B110', name: '蓖麻油酸锌', location: '403-A' },
  { id: 'B111', name: '电气石', location: '403-A' },
  { id: 'B112', name: '氯化钠', location: '403-A' },
  { id: 'B113', name: '氢氟酸', location: '403-A' },
  { id: 'B114', name: '乙醚', location: '403-A' },
  { id: 'B115', name: '无水乙醇', location: '403-A' },
  { id: 'B116', name: '乳化剂', location: '403-A' },
  { id: 'B117', name: '清洁剂', location: '403-A' },
  { id: 'B118', name: '甲醇', location: '403-A' },
  { id: 'B119', name: '镀晶剂', location: '403-A' },
  { id: 'B120', name: '多壁碳纳米管', location: '403-A' },
  { id: 'B121', name: '甲醇', location: '403-A' },
  { id: 'C001', name: '硫酸铁铵', location: '404-A' },
  { id: 'C002', name: '钨酸钠', location: '404-A' },
  { id: 'C003', name: '三乙烯二胺', location: '404-A' },
  { id: 'C004', name: '111三羟甲基丙烷', location: '404-A' },
  { id: 'C005', name: '草酸', location: '404-A' },
  { id: 'C006', name: '反丁烯二酸', location: '404-A' },
  { id: 'C007', name: '乙二醇', location: '404-A' },
  { id: 'C008', name: '硝酸镉', location: '404-A' },
  { id: 'C009', name: '硫脲', location: '404-A' },
  { id: 'C010', name: '萘', location: '404-A' },
  { id: 'C011', name: '琼脂粉', location: '404-A' },
  { id: 'C012', name: '丙烯酸', location: '404-A' },
  { id: 'C013', name: '硬脂酸', location: '404-A' },
  { id: 'C014', name: '氧化锌', location: '404-A' },
  { id: 'C015', name: '乙二胺四乙酸二钠', location: '404-A' },
  { id: 'C016', name: '碳酸氢钠', location: '404-A' },
  { id: 'C017', name: '无水亚硫酸钠', location: '404-A' },
  { id: 'C018', name: '氢氧化钠', location: '404-A' },
  { id: 'C019', name: '铝酸铵', location: '404-A' },
  { id: 'C020', name: '脲', location: '404-A' },
  { id: 'C021', name: '重铬酸钾', location: '404-A' },
  { id: 'C022', name: '赤磷', location: '404-A' },
  { id: 'C023', name: '乙酸乙烯酯共聚物', location: '404-A' },
  { id: 'C024', name: '高锰酸钾', location: '404-A' },
  { id: 'C025', name: '氢氧化钾', location: '404-A' },
  { id: 'C026', name: '环氧树脂', location: '404-A' },
  { id: 'C027', name: '氯化锌', location: '404-A' },
  { id: 'C028', name: '三氯化铁', location: '404-A' },
  { id: 'C029', name: '甲酸', location: '404-A' },
  { id: 'C030', name: '戊二醇', location: '404-A' },
  { id: 'C031', name: '甲醇', location: '404-A' },
  { id: 'C032', name: '无水乙醇', location: '404-A' },
  { id: 'C033', name: '二氧化锰', location: '404-A' },
  { id: 'C034', name: '过氧化氢', location: '404-A' },
  { id: 'C035', name: '乙二醇', location: '404-A' },
  { id: 'C036', name: '氯化钙', location: '404-A' },
  { id: 'C037', name: '萘酚', location: '404-A' },
  { id: 'C038', name: '三乙醇胺', location: '404-A' },
  { id: 'C039', name: '乙腈', location: '404-A' },
  { id: 'C040', name: '氢氧化钾', location: '404-A' },
  { id: 'C041', name: '氯水', location: '404-A' },
  { id: 'C042', name: '醋酸乙烯', location: '404-A' },
  { id: 'C043', name: '戊二醇', location: '404-A' },
  { id: 'C044', name: '焦硫酸钠', location: '404-A' },
  { id: 'C045', name: '硝酸铋', location: '404-A' },
  { id: 'C046', name: '偏钒酸铵', location: '404-A' },
  { id: 'C047', name: '氧化钠', location: '404-A' },
  { id: 'C048', name: '十六烷基三甲基溴化铵', location: '404-A' },
  { id: 'C049', name: '氨水', location: '404-A' },
  { id: 'C050', name: '无水乙醇', location: '404-A' },
  { id: 'C051', name: '石油醚', location: '404-A' },
  { id: 'D001', name: '硬脂酸', location: '405-A' },
  { id: 'D002', name: '氟硅酸钠', location: '405-A' },
  { id: 'D003', name: '草酸钙', location: '405-A' },
  { id: 'D004', name: '硫酸钡', location: '405-A' },
  { id: 'D005', name: '草酸', location: '405-A' },
  { id: 'D006', name: '硅酸钠', location: '405-A' },
  { id: 'D007', name: '不明', location: '405-A' },
  { id: 'D008', name: '乙二胺四乙酸二钠', location: '405-A' },
  { id: 'D009', name: '草酸钠', location: '405-A' },
  { id: 'D010', name: '氯化钙', location: '405-A' },
  { id: 'D011', name: '氢氧化铝', location: '405-A' },
  { id: 'D012', name: '十二烷基硫酸铵', location: '405-A' },
  { id: 'D013', name: '硝酸镁', location: '405-A' },
  { id: 'D014', name: '活性炭', location: '405-A' },
  { id: 'D015', name: '亚硒酸', location: '405-A' },
  { id: 'D016', name: '碱式碳酸镁', location: '405-A' },
  { id: 'D017', name: '正红色', location: '405-A' },
  { id: 'D018', name: '乳化剂', location: '405-A' },
  { id: 'D019', name: '苯丙乳液', location: '405-A' },
  { id: 'D020', name: 'AMP乳化液', location: '405-A' },
  { id: 'D021', name: '消泡剂NXZ', location: '405-A' },
  { id: 'D022', name: '聚乙烯醇', location: '405-A' },
  { id: 'D023', name: '钼酸钠', location: '405-A' },
  { id: 'D024', name: '不明', location: '405-A' },
  { id: 'D025', name: '十二烷基苯磺酸钠', location: '405-A' },
  { id: 'D026', name: '防腐剂', location: '405-A' },
  { id: 'D027', name: '硝酸银', location: '405-A' },
  { id: 'D028', name: '溴化钾', location: '405-A' },
  { id: 'D029', name: '变色硅胶', location: '405-A' },
  { id: 'D030', name: '硼氢化钠', location: '405-A' },
  { id: 'D031', name: '碳酸钙', location: '405-A' },
  { id: 'D032', name: '碘化钾', location: '405-A' },
  { id: 'D033', name: '叔丁醇', location: '405-A' },
  { id: 'D034', name: '异丙醇', location: '405-A' },
  { id: 'D035', name: 'NN二甲基甲酰胺', location: '405-A' },
  { id: 'D036', name: '液体石蜡', location: '405-A' },
  { id: 'D037', name: '甲基硅油', location: '405-A' },
  { id: 'D038', name: '硫化钠', location: '405-A' },
  { id: 'D039', name: '纤维素', location: '405-A' },
  { id: 'D040', name: 'HPMC', location: '405-A' },
  { id: 'D041', name: '无水乙醇', location: '405-A' },
  { id: 'D042', name: '不明', location: '405-A' },
  { id: 'D043', name: '无水乙醇', location: '405-A' },
  { id: 'D044', name: '过氧化氢', location: '405-A' },
  { id: 'D045', name: '钛酸丁酯', location: '405-A' },
  { id: 'D046', name: '氨基硅油', location: '405-A' },
  { id: 'D047', name: '丙烯酸丁酯', location: '405-A' },
  { id: 'D048', name: '月桂酸钠', location: '405-A' },
  { id: 'D049', name: '过硫酸铵', location: '405-A' },
  { id: 'D050', name: '苯乙烯', location: '405-A' },
  { id: 'D051', name: '脂肪醇', location: '405-A' },
  { id: 'D052', name: '聚乙烯醚', location: '405-A' },
  { id: 'E001', name: '壳聚糖', location: '406-A' },
  { id: 'E002', name: '氢氧化钾', location: '406-A' },
  { id: 'E003', name: '硫酸锌', location: '406-A' },
  { id: 'E004', name: '无水碳酸钾', location: '406-A' },
  { id: 'E005', name: '硫脲', location: '406-A' },
  { id: 'E006', name: '氢氧化钠', location: '406-A' },
  { id: 'E007', name: 'KOH电解液', location: '406-A' },
  { id: 'E008', name: '乙二胺四乙酸四钠', location: '406-A' },
  { id: 'E009', name: '无水硫酸钠', location: '406-A' },
  { id: 'E010', name: '二乙铜试剂', location: '406-A' },
  { id: 'E011', name: '氯化钠', location: '406-A' },
  { id: 'E012', name: '碳酸氢钠', location: '406-A' },
  { id: 'E013', name: '无水硫酸镁', location: '406-A' },
  { id: 'E014', name: '硫酸钴', location: '406-A' },
  { id: 'E015', name: '氯化钠', location: '406-A' },
  { id: 'E016', name: '尿素', location: '406-A' },
  { id: 'E017', name: '氢氧化钠', location: '406-A' },
  { id: 'E018', name: '盐酸', location: '406-A' },
  { id: 'E019', name: '人造沸石', location: '406-A' },
  { id: 'E020', name: '海藻酸钠', location: '406-A' },
  { id: 'E021', name: '二茂铁', location: '406-A' },
  { id: 'E022', name: '水杨酸钠', location: '406-A' },
  { id: 'E023', name: '三甲基甘氨酸', location: '406-A' },
  { id: 'E024', name: 'MAG', location: '406-A' },
  { id: 'E025', name: 'CMAG', location: '406-A' },
  { id: 'E026', name: '活性炭', location: '406-A' },
  { id: 'E027', name: '盐？', location: '406-A' },
  { id: 'E028', name: '纳米铜', location: '406-A' },
  { id: 'E029', name: '氯化钯', location: '406-A' },
  { id: 'E030', name: '增稠剂', location: '406-A' },
  { id: 'E031', name: '钯碳催化剂', location: '406-A' },
  { id: 'E032', name: '不明', location: '406-A' },
  { id: 'E033', name: '聚乙二醇', location: '406-A' },
  { id: 'E034', name: '尿素', location: '406-A' },
  { id: 'E035', name: '柠檬酸钠', location: '406-A' },
  { id: 'E036', name: '十二烷基硫酸钠', location: '406-A' },
  { id: 'E037', name: 'L苏氨酸', location: '406-A' },
  { id: 'E038', name: 'L赖氨酸', location: '406-A' },
  { id: 'E039', name: 'L精氨酸', location: '406-A' },
  { id: 'E040', name: 'L丝氨酸', location: '406-A' },
  { id: 'E041', name: 'L络氨酸', location: '406-A' },
  { id: 'E042', name: '海藻酸钠', location: '406-A' },
  { id: 'E043', name: '无水硫酸钠', location: '406-A' },
  { id: 'E044', name: '硝酸戊酯', location: '406-A' },
  { id: 'E045', name: 'L色氨酸', location: '406-A' },
  { id: 'E046', name: '苯甲酸', location: '406-A' },
  { id: 'E047', name: '甘醇酸', location: '406-A' },
  { id: 'E048', name: '十六烷基三甲基溴化铵', location: '406-A' },
  { id: 'E049', name: '柠檬酸', location: '406-A' },
  { id: 'E050', name: '邻苯二甲酸酐', location: '406-A' },
  { id: 'E051', name: '乙醇钠', location: '406-A' },
  { id: 'E052', name: 'DL苹果酸', location: '406-A' },
  { id: 'E053', name: '乙二胺四乙酸二钠', location: '406-A' },
  { id: 'E054', name: '抗坏血酸', location: '406-A' },
  { id: 'E055', name: '硫酸钠', location: '406-A' },
  { id: 'E056', name: '十二烷基苯磺酸钠', location: '406-A' },
  { id: 'E057', name: '司盘60', location: '406-A' },
  { id: 'E058', name: '辛酰甘氨酸', location: '406-A' },
  { id: 'E059', name: '蚕丝氨基酸', location: '406-A' },
  { id: 'E060', name: '山梨糖醇', location: '406-A' },
  { id: 'E061', name: '乙二醇', location: '406-A' },
  { id: 'E062', name: '无水乙醇', location: '406-A' },
  { id: 'E063', name: '申磺酰氨', location: '406-A' },
  { id: 'E064', name: '乳化剂OP10', location: '406-A' },
  { id: 'E065', name: '甲酸', location: '406-A' },
  { id: 'E066', name: '环氧氯丙烷', location: '406-A' },
  { id: 'E067', name: '司本80', location: '406-A' },
  { id: 'E068', name: '甲醇', location: '406-A' },
  { id: 'E069', name: '丙酮', location: '406-A' },
  { id: 'E070', name: '硅油', location: '406-A' },
  { id: 'E071', name: '氨水', location: '406-A' },
  { id: 'E072', name: '乙酰乙酸乙酯', location: '406-A' },
  { id: 'E073', name: '丙二酸二甲酯', location: '406-A' },
  { id: 'E074', name: '乙酸乙酯', location: '406-A' },
  { id: 'E075', name: '羧甲基纤维素钠', location: '406-A' },
  { id: 'E076', name: '正乙烷', location: '406-A' },
  { id: 'E077', name: '无水乙醇', location: '406-A' },
  { id: 'E078', name: '氧化铝抛光粉', location: '406-A' },
  { id: 'E079', name: '丙烯腈共聚物', location: '406-A' },
  { id: 'E080', name: '尼龙6', location: '406-A' },
  { id: 'E081', name: 'PBt', location: '406-A' },
  { id: 'E082', name: '据丙烯酸甲酯', location: '406-A' },
  { id: 'E083', name: '芸香叶苷', location: '406-A' },
  { id: 'E084', name: '干燥THF', location: '406-A' },
  { id: 'E085', name: '聚四氟乙烯乳液', location: '406-A' },
  { id: 'E086', name: '乙炔炭黑', location: '406-A' },
  { id: 'E087', name: '无水乙醇', location: '406-A' }
];

// 购物车
let cart = [];

console.log('药品数据已加载:', medicines.length, '条记录');

// 搜索功能
const searchInput = document.getElementById('medicineSearch');
const suggestionsBox = document.getElementById('suggestions');

searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    if (query.length === 0) {
        suggestionsBox.classList.remove('active');
        return;
    }
    
    const matches = medicines.filter(m => 
        m.name.toLowerCase().includes(query) && 
        !cart.find(c => c.id === m.id)
    ).slice(0, 5);
    
    if (matches.length > 0) {
        suggestionsBox.innerHTML = matches.map(m => `
            <div class="suggestion-item" onclick="addToCart('${m.id}')">
                <div class="suggestion-name">${m.name}</div>
                <div class="suggestion-id">编号: ${m.id} | 位置: ${m.location}</div>
            </div>
        `).join('');
        suggestionsBox.classList.add('active');
    } else {
        suggestionsBox.classList.remove('active');
    }
});

// 点击外部关闭搜索建议
document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-box')) {
        suggestionsBox.classList.remove('active');
    }
});

// 添加到购物车
function addToCart(medicineId) {
    const medicine = medicines.find(m => m.id === medicineId);
    if (!medicine || cart.find(c => c.id === medicineId)) return;
    
    cart.push({
        id: medicine.id,
        name: medicine.name,
        location: medicine.location,
        amount: 10
    });
    
    searchInput.value = '';
    suggestionsBox.classList.remove('active');
    renderCart();
}

// 渲染购物车
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        emptyCart.style.display = 'block';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-id">编号: ${item.id} | 位置: ${item.location}</div>
            </div>
            <div class="cart-item-amount">
                <input type="range" min="0" max="500" value="${item.amount}" 
                       oninput="updateAmount(${index}, this.value)" class="amount-slider">
                <span class="amount-value">${item.amount} mL/g</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">×</button>
        </div>
    `).join('');
}

// 更新用量
function updateAmount(index, value) {
    cart[index].amount = parseInt(value);
    renderCart();
}

// 从购物车移除
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// 生成核销码
function generateCode() {
    // 获取访客信息
    const name = document.getElementById('visitorName').value.trim();
    const unit = document.getElementById('visitorUnit').value;
    const purpose = document.getElementById('visitorPurpose').value;
    
    // 验证
    if (!name) {
        alert('请填写姓名');
        return;
    }
    if (!unit) {
        alert('请选择单位');
        return;
    }
    if (!purpose) {
        alert('请选择用途');
        return;
    }
    if (cart.length === 0) {
        alert('请至少选择一种药品');
        return;
    }
    
    // 生成核销码数据
    const codeData = {
        name: name,
        unit: unit,
        purpose: purpose,
        time: new Date().toISOString(),
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            amount: item.amount
        }))
    };
    
    // Base64编码
    const code = btoa(unescape(encodeURIComponent(JSON.stringify(codeData))));
    
    // 显示弹窗
    showModal(code, codeData);
}

// 显示弹窗
function showModal(code, data) {
    const modal = document.getElementById('codeModal');
    const codeDisplay = document.getElementById('codeDisplay');
    const summaryList = document.getElementById('summaryList');
    
    // 显示核销码（缩短显示）
    codeDisplay.textContent = code.substring(0, 50) + '...';
    codeDisplay.dataset.fullCode = code;
    
    // 显示药品清单
    const listHtml = data.items.map(item => {
        const med = medicines.find(m => m.id === item.id);
        return `
            <div class="summary-item">
                <span>${item.id} - ${item.name}</span>
                <span>${item.amount} mL/g</span>
            </div>
        `;
    }).join('');
    summaryList.innerHTML = listHtml;
    
    // 显示弹窗
    modal.style.display = 'flex';
}

// 关闭弹窗
function closeModal() {
    document.getElementById('codeModal').style.display = 'none';
}

// 复制核销码
function copyCode() {
    const code = document.getElementById('codeDisplay').dataset.fullCode;
    navigator.clipboard.writeText(code).then(() => {
        alert('核销码已复制到剪贴板');
    }).catch(() => {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('核销码已复制到剪贴板');
    });
}

// 显示联系方式
function showContact() {
    document.getElementById('contactModal').style.display = 'flex';
}

// 关闭联系方式弹窗
function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// 复制微信号
function copyContact() {
    navigator.clipboard.writeText('H_Du1008').then(() => {
        alert('微信号已复制到剪贴板');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = 'H_Du1008';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('微信号已复制到剪贴板');
    });
}

// 初始化
renderCart();
