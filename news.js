const newsItems = {
  'ai-regulation': { id: 'ai-regulation', category: 'Finance', score: 86, title: "Réglementation de l'IA dans la finance", summary: "Le cadre réglementaire de l'IA se précise et déplace la concurrence vers la preuve de la maîtrise des modèles.", source: 'European Banking Authority', sourceUrl: 'https://www.eba.europa.eu/', date: '18 septembre 2026' },
  'instant-payments': { id: 'instant-payments', category: 'Fintech', score: 72, title: 'Adoption des paiements instantanés', summary: 'Les paiements instantanés deviennent une infrastructure de distribution et changent la valeur des services autour de la transaction.', source: 'European Central Bank', sourceUrl: 'https://www.ecb.europa.eu/paym/intro/html/index.en.html', date: '12 septembre 2026' },
  'predictive-risk': { id: 'predictive-risk', category: 'FinAI', score: 41, title: 'Analyse prédictive du risque', summary: 'Les outils prédictifs progressent lentement parce que la qualité de la décision dépend davantage du contexte que de la seule puissance du modèle.', source: 'Bank for International Settlements', sourceUrl: 'https://www.bis.org/cgfs/', date: '6 septembre 2026' },
  'banking-consolidation': { id: 'banking-consolidation', category: 'Banque', score: 89, title: 'Consolidation des services bancaires', summary: 'Les groupes simplifient leurs portefeuilles digitaux, ce qui peut rendre les plateformes communes plus stratégiques que les marques de produit.', source: 'European Banking Federation', sourceUrl: 'https://www.ebf.eu/', date: '29 août 2026' },
  'client-data-protection': { id: 'client-data-protection', category: 'Cyber', score: 68, title: 'Protection des données clients', summary: 'La protection des données devient un sujet de confiance commerciale autant qu’un sujet de sécurité.', source: 'ENISA', sourceUrl: 'https://www.enisa.europa.eu/', date: '22 août 2026' },
  'data-pipelines': { id: 'data-pipelines', category: 'Data', score: 37, title: 'Modernisation des pipelines de données', summary: 'La modernisation est progressive, mais la qualité des données devient un facteur limitant pour les projets IA et le pilotage commercial.', source: 'Deloitte Center for Financial Services', sourceUrl: 'https://www.deloitte.com/us/en/Industries/financial-services.html', date: '15 août 2026' },
  'ai-assistants': { id: 'ai-assistants', category: 'Innovation', score: 91, title: 'Généralisation des assistants IA', summary: 'Les assistants IA passent de la démonstration à l’intégration dans les processus, avec un enjeu de capacité organisationnelle.', source: 'Bank of England', sourceUrl: 'https://www.bankofengland.co.uk/prudential-regulation', date: '9 août 2026' },
  'risk-models': { id: 'risk-models', category: 'Risque', score: 63, title: 'Évolution des modèles d’évaluation', summary: 'Les modèles de risque évoluent vers des approches plus fréquemment recalibrées et davantage surveillées en production.', source: 'ECB Banking Supervision', sourceUrl: 'https://www.bankingsupervision.europa.eu/', date: '1er août 2026' },
  'mobile-banking': { id: 'mobile-banking', category: 'Mobilité', score: 45, title: 'Services bancaires mobiles', summary: 'Le mobile reste dynamique, mais sa prochaine bataille se jouera sur le contexte et la confiance, pas sur l’ajout de fonctions.', source: 'World Economic Forum', sourceUrl: 'https://www.weforum.org/topics/financial-and-monetary-systems/', date: '24 juillet 2026' },
  'fintech-concentration': { id: 'fintech-concentration', category: 'Marché', score: 71, title: 'Concentration des acteurs fintech', summary: 'Le marché fintech se concentre autour de quelques plateformes, mais leur valeur dépend de leur accès aux canaux et aux données.', source: 'S&P Global Market Intelligence', sourceUrl: 'https://www.spglobal.com/market-intelligence/en/', date: '17 juillet 2026' }
};

const demoNewsItems = [
  { id: 'demo-finance-eu-banks', sector: 'Finance', category: 'Banque', score: 88, title: "EU banks must be bigger, have deeper capital market, to compete with US, say top EU officials", summary: "Des responsables europeens plaident pour des banques plus grandes et des marches de capitaux plus profonds afin de renforcer le financement du bloc.", source: 'Reuters', date: '18 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMiygFBVV95cUxNWmpyMmhnQmxPblJxUDZudHdjSmlIaVlVbDlFTVNuQllWem14SW1QeVN5Mm9hSWJIV0Myc1NLLVZ4cTl1clczVUVaMTQ2SkZtZGFGdlZoNDlyLWplM1YxbGF4TDE2U3M4ZkJVbTFyRm5fcWJyOFFmSTFtbDFBNUNtQ2l2YUJFOFVSUzg2eGp1RlJYalJic1U5UUstaDJheTJPTTBCd3NpQmhjZU1BNFNhSjlmaTc3SWpKdXEwTVZHa3Yxd0dPTUZ6RmRn?oc=5' },
  { id: 'demo-finance-japan-markets', sector: 'Finance', category: 'Marchés', score: 82, title: "Why Japan's markets flipped the usual script after central bank rate hike", summary: "Les marches japonais ont reagit de facon inattendue apres une hausse de taux de la banque centrale.", source: 'CNBC', date: '18 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMijgFBVV95cUxORWppQ2FNczcyUmFXOEVSREtHVGxhcGNQQ0ZRLVZXR0RzY2p2N1VRZ1BpY2JKbmo2Rl9sTXY1MUJHTWd0T0xOZVV4bkxUM1RmVFYtbVZGNG0tMEN6N1lqaGlrUW1hOXpDcjdrTjRpSW96WHVnZnlSbkd3cW9QQUNIU2x5NTJrYkZSZ0FaUjVB0gGTAUFVX3lxTE5uT3ptTkU0ZGlvTGNaRmpJdGZuelVRMWNVdHVETmZQbWg1V1VuMmZFbXNUU0UyOFlDeVJKMEp1YUllU3pyS2hBQjVLRklmemc1S21IcENhY184Q0JoM05IbTl0ZDlQODBjUjF6NjBXRGhrN2xPSGdLZnFKZUVZeElIUWV2REtpQ01tVGNXUjA2YkZoQQ?oc=5' },
  { id: 'demo-finance-turkey-liquidity', sector: 'Finance', category: 'Liquidite', score: 87, title: "Turkey steps in to support markets after fund liquidity crunch sparks selloff", summary: "Les autorites turques interviennent apres qu'une tension de liquidite sur des fonds a declenche des ventes sur les marches.", source: 'Reuters', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMiwwFBVV95cUxPTi0wZUhFaDF1M2xqZ1llb2xMRUdwV1ZzcTFXLWlJenctU2FOTUVNVlZMZmNCejN5VWw3ckFlelFkalYybU1jTUJkNVByUVREZnFxSzhQUE5UUThWbGZTU240bjIzQTdPZGJ0M3ZWNUgxTEgxMjUyM0toMXFtREh2cTUwZVZmeFAxWmd2ek44bTktaDJDX0h3SEJDQ1pkal9WZGxkYXNTeUctMGRIajRydE9tU0FibmxNcmZQdmNZaE5TUlk?oc=5' },
  { id: 'demo-finance-turkish-policy', sector: 'Finance', category: 'Banque centrale', score: 76, title: 'Turkish central bank announces measures to strengthen financial markets', summary: "La banque centrale turque annonce des mesures destinees a soutenir le fonctionnement des marches financiers.", source: 'Anadolu Ajansi', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMisgFBVV95cUxPdjZ4S0VqaTlfd216V21iV2FsQ3VCcVN4QWhMMjJJdTd5NUp5Q3hyMzBmVGI0TEYxZkxhOS11c1dIOGRBRFdoZ1k5UzdXOGJCcnptX2wxMnZUeFlMbWdvWXVsQTNPb2llUV81ME5ieDRsaUpwcDFqc0tRd0tfWFpRSE95WlhzTlRqMmx3OV81OWJ1NWs5ZXBUVXVGcmVQX3pXUHAtLXZDeWVHZ0ZLNklzVGdn?oc=5' },
  { id: 'demo-finance-cfg-results', sector: 'Finance', category: 'Resultats', score: 73, title: "CFG Bank's commercial banking soars as financial markets weigh on results", summary: "CFG Bank signale une progression de ses activites commerciales alors que les marches pesent sur ses resultats.", source: 'TelQuel', date: '18 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMitAFBVV95cUxQQThEcG15WXR4czdBWXFnMDRDMXRMTy1xT1RnMmNKZlcxZXlzU01idTM5NkhRYTh5WmVnejg1WENCZ1I4ZGJnTC0wUWhXbl90TWpPaDY5MnlzV2pEQk5pX3poWXpsZXB6Uk1oU0ZtMVRoNTJIbVF3VVU0Z0tFemYwUFl2bEUzLWkwd2dsRk5RYWk3ZG1odm9ydWw5cV9JMEhoZXA2ZUM4d0JpYm83c3pvSDZVbHU?oc=5' },
  { id: 'demo-finance-assets-volatility', sector: 'Finance', category: 'Marches', score: 68, title: 'Financial market volatility behind mild dip in bank assets', summary: "Une volatilite des marches accompagne un leger recul des actifs bancaires rapporte aux Philippines.", source: 'BusinessMirror', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMingFBVV95cUxPWFlicHU5ZGJrSzlFN2RhVTl3Y1Q0T2tuVDBnVjgyajItX1RENFhXS0JjTmdyWTRvM25iZ0drSDNudW93VlltemJmOHIxTkY1WEIzQUNRYld5aU5Gd2VEYzNtald3YllzaDhDc2lHV1pSdE1TWTVWOC1tQXBxQVJRSmQzSUVYSkRZa25qbV9jcDllYWtZaXB5S3czVnB2QQ?oc=5' },
  { id: 'demo-finance-coop-ebrd', sector: 'Finance', category: 'Financement', score: 79, title: 'Co-op Bank secures Ksh 12.9B EBRD facility to expand dollar financing', summary: "Co-operative Bank of Kenya obtient une facilite de la BERD pour developper son financement en dollars.", source: 'Citizen Digital', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMiqwFBVV95cUxOUmZ4SXBpazdldjduN1NUZ3UtNWd1LTFFbmMxZ1ZCbnBhd2hMUEZGXzVOZDEyWjBtenNCMjlqWmZ3Y2kyT29yM2pGUEdkTWJNWjFla3ltV015NFVKcTg1VlZIMVM5aTZKTkJmQ0JRdVJDY2w0S1pKSllPeXowNXNuUGtKVVRfRnNraWxxcHZUcWpvWWs0R1g1MGRHcHhqSllpbVlzdTJUamwxZzA?oc=5' },
  { id: 'demo-finance-afreximbank', sector: 'Finance', category: 'Financement', score: 84, title: 'Afreximbank extends $10m financing to Azania Bank for Tanzanian SMEs', summary: "Afreximbank accorde un financement a Azania Bank pour soutenir les petites et moyennes entreprises tanzaniennes.", source: 'Daily News Tanzania', date: '18 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMitAFBVV95cUxPVkphdlNDUEN5ZWVvenZGWTF5RXM1OF9hYUVHUVRDS3R3Y3VQZnlfTkx5WWt1TkltOXFfMDc0Rmh5Vi1HYjA2QXc1RWlFcTJIVGxiSjVKdF9ZZ3JPRkNUaGs3c21MQUFwWHVKS3F5TzF4eVYxdkRIMmktNHdrbjF0dWNfMVBlQ3Q0SXlkVUJtTkhfcEdHUy1TcWRHcnlJV09LaE91NFUwMjBBMThJZ1hDb2hWN0Q?oc=5' },
  { id: 'demo-finance-central-bank-appeals', sector: 'Finance', category: 'Reglementation', score: 64, title: 'More than 4,100 appeals to the Central Bank in six months', summary: "Un bilan publie en Ouzbekistan fait etat de plus de 4 100 recours adresses a la banque centrale en six mois.", source: 'Zamin.uz', date: '19 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMi1gFBVV95cUxQcFBwWTF0TW4za3k1b2NHSDBZdHdaYXFYQzluQTR2RFFTQUV1RUtkXzRodTlIRTJ0ekpxMzc4SjJXdHNHQ1htaldGUm8teW51d1U5bk5LbTNKS3J1NjV6YjdHZ1M3SWlSTTRnekVTLTFLSzQ0a2RZMGNKRVRfWVpvSC1LZ3lkMFh1Q3ZYSVY1dlFHWjdkV3AxU1AwM3F4ai1Nc29UUzdEYS03U2J6NXU2YU56R0xMQjM2eDQ0aFotZGI4QlpZamtMNjBYaXFBSGM5aXpHbVd3?oc=5' },
  { id: 'demo-finance-japan-flows', sector: 'Finance', category: 'Marches', score: 77, title: "How Japan's rate increase could affect global capital flows", summary: "Une analyse examine les effets possibles du changement de taux japonais sur les flux de capitaux mondiaux.", source: 'South China Morning Post', date: '18 septembre 2026', sourceUrl: 'https://news.google.com/search?q=How+Japan+rate+increase+capital+flow+South+China+Morning+Post&hl=en-US&gl=US&ceid=US%3Aen' },
  { id: 'demo-fintech-brazil', sector: 'Fintech', category: 'Paiements', score: 81, title: 'Some Brazilian voters are feeling burned by fintech revolution', summary: "Un reportage Reuters examine les effets de l'expansion rapide des services fintech sur les consommateurs au Bresil.", source: 'Reuters', date: '18 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMiswFBVV95cUxQZ2h2VEUyalVWaW5LeTBpeXRGbGRsdXFnRUpBb0xuWFZZMC1sZWpTLVM2Rk1hU2xEaTlGSzlGYjJlQjNaNkd5TGloajJSai1wellFVG1nMjdOU3ctVXB1Q0dHMkUzTGxkcld0SEI2VnY5dTFPZmNDUHVXYXhnczd5X0x0bzQtUDBSRU55azdUaHdnUXN6ZUI0ajNHNXNZZWV4WGV1eHdpSFpubUk3SklVTWNsYw?oc=5' },
  { id: 'demo-fintech-nubank-us', sector: 'Fintech', category: 'Neobanque', score: 86, title: "Brazil's Nubank launches in the US", summary: "La fintech bresilienne Nubank annonce son lancement aux Etats-Unis et etend son empreinte internationale.", source: 'Banking Dive', date: '15 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMitwFBVV95cUxPUDR0SHJwdnJVY0pSUXZZVVRBVk9CYURyU29Qbnh5WXYxMUZoVmEtdXdJNlA2THp1OTgydG1ybjJvRDVrMGxpSFUxUlQyYmRrcC12cnAycHZ5cDg0YzZoMkdDTGt6WWptYkZ5c2Jmd0ttbW1KaUd4Mjd0cTdnblVqd2hzMXpzaTJQVGNTcmdndXhDTnFOYkRSamVSRXRlQUFLcnBZb0dOVFJxbVRWRTBFemhBQXNER2c?oc=5' },
  { id: 'demo-fintech-managed-accounts', sector: 'Fintech', category: 'Infrastructure', score: 75, title: 'FV Bank launches global managed accounts for fintechs', summary: "FV Bank lance une offre de comptes internationaux geres visant les societes fintech et leurs besoins de conformite.", source: 'Business Wire', date: '26 aout 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMi9gFBVV95cUxOenFPR0I3T0N3TXFoTzlqd1JDZi01NkhOVUdjcmJhcVdyTkwzRnR2NUZRU29MOWdSQzEzYkg5WUxTQXBabVBfR3ZLWGFQVHZGc0NvU251S3l5bWV4UGFYZVUtUVlMYnh4b2dTUW1RLVVjTW5UdG9qS09NWWpMOXZueFRMWXNQWjFnaWd0bFNiU3Q1OFRjeEVWZUdiWkNESEI0dGpNd01IUTg3bUxsNWw2VjQ5QV8wQWExaXlWQjRUa3hYUFBaUkhHbVVKdFlCd19DaVh0emNXSllwLVV1UmdwQ2dxYjViUlVxRENRSm9lYlNaX0dIS0E?oc=5' },
  { id: 'demo-fintech-wise-mena', sector: 'Fintech', category: 'Paiements', score: 72, title: 'Wise joins the MENA Fintech Association', summary: "Wise rejoint l'association fintech MENA, renforcant sa presence dans l'ecosysteme regional des paiements transfrontaliers.", source: 'FF News', date: '8 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMiswFBVV95cUxOcHBIY2pVeUg2OHc5bVJPWkJkX0IyclNfOTI1NWZEbjV3ZmVtbXprc051UzNKdmpTclNMUnpXeS1LUy1uUlhMWkFfWmhueVZkY0l1U1Q4REs3UzR2d25xY0d2bkxmUWs2TXYtMDMzYUNrU3JfMzAtZ1IwZGJ5eVkzN3NxRHBxX1hlQmZxS0JNcF9VUXA3MVlmald3YnJTOERJQWhVZU9ZbzJ2cGgzR01EbjlfTQ?oc=5' },
  { id: 'demo-fintech-timo', sector: 'Fintech', category: 'Neobanque', score: 70, title: 'Timo joins Vietnam’s top 10 banks for customer satisfaction', summary: "La banque numerique Timo figure parmi les dix banques les mieux notees au Vietnam pour la satisfaction client.", source: 'Fintech Singapore', date: '16 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMinwFBVV95cUxOMnFZYi11ZVdYNEVVcG9GWkdUVFF1aFVlMXdkdUpxanV3dHpOeENZazc2Q0lYZFFjNG9KSmVENnhHTlU2UUpldUhYR1NjNExKUENCYTE3dmppUFB4VC1pUWRkeGU0bFN5NC1hZE9DUWgxQ0p0aldTLVBCak9RT09vVnJSOEZSTVp5Ym1qY0N3QWFOczVMZHliWHZhWHpHMnM?oc=5' },
  { id: 'demo-fintech-barq-funding', sector: 'Fintech', category: 'Financement', score: 83, title: 'Saudi fintech barq raises $329.5 million in Series A funding', summary: "La fintech saoudienne barq annonce une levee de fonds Series A de 329,5 millions de dollars pour developper ses partenariats de paiement.", source: 'Pulse 2.0', date: '16 septembre 2026', sourceUrl: 'https://news.google.com/search?q=barq+Raises+329.5+Million+Series+A+Saudi+Fintech+September+2026&hl=en-US&gl=US&ceid=US%3Aen' },
  { id: 'demo-fintech-crossborder', sector: 'Fintech', category: 'Paiements', score: 78, title: 'Fin.com raises $20 million to expand cross-border payments', summary: "Fin.com leve 20 millions de dollars pour etendre ses services de paiements internationaux.", source: 'FintechNews Switzerland', date: '16 septembre 2026', sourceUrl: 'https://news.google.com/search?q=Fin.com+Raises+US%2420M+Cross-Border+Payments+FintechNews&hl=en-US&gl=US&ceid=US%3Aen' },
  { id: 'demo-fintech-atome-grab', sector: 'Fintech', category: 'Credit', score: 74, title: 'Grab takes the reins of fintech Atome Financial', summary: "Grab prend le controle d'Atome Financial, un mouvement qui reconfigure les liens entre super-apps et credit numerique en Asie du Sud-Est.", source: 'Inquirer.net', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/search?q=Grab+takes+the+reins+of+fintech+Atome+Financial+September+2026&hl=en-US&gl=US&ceid=US%3Aen' },
  { id: 'demo-fintech-india-digital', sector: 'Fintech', category: 'Paiements', score: 76, title: "Betting on India's growth as a global leader in digital payments and fintech", summary: "Un article de l'Economic Times examine l'ambition de l'Inde de renforcer sa place dans les paiements numeriques et la fintech.", source: 'The Economic Times', date: '18 septembre 2026', sourceUrl: 'https://news.google.com/search?q=Betting+on+India+Growth+Global+Leader+Digital+Payments+Fintech+Economic+Times&hl=en-US&gl=US&ceid=US%3Aen' },
  { id: 'demo-fintech-bank-islam-cto', sector: 'Fintech', category: 'Leadership', score: 67, title: 'Melvin Ooi joins Bank Islam as group chief technology officer', summary: "L'ancien dirigeant de Ryt Bank rejoint Bank Islam pour piloter sa technologie a l'echelle du groupe.", source: 'The Edge Malaysia', date: '16 septembre 2026', sourceUrl: 'https://news.google.com/search?q=Melvin+Ooi+joins+Bank+Islam+group+chief+technology+officer&hl=en-US&gl=US&ceid=US%3Aen' },
  { id: 'demo-finai-csbs-framework', sector: 'FinAI', category: 'Reglementation IA', score: 91, title: 'CSBS releases an AI supervisory framework for state examiners', summary: "L'organisme americain CSBS publie un cadre de supervision de l'IA destine aux examinateurs des banques d'Etat.", source: 'Consumer Finance Monitor', date: '18 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMiygFBVV95cUxPQ0JSZ0gzUjFpU2FPZjNuQjVFMHQ1RklMMWFTM3NLc3VGWnM3MXlKZHB2ckFnSzZ6YnM5cVJzM1RpQ3lSWTN0aFFFV2E4WkdwWUUtdkpBWU4wSW9UYXJFbmgyNU9pOWZNWnc0OXVFM2RKNXd1aU9SdC0tV2o5b20yaXlpNk5hZGRQYy1EWjFXQW04VU4teU03NTZFQXJYVW5XcnJvTnI3T2FEQVdQUC1WNGhuTF9aV2gxbExwTWJFczh2VWhLTkcyc3dR?oc=5' },
  { id: 'demo-finai-state-framework', sector: 'FinAI', category: 'Reglementation IA', score: 87, title: 'State regulators float an AI framework for banks and examiners', summary: "Des regulateurs d'Etat proposent un cadre d'evaluation de l'IA utilisee par les banques.", source: 'Banking Dive', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMihgFBVV95cUxOTTljWUlnaUJLcWx3eDYtWkFuODk1ZlRPWnU5cElHUDFFVDNXNjZ2cnJNUkstQ253bHVDV25Sa1BPNlhJaHoxa3J1cGUwZncxNDRhbG5uTEZRMVREWW1GVDlLVjQ5b21CWC14Si1WNF83QzJBRWdZNjVVRmVnQ1V5VXFIZS01QQ?oc=5' },
  { id: 'demo-finai-mambu-core', sector: 'FinAI', category: 'Core banking', score: 79, title: 'Mambu launches Intelligent Core to connect AI with core banking', summary: "Mambu annonce une plateforme visant a relier les capacites d'IA aux systemes bancaires centraux.", source: 'Portal ERP', date: '19 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMinAFBVV95cUxPSGg5NWl4RHNVWGRvTWNROXF3X0JNSnRqOWlRMXBoWjM5NEZ6YnVBeWRrU3ZuUS1nWm5KbTRyQjZTcFl1YWdnMnNsYXhqQ1JBVmhpT0NqTHQtYlU1N3BuNDB5dEZPM0MyZmRCMFhfcHg4dzZsQWZMd01ZbVM1U3FVUFMxRGdJWV9UMEk4RHRXeTV0YTBjMXlhQWZJc1c?oc=5' },
  { id: 'demo-finai-jb-upstage', sector: 'FinAI', category: 'Partenariats IA', score: 81, title: 'JB Financial partners with Upstage to develop AI solutions for finance', summary: "JB Financial et Upstage s'associent pour concevoir des solutions d'intelligence artificielle destinees aux activites financieres.", source: 'The Korea Times', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMizgFBVV95cUxOQlpjRE1HOXZINUZjSGRVd0FfTFBuQWozQXhVdU5sdFlfM2pNaVR4RFZtQ2g4dnZkVXVBZEtQSS1MRnd0SWRvbS1fcnlKUDcydnpoYzF5Y3VkNkJmVTNMOGZsQWlDMjBaVU10REhsYWZ4S2VSVXZjdS1XaTEzMmxFT2ZjQ1lLUk15MG9DaHYyNVNHdjAxaFA5TFVqRG1pZVR3QlhtbU5vb1k1MlFWZmlJT1lZeXoySm9sbi1HOEVadzgxckllandsazNGQWRld9IB0wFBVV95cUxNWi1lNm53ZnpmRGZFNWxNd3FKSEdkcVVpaUN3SmR5X0NFM3YzMjF4dUVZSHJFaXAtaFFmMU1IUkpnNThqVk9pWFRnNmptZGx0bFZGdlREelpfMTQ0TVBXQ1p0QXdLSWF6b25mMW5wQm1XdW1MZjhRS2E3TDdSSG1hVzFRLVlRNVFsYUR2Ui0tc3NNYVdhS2luOWVtWjdlODByZzZrX3dGeExrNHA0WkN0TUM3cEhKdDBudWZzUnF4WGRKVGpqVDBObllWX1QwMUlUUU9N?oc=5' },
  { id: 'demo-finai-canada-adoption', sector: 'FinAI', category: 'Adoption IA', score: 72, title: 'Canadian banks are racing to adopt AI, but hurdles remain', summary: "Les banques canadiennes accelerent l'adoption de l'IA, avec des obstacles persistants au deploiement a grande echelle.", source: 'MoneySense', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMikgFBVV95cUxOUjAtbkRqWmJVQXRMQ2xsaFVZcjktQVU5UnBVR0toTjkwT2lzWW9oZy1WajZVbVFlYVpnNmtWdEw2YjgzMTRkbjJJc2VuYlVHNlBvcmtCTEl3TDdkc19UM2k5WjhveXM3dndfVnNiUC1QMHU5MmRsMWZ0UzFsNEhjLWZmZTl6aVVsS1p3Nk16NnZqdw?oc=5' },
  { id: 'demo-finai-kastle-funding', sector: 'FinAI', category: 'Financement IA', score: 75, title: 'Kastle raises $24 million Series A for banking AI', summary: "La startup Kastle leve 24 millions de dollars pour developper ses outils d'IA appliques aux services bancaires.", source: 'The American Bazaar', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMioAFBVV95cUxOeDFVVkl1UE5tWXlCRGgyTzk4NDlKRnFkT2s2bmstOTJmZ21GOXU3NGE3RmszamhtNnNCeXI1SVoxckd1dXpLSmloM2xXbUdHd1BSSktQQ081ZG1LNGR5M2lMMWk2RFMzbEhOV1U0NGdpU3h3OTBjbkJiUDhUUnpvWXdWbHpaTHpZZWM0Y01XX2RaVWQ3enFMTGtEcFpQX050?oc=5' },
  { id: 'demo-finai-wema-risk', sector: 'FinAI', category: 'Risque IA', score: 78, title: 'Wema Bank MD seeks digital trust amid AI risks', summary: "Le directeur general de Wema Bank met l'accent sur la confiance numerique alors que les risques lies a l'IA augmentent.", source: 'TheCable', date: '17 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMikwFBVV95cUxNRXBLbTFSXy1EMHQxV20xdHpiaC1vLUgzS0JsMXQ5VUNsd2FjZ04zZW5HakY4TVJqZGhzdUIxRV9kbnJoT0Y0bFkyUXdCLURQMHp5MEhjUTk3cUVCS2o3R0hSUDJ2QUtld3Y4TkN4Wl9tLTRUUzA2c3Q5Y3M0TGFZWlNBZVZTVlN1YzlzbUpuRkFNQUE?oc=5' },
  { id: 'demo-finai-borrower-stress', sector: 'FinAI', category: 'Credit', score: 80, title: 'RBI deputy governor urges lenders to use AI to spot borrower stress', summary: "Un responsable de la Reserve Bank of India encourage l'usage de l'IA et du machine learning pour reperer plus tot les signes de tension chez les emprunteurs.", source: 'Economic Times BFSI', date: '3 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMi3wFBVV95cUxPUXA1VEtHdGpxZ2Z4SmR2LWNkdnpxUFNrdW5sMk9tU2RyREg5aDYwZ1VoSDVOS0dTM1hmR25oejhvbEF1MlhRdlZST2FRZlFhQlpBOGlYSFdOWTVyOXU4aURta2lkenNTLUY1azdDYVozZEtmMG5MZ1A4bDJvVU9wTU1MUFNvZ3RhOWxUalZ4RXhNZFRSVTgyUlRJWHRQbENOZzVwSmR1U2pVd2xHdDdrOWduNDdqWnhpT2FBU1NESW9qWnFhQ3R0UVV6QmdKckVDTHI4YkJ5NVJUc0ZpN2lZ0gHkAUFVX3lxTE1SWTJvMk0yd3RKZWt3T1gybERldDF3UVFvdzRpNWU4dFFLdU1yWnNZZ29adWxnWkFJcnVIN1pfOHN0Y1JjVWZ6UGN3eVZBaEViN1hmZzBVTEZNaDBMNk9nS0xPX3g2VG9VRi1NVl9GNGNmSHlFYVBQcDNFUUdRZ05rNDZuZDhQTG1JSm1ZeTRFX1FXRlFGcnNISHRZdFJGcGY0OGFxZEhoeXZlbVlYSUVSUzA1WFpQRjVfbW14WFBheksybTNUMDNKcVdSVzdHbFRNR25ZS0hDalVheXYyb3ZyTFk2aw?oc=5' },
  { id: 'demo-finai-singapore-ai', sector: 'FinAI', category: 'Banque numerique', score: 69, title: 'Singapore banks add AI expense tracking to retail banking apps', summary: "Des banques singapouriennes integrent des fonctions d'IA pour classer les depenses dans leurs applications grand public.", source: 'The Straits Times', date: '12 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMirwFBVV95cUxOVVJtc2hIQnZwRTdsOUtmQXhEVkpsVU5uTm9oR2U5bVpwbjc4bjJwekJMTlJxWDh1T1hwUE5zamVIVXpxTFNrcDhIRERjaDJOWmVfMGpTWTdZdFJFTEdJeWdVaFFuc2JpaEV3UGVXR1dWckQ0aC1mN1hOcG5abzd2NENfRElxQXJmN3pxM09iSC1UY3JUaUR0V0M3SFl0SEtBZ1lkM2xkU0lacmZvZG8w?oc=5' },
  { id: 'demo-finai-boe-warning', sector: 'FinAI', category: 'Stabilite financiere', score: 84, title: 'AI could cause global economic downturn, Andrew Bailey warns G20', summary: "Le gouverneur de la Banque d'Angleterre met en garde contre les risques economiques et financiers lies a l'IA.", source: 'BBC', date: '1 septembre 2026', sourceUrl: 'https://news.google.com/rss/articles/CBMiWkFVX3lxTE93UkFFTExla3dMSVo2YWwxUXl0ZllhV0dIbW0wWTdSMXktMHV1X2l4SnlZMmRFMXdSY2hqbm0tVGNNTmsxME5ncHp2aVdHRmhvd3Y0cUo2cnkwQQ?oc=5' },
  { id: 'news-shopify-canvas', sector: 'Fintech', category: 'Commerce numerique', score: 76, title: 'Shopify lance Canvas, un outil de creation de boutiques pilote par conversation', summary: "Les marchands peuvent construire et modifier une boutique en dialoguant avec Sidekick, l'agent IA de Shopify, tandis que les changements s'appliquent au vrai theme.", source: 'The Paypers', date: '5 octobre 2026', sourceUrl: 'https://thepaypers.com/payments/news/shopify-launches-canvas-an-ai-chat-based-store-builder-for-merchants' },
  { id: 'news-dlocal-linkedin', sector: 'Fintech', category: 'Paiements', score: 79, title: 'dLocal active les paiements par carte en monnaie locale pour LinkedIn en Amerique latine', summary: 'Les membres LinkedIn au Bresil, au Mexique, en Colombie et au Chili peuvent payer par carte dans leur devise locale.', source: 'The Paypers', date: '2 octobre 2026', sourceUrl: 'https://thepaypers.com/payments/news/dlocal-enables-local-currency-card-payments-for-linkedin-in-latam' },
  { id: 'news-european-payments-network', sector: 'Finance', category: 'Paiements europeens', score: 88, title: 'Cinq reseaux de paiement creent une entite europeenne d’interoperabilite', summary: 'Bancomat, Bizum, EPI/Wero, SIBS-MB WAY et Vipps MobilePay lancent une structure commune, avec environ 130 millions d’utilisateurs dans 13 pays.', source: 'The Paypers', date: '30 septembre 2026', sourceUrl: 'https://thepaypers.com/payments/news/bancomat-bizum-epiwero-sibsmb-way-and-vipps-mobilepay-launch-a-european-interoperability-entity' },
  { id: 'news-mastercard-agent-pay', sector: 'FinAI', category: 'Paiements par agents IA', score: 83, title: 'Mastercard ajoute des signaux de confiance a Agent Pay', summary: 'Un score teste aux Etats-Unis doit aider les emetteurs a identifier les paiements initiés par des agents IA et a mieux decider de leur autorisation.', source: 'The Paypers', date: '1er octobre 2026', sourceUrl: 'https://thepaypers.com/payments/news/mastercard-expands-agent-pay-with-trust-and-intelligence-services' },
  { id: 'news-esma-mica', sector: 'Finance', category: 'Reglementation', score: 91, title: 'ESMA propose de faire evoluer MiCA sur la DeFi, le staking et les stablecoins', summary: 'Le regulateur europeen recommande de clarifier les protections des investisseurs, la classification des jetons et ses pouvoirs de supervision.', source: 'The Paypers', date: '2 octobre 2026', sourceUrl: 'https://thepaypers.com/regulations/news/esma-proposes-mica-changes-covering-defi-staking-and-stablecoins' },
  { id: 'news-finastra-scf', sector: 'Finance', category: 'Financement des entreprises', score: 82, title: 'Finastra lance une plateforme de financement de la chaine d’approvisionnement', summary: 'La solution relie financement fournisseurs, trade finance et prets dans une plateforme concue pour les banques.', source: 'The Paypers', date: '2 octobre 2026', sourceUrl: 'https://thepaypers.com/fintech/news/finastra-launches-supply-chain-finance-solution-for-banks' },
  { id: 'news-airtel-ifc', sector: 'Fintech', category: 'Investissement', score: 85, title: 'IFC investit jusqu’a 90 millions de dollars dans Airtel Money avant son projet d’introduction en Bourse', summary: 'L’IFC s’engage comme investisseur de reference pour l’IPO envisagee a Londres; Airtel Money opere dans 13 pays d’Afrique subsaharienne.', source: 'The Paypers', date: '1er octobre 2026', sourceUrl: 'https://thepaypers.com/payments/news/ifc-commits-usd-90-million-to-airtel-money-ahead-of-london-ipo' },
  { id: 'news-natwest-ai', sector: 'FinAI', category: 'IA bancaire', score: 86, title: 'NatWest teste des outils d’IA pour le budget et l’orientation en cas de fraude', summary: 'Un assistant conversationnel explore les depenses; un agent integre a Cora oriente les clients vers le bon service de fraude ou de litige.', source: 'The Paypers', date: '1er octobre 2026', sourceUrl: 'https://thepaypers.com/fintech/news/natwest-launches-ai-tools-for-spending-and-fraud-support' },
  { id: 'news-bofa-cashpro', sector: 'Finance', category: 'Tresorerie', score: 80, title: 'Bank of America ajoute Payments Insights a CashPro', summary: 'Le nouvel outil donne aux entreprises une lecture consolidee de l’efficacite des paiements, des flux transfrontaliers et du besoin en fonds de roulement sur leurs comptes americains.', source: 'The Paypers', date: '1er octobre 2026', sourceUrl: 'https://thepaypers.com/fintech/news/bank-of-america-launches-payments-insights-on-cashpro' },
  { id: 'news-brite-uk', sector: 'Fintech', category: 'Paiements instantanes', score: 78, title: 'Brite Payments lance Pay by Bank au Royaume-Uni apres son agrement FCA', summary: 'La licence EMI ouvre la voie a un deploiement progressif des paiements de compte a compte, integres par une API unique.', source: 'The Paypers', date: '29 septembre 2026', sourceUrl: 'https://thepaypers.com/payments/news/brite-payments-launches-pay-by-bank-in-the-uk-after-fca-emi-licence' }
];

const articlePeriods = ['Court terme · 0–3 mois', 'Moyen terme · 3–12 mois', 'Long terme · 12 mois+'];

function createEditorialProfile(title, body, confidence, context, immediate, horizons, caveat, actions, feasible = false) {
  return {
    title,
    body,
    secondaryAnalysis: {
      confidence,
      context,
      immediate,
      horizons: horizons.map((scenario, index) => ({
        label: articlePeriods[index],
        scenarios: [{ title: scenario[0], explanation: scenario[1], signal: scenario[2], level: scenario[3], likelihood: scenario[4] }]
      })),
      caveat
    },
    strategicRecommendations: actions.map(([priority, text, owner, due]) => ({ priority, text, owner, due })),
    feasible
  };
}

const editorialProfiles = {
  'ai-regulation': createEditorialProfile(
    "Réglementation de l'IA dans la finance",
    ["Le débat réglementaire sur l'intelligence artificielle dans la finance se déplace de la seule performance des modèles vers la façon dont les établissements les sélectionnent, les documentent et les contrôlent. Pour une banque, le sujet concerne autant les données et les versions utilisées que la décision produite.", "Les usages qui influencent le crédit, le prix ou l'accès à un service appellent une attention particulière. Une gouvernance traçable peut ainsi conditionner le passage d'un pilote à un déploiement métier, et devenir un critère de choix entre fournisseurs."],
    74, ['Supervision de l’IA', 'Usages à impact client', 'Traçabilité des modèles'],
    "La capacité à démontrer les contrôles devient aussi importante que la qualité affichée du modèle.",
    [
      ['Préparer les preuves', 'Les équipes conformité et achats pourraient demander les versions, validations et règles d’intervention humaine avant d’autoriser un nouvel usage.', 'Exigences IA dans les appels d’offres et revues de modèles', 3, 'Probable'],
      ['Mutualiser les contrôles', 'Un socle commun de tests et de journaux pourrait réduire les efforts répétés, à condition de conserver les validations propres à chaque métier.', 'Réutilisation des contrôles entre plusieurs cas d’usage', 2, 'Possible'],
      ['Faire de la gouvernance un avantage', 'Des preuves fiables peuvent faciliter l’accès aux usages sensibles et réduire les délais de mise en production.', 'Critères de gouvernance dans les contrats stratégiques', 2, 'Possible']
    ],
    'Les exigences et leur calendrier dépendront des textes applicables et des pratiques de supervision.',
    [['high', 'Cartographier les usages IA qui influencent une décision client.', 'Risques + métiers', 'Sous 2 semaines'], ['medium', 'Tester un registre réutilisable sur deux cas d’usage.', 'Conformité + Technologie', 'Sous 6 semaines'], ['medium', 'Fixer les règles de revue humaine et de suspension.', 'Comité Risques + Numérique', 'Prochain comité']], true
  ),
  'instant-payments': createEditorialProfile(
    'Adoption des paiements instantanés',
    ["Le paiement instantané réduit le délai entre l'ordre et le règlement, y compris en dehors des horaires bancaires classiques. Il transforme donc une fonction de paiement en service disponible en continu, avec des attentes accrues sur la confirmation du bénéficiaire et le traitement des incidents.", "Pour les entreprises, la valeur peut se déplacer vers le rapprochement comptable et la visibilité immédiate sur la trésorerie. Pour les banques, la rapidité rend aussi les erreurs et les fraudes plus difficiles à récupérer une fois les fonds transférés."],
    69, ['Flux disponibles en continu', 'Prévention de la fraude', 'Trésorerie des entreprises'],
    'La vitesse du règlement crée une exigence simultanée de sécurité, de disponibilité et de rapprochement.',
    [
      ['Fraude difficile à récupérer', 'Une hausse des paiements instantanés peut réduire le temps disponible pour détecter un bénéficiaire trompeur ou bloquer un transfert.', 'Part des pertes et contestations sur les flux instantanés', 2, 'Possible'],
      ['Trésorerie plus précise', 'Des soldes visibles plus tôt peuvent aider les entreprises à prévoir leurs besoins et à limiter leurs marges de liquidité inutilisées.', 'Demandes de rapprochement et de prévision en temps réel', 2, 'Possible'],
      ['La banque devient infrastructure', 'Si des interfaces tierces captent la relation client, la banque pourrait conserver le règlement tout en perdant une partie de la distribution.', 'Part des paiements initiés via des intermédiaires', 1, 'À confirmer']
    ],
    'Le signal ne précise ni les volumes concernés ni les incidents observés; les impacts dépendent de l’adoption locale.',
    [['high', 'Mesurer les fraudes et rejets sur les flux instantanés.', 'Paiements + Fraude', 'Sous 3 semaines'], ['medium', 'Tester un rapprochement temps réel sur un parcours entreprise.', 'Cash Management', 'Sous 2 mois'], ['medium', 'Comparer les canaux directs et les flux initiés par des tiers.', 'Distribution', 'Revue trimestrielle']], true
  ),
  'predictive-risk': createEditorialProfile(
    'Analyse prédictive du risque',
    ["Les outils prédictifs cherchent à repérer plus tôt les changements de risque à partir de données historiques et de signaux récents. Leur utilité dépend moins d'une alerte isolée que de leur capacité à hiérarchiser les dossiers et à indiquer les cas où les données ne permettent pas de conclure.", "Dans un processus bancaire, un modèle peut d'abord assister l'analyse humaine plutôt que décider à sa place. Cette approche permet de comparer les alertes aux résultats réels et de vérifier si le gain de temps compense les faux positifs et le travail de contrôle supplémentaire."],
    58, ['Données de risque', 'Priorisation des dossiers', 'Revue humaine'],
    'L’usage le plus prudent est d’aider les équipes à choisir où regarder, avant d’automatiser une décision.',
    [
      ['Alertes hors contexte', 'Des changements économiques ou de comportement peuvent rendre les signaux historiques moins fiables pour certains profils.', 'Écarts de précision par segment et période', 2, 'Possible'],
      ['Charge de vérification', 'Des alertes trop nombreuses peuvent déplacer le travail vers le tri plutôt que réduire le temps d’analyse.', 'Part des alertes jugées utiles par les analystes', 2, 'Possible'],
      ['Décision plus explicable', 'Un outil bien calibré peut documenter les signaux examinés et rendre les exceptions plus cohérentes entre équipes.', 'Accord entre alerte, justification et décision finale', 1, 'À confirmer']
    ],
    'Le niveau d’adoption et les résultats des modèles ne sont pas précisés par le signal disponible.',
    [['medium', 'Comparer les alertes du modèle aux décisions historiques.', 'Risques + Data', 'Sous 6 semaines'], ['medium', 'Mesurer les faux positifs par profil de dossier.', 'Modélisation', 'Avant tout pilote'], ['medium', 'Maintenir une validation humaine sur les cas sensibles.', 'Crédit', 'En continu']], true
  ),
  'banking-consolidation': createEditorialProfile(
    'Consolidation des services bancaires',
    ["La consolidation des services numériques vise généralement à simplifier les offres et à mutualiser les plateformes. Le bénéfice attendu est une expérience plus cohérente et un coût d'exploitation mieux maîtrisé, mais ces gains supposent que les données, les parcours et les responsabilités soient réellement alignés.", "À mesure que plusieurs activités reposent sur les mêmes composants, ces derniers deviennent aussi des points de dépendance. Une panne, une migration difficile ou un changement de fournisseur peut alors toucher simultanément plusieurs métiers."],
    67, ['Plateformes partagées', 'Rationalisation des parcours', 'Dépendances technologiques'],
    'La simplification peut réduire les coûts tout en concentrant le risque opérationnel.',
    [
      ['Économies à démontrer', 'La mutualisation ne crée un gain durable que si les systèmes et processus remplacés disparaissent effectivement.', 'Coûts récurrents et applications encore maintenues', 2, 'Possible'],
      ['Défaillance à plus grande portée', 'Un service commun peut transformer un incident local en perturbation touchant plusieurs produits.', 'Dépendances partagées dans les tests de résilience', 2, 'Possible'],
      ['Moins de marge de négociation', 'Une plateforme devenue incontournable peut accroître le coût de sortie et la dépendance à un fournisseur.', 'Délais et coûts constatés lors des migrations', 1, 'À confirmer']
    ],
    'Le signal ne nomme pas les groupes, plateformes ou opérations concernés; les effets sont des risques à tester.',
    [['high', 'Identifier les services et fournisseurs communs à plusieurs parcours.', 'Architecture + Achats', 'Sous 1 mois'], ['medium', 'Chiffrer les coûts de sortie et tester un scénario de repli.', 'Résilience IT', 'Sous 2 mois'], ['medium', 'Suivre les économies après retrait des systèmes doublons.', 'Finance + Métiers', 'Revue trimestrielle']], true
  ),
  'client-data-protection': createEditorialProfile(
    'Protection des données clients',
    ["La protection des données ne se limite pas à empêcher une intrusion. Les informations clients circulent entre applications, équipes, environnements de test et prestataires; chaque accès légitime doit donc rester limité à un besoin précis et être retiré lorsqu'il n'est plus nécessaire.", "Cette maîtrise est aussi un enjeu commercial. Les clients et partenaires peuvent demander des garanties vérifiables sur la séparation des données, leur conservation et les personnes qui peuvent les consulter."],
    65, ['Accès internes et tiers', 'Données de test', 'Confiance client'],
    'Le risque se loge souvent dans la durée et l’étendue des accès accordés, pas uniquement dans une attaque externe.',
    [
      ['Accès oubliés', 'Des comptes ou autorisations conservés après un projet élargissent l’exposition sans bénéfice opérationnel.', 'Délai de révocation des accès temporaires', 2, 'Possible'],
      ['Tests plus sûrs', 'Des jeux synthétiques peuvent réduire l’exposition de données réelles lors de la conception et des essais.', 'Part des tests utilisant des données synthétiques', 2, 'Possible'],
      ['La preuve devient commerciale', 'Une gouvernance démontrable peut accélérer les échanges avec les clients entreprises et leurs auditeurs.', 'Questions de sécurité dans les appels d’offres', 1, 'À confirmer']
    ],
    'Aucun incident ou changement réglementaire particulier n’est établi par le résumé de ce signal.',
    [['high', 'Revoir les accès aux données clients chez les tiers critiques.', 'Sécurité + Achats', 'Sous 1 mois'], ['medium', 'Automatiser l’expiration des accès temporaires.', 'IAM + IT', 'Sous 2 mois'], ['medium', 'Étendre les données synthétiques aux environnements de test.', 'Data + Sécurité', 'Prochain trimestre']], true
  ),
  'data-pipelines': createEditorialProfile(
    'Modernisation des pipelines de données',
    ["Les pipelines relient les systèmes qui collectent, transforment et distribuent les données utilisées par les équipes. Leur modernisation peut améliorer la fraîcheur et la fiabilité de l'information, mais une nouvelle architecture ne corrige pas automatiquement des définitions métier contradictoires ou des droits d'accès mal établis.", "Pour les projets d'analyse et d'IA, ces écarts se traduisent par des résultats difficiles à reproduire et des chiffres que les équipes doivent réconcilier manuellement. Un périmètre pilote bien choisi peut donc créer plus de valeur qu'une refonte technique sans propriétaire métier."],
    57, ['Qualité des données', 'Définitions métier', 'Réutilisation par l’IA'],
    'La cohérence des définitions et la responsabilité des données conditionnent le bénéfice des nouveaux pipelines.',
    [
      ['Indicateurs contradictoires', 'Des équipes différentes peuvent calculer le même indicateur sur des sources ou règles distinctes.', 'Nombre de définitions concurrentes par indicateur clé', 2, 'Possible'],
      ['Projets IA retardés', 'Des données mal documentées peuvent bloquer les validations avant même le choix du modèle.', 'Temps passé à préparer et réconcilier les jeux de données', 2, 'Possible'],
      ['Donnée réutilisable', 'Des contrats de données partagés peuvent accélérer plusieurs parcours si leur qualité est suivie dans la durée.', 'Réutilisation d’un domaine de données entre métiers', 1, 'À confirmer']
    ],
    'Le signal décrit une tendance générale et ne donne pas de programme ou de gains quantifiés.',
    [['medium', 'Choisir un domaine de données utilisé par plusieurs équipes.', 'Data + Métiers', 'Sous 1 mois'], ['medium', 'Définir propriétaire, qualité attendue et règles d’accès.', 'Gouvernance Data', 'Sous 6 semaines'], ['medium', 'Comparer le temps de préparation avant et après le pilote.', 'Transformation', 'Fin de pilote']], true
  ),
  'ai-assistants': createEditorialProfile(
    'Généralisation des assistants IA',
    ["Les assistants d'intelligence artificielle quittent progressivement les démonstrations pour s'intégrer aux outils de travail. Dans une banque, ils peuvent accélérer la recherche, la préparation de documents ou le traitement de demandes, mais leurs résultats doivent rester vérifiables et adaptés aux droits d'accès de chaque utilisateur.", "La productivité réelle dépend aussi de la qualité des données consultées et du temps nécessaire pour corriger les réponses. Sans mesure du travail repris, un assistant peut produire davantage de contenu à vérifier plutôt que libérer du temps pour les tâches qui exigent un jugement humain."],
    68, ['Intégration aux processus', 'Vérification humaine', 'Accès aux données'],
    'L’intégration au travail quotidien et le coût de vérification déterminent le gain net, au-delà de la démonstration.',
    [
      ['Vérification plus lourde', 'Un volume accru de réponses approximatives peut déplacer la charge vers les experts et ralentir le traitement.', 'Taux de reprise et temps de vérification par tâche', 2, 'Possible'],
      ['Diffusion d’informations sensibles', 'Des accès trop larges ou des consignes mal définies pourraient exposer des données dans des réponses générées.', 'Incidents d’accès et résultats contenant des données non nécessaires', 2, 'Possible'],
      ['Apprentissage collectif', 'La capitalisation des corrections peut améliorer les pratiques et rendre les gains moins dépendants d’un seul utilisateur.', 'Corrections réutilisées et évolution du temps de cycle', 2, 'Possible']
    ],
    'Le signal ne précise pas les outils, tâches ou résultats mesurés; les gains restent à établir par cas d’usage.',
    [['high', 'Sélectionner une tâche fréquente avec données non sensibles.', 'Métiers + IA', 'Sous 3 semaines'], ['medium', 'Mesurer temps gagné, reprises et erreurs avant généralisation.', 'Opérations + Contrôle', 'Pendant le pilote'], ['medium', 'Documenter les règles d’accès et de validation humaine.', 'Sécurité + Conformité', 'Avant déploiement']], true
  ),
  'risk-models': createEditorialProfile(
    'Évolution des modèles d’évaluation',
    ["Les modèles de risque doivent être suivis pendant leur utilisation, car la qualité mesurée lors de leur conception peut évoluer lorsque les clients, les marchés ou les données changent. Le recalibrage plus fréquent peut améliorer la réactivité, mais exige des contrôles capables de distinguer une vraie dérive d'une variation ponctuelle.", "L'enjeu opérationnel est de relier une alerte statistique à une réponse définie: revue humaine, analyse complémentaire ou retour temporaire à une méthode prudente. Les résultats moyens ne suffisent pas si certaines populations ou lignes de portefeuille sont moins bien évaluées."],
    64, ['Suivi en production', 'Changements de régime', 'Performance par segment'],
    'Un modèle utile doit signaler quand ses conditions d’emploi ne sont plus réunies et déclencher une réponse proportionnée.',
    [
      ['Dérive localisée', 'Une performance globale stable peut masquer une dégradation concentrée sur certains profils ou produits.', 'Écart de qualité par segment au fil du temps', 2, 'Possible'],
      ['Réaction excessive au bruit', 'Des mises à jour trop fréquentes pourraient amplifier une variation temporaire des données.', 'Fréquence des recalibrages suivie d’un retour arrière', 1, 'À confirmer'],
      ['Décision de secours prête', 'Des seuils et procédures préétablis peuvent éviter une improvisation en période de choc.', 'Exercices de bascule et délais de reprise', 2, 'Possible']
    ],
    'Le résumé n’identifie pas de modèle ni de changement réglementaire précis.',
    [['high', 'Comparer la performance par portefeuille et par segment.', 'Modélisation + Risques', 'Sous 1 mois'], ['medium', 'Définir les seuils de revue humaine et de retour arrière.', 'Validation des modèles', 'Sous 6 semaines'], ['medium', 'Tester ces règles sur un scénario de choc de données.', 'Risques + Opérations', 'Prochain exercice']], true
  ),
  'mobile-banking': createEditorialProfile(
    'Services bancaires mobiles',
    ["Le mobile est devenu un canal courant pour consulter un compte et initier des opérations. À mesure que les fonctions de base se généralisent, la différenciation se joue davantage sur la simplicité d'un parcours, la pertinence du bon accompagnement et la confiance accordée aux demandes d'authentification.", "Une personnalisation plus contextuelle peut réduire les étapes inutiles, mais elle doit rester compréhensible pour le client. L'usage de l'application seul ne mesure donc ni la qualité de l'expérience ni la capacité du canal à résoudre une demande sans transfert vers un autre point de contact."],
    60, ['Parcours numériques', 'Authentification', 'Continuité entre canaux'],
    'La valeur du mobile se mesure mieux par les tâches résolues et la confiance que par le nombre de connexions.',
    [
      ['Abandon après authentification', 'Une étape de sécurité mal comprise peut interrompre un parcours pourtant correctement protégé.', 'Abandons selon l’étape et le type d’opération', 2, 'Possible'],
      ['Aide perçue comme intrusive', 'Une personnalisation fondée sur le contexte peut entamer la confiance si ses raisons ne sont pas claires.', 'Réclamations et désactivation des suggestions', 1, 'À confirmer'],
      ['Résolution sans rupture', 'Un parcours cohérent entre application, agence et téléphone peut réduire les répétitions d’information.', 'Transferts de canal et demandes répétées', 1, 'À confirmer']
    ],
    'Le signal est une tendance générale et ne documente pas une évolution d’usage précise.',
    [['medium', 'Repérer les parcours mobiles les plus souvent interrompus.', 'Expérience Client + Digital', 'Sous 1 mois'], ['medium', 'Tester une amélioration sur un besoin client clairement défini.', 'Produit Mobile', 'Prochain trimestre'], ['medium', 'Suivre la résolution complète, pas seulement les connexions.', 'Data + Relation Client', 'Revue mensuelle']], true
  ),
  'fintech-concentration': createEditorialProfile(
    'Concentration des acteurs fintech',
    ["La concentration du marché fintech peut renforcer les acteurs capables de réunir financement, technologie et accès aux clients. Pour une banque partenaire, un fournisseur plus solide peut faciliter l'intégration; en contrepartie, moins d'alternatives peuvent augmenter la dépendance à une plateforme ou à un canal de distribution.", "Le risque ne se lit pas seulement dans le prix. La portabilité des données, les clauses d'exclusivité et le coût d'une migration déterminent si le partenariat reste réversible lorsque l'offre ou les conditions changent."],
    62, ['Concentration des fournisseurs', 'Accès aux clients et aux données', 'Réversibilité contractuelle'],
    'La robustesse d’un partenaire et le pouvoir de négociation de ses clients peuvent évoluer en sens inverse.',
    [
      ['Options de sortie réduites', 'Un fournisseur dominant peut rendre plus coûteux le transfert des données et des opérations.', 'Durée et coût estimé d’une migration', 2, 'Possible'],
      ['Canal client capté par un tiers', 'Un intermédiaire peut conserver la relation client alors que la banque fournit l’infrastructure financière.', 'Part des nouveaux clients provenant d’un canal partenaire', 1, 'À confirmer'],
      ['Spécialistes mieux positionnés', 'Des acteurs de niche peuvent rester compétitifs en se concentrant sur un service difficile à remplacer.', 'Évolution des partenariats par fonction métier', 1, 'À confirmer']
    ],
    'Le signal ne nomme pas de transaction précise; les risques dépendent du portefeuille de partenaires étudié.',
    [['high', 'Classer les partenaires selon la criticité et les options de remplacement.', 'Achats + Métiers', 'Sous 1 mois'], ['medium', 'Vérifier les clauses de portabilité, d’exclusivité et de sortie.', 'Juridique + Achats', 'Sous 6 semaines'], ['medium', 'Estimer la concentration des canaux d’acquisition.', 'Distribution', 'Revue trimestrielle']], true
  ),
  'demo-finance-eu-banks': createEditorialProfile(
    'Les banques européennes appelées à grandir pour rivaliser avec les États-Unis',
    ["Des responsables européens défendent l'idée que les banques du continent doivent gagner en taille et que les marchés de capitaux doivent devenir plus profonds. L'objectif avancé est de mieux financer les entreprises et de renforcer la capacité des établissements européens à rivaliser avec leurs homologues américains.", "Cette orientation relance le débat sur les rapprochements transfrontaliers, l'accès au financement et l'intégration des marchés. Une consolidation peut accroître la capacité d'investissement, mais ses bénéfices dépendent aussi de règles communes, d'une concurrence effective et de la possibilité pour les entreprises de diversifier leurs financements."],
    66, ['Échelle des banques européennes', 'Marchés de capitaux', 'Financement des entreprises'],
    'Le débat porte autant sur l’intégration des marchés que sur la taille individuelle des banques.',
    [
      ['Rapprochements à l’étude', 'Un plaidoyer politique pourrait remettre les opérations transfrontalières à l’agenda sans garantir qu’elles aboutissent.', 'Annonces de réforme ou de rapprochement', 1, 'À confirmer'],
      ['Financement moins bancaire', 'Des marchés plus profonds pourraient donner aux grandes entreprises une source complémentaire de capitaux.', 'Émissions et financements transfrontaliers', 1, 'À confirmer'],
      ['Échelle et concentration', 'Des groupes plus grands peuvent investir davantage, mais accroître aussi les enjeux de concurrence et de résolution.', 'Évolution des projets de consolidation et des garde-fous', 1, 'À confirmer']
    ],
    'Le résumé rapporte une position de responsables, pas une décision adoptée ni un calendrier réglementaire.',
    [['medium', 'Suivre les propositions européennes sur l’intégration financière.', 'Affaires Publiques', 'Revue mensuelle'], ['medium', 'Évaluer l’exposition aux financements de marché des clients entreprises.', 'Banque Entreprises', 'Sous 2 mois'], ['medium', 'Actualiser les scénarios de consolidation transfrontalière.', 'Stratégie', 'Prochain comité']], false
  ),
  'demo-finance-japan-markets': createEditorialProfile(
    'La hausse des taux au Japon bouscule les réactions habituelles des marchés',
    ["Après une hausse de taux de la banque centrale japonaise, les marchés ont réagi d'une manière décrite comme inhabituelle par le média cité. Le signal met en évidence qu'un changement de politique monétaire ne se traduit pas toujours par une réaction simple et immédiate des actifs.", "Les investisseurs réévaluent simultanément les rendements, les anticipations de croissance et les positions financées en yen. Pour les banques et leurs clients, l'enjeu est de distinguer la réaction de court terme d'une réallocation durable des portefeuilles."],
    60, ['Taux japonais', 'Réactions de marché', 'Positions en yen'],
    'Une réaction atypique appelle une lecture par actif et par horizon, pas une extrapolation à partir du seul taux directeur.',
    [
      ['Volatilité autour des annonces', 'Les positions sensibles au yen et aux obligations pourraient connaître des ajustements rapides.', 'Volatilité et volumes autour des prochaines décisions', 2, 'Possible'],
      ['Recalibrage des portefeuilles', 'Des rendements japonais plus élevés pourraient modifier l’arbitrage entre actifs domestiques et étrangers.', 'Flux vers les actifs japonais et couverture du yen', 1, 'À confirmer'],
      ['Fin des stratégies de financement bon marché', 'Un mouvement durable des taux pourrait renchérir certaines stratégies financées en yen.', 'Coût de financement et positions à effet de levier', 1, 'À confirmer']
    ],
    'Le résumé ne détaille ni les actifs concernés ni l’ampleur de la réaction observée.',
    [['medium', 'Identifier les portefeuilles sensibles au yen et aux taux japonais.', 'Marchés + Risques', 'Sous 3 semaines'], ['medium', 'Comparer la réaction par classe d’actifs aux précédentes hausses.', 'Économistes', 'Prochaine note marchés'], ['medium', 'Tester un scénario de remontée graduelle des rendements japonais.', 'ALM + Trésorerie', 'Prochain comité']], false
  ),
  'demo-finance-turkey-liquidity': createEditorialProfile(
    'La Turquie intervient après une crise de liquidité qui secoue les marchés',
    ["Les autorités turques sont intervenues après qu'une tension de liquidité touchant des fonds a déclenché des ventes sur les marchés. La séquence relie un problème de financement ou de rachats à une baisse des prix, puis à une réponse visant à soutenir le fonctionnement du marché.", "L'effet de l'intervention dépendra des instruments mobilisés et de la persistance des sorties. Pour les acteurs exposés, il faut suivre la liquidité réellement disponible, les conditions de rachat et les éventuelles mesures de soutien, plutôt que supposer que l'annonce a déjà résolu la tension."],
    63, ['Liquidité des fonds', 'Ventes sur les marchés', 'Réponse des autorités'],
    'Une intervention peut calmer les échanges sans rétablir durablement la liquidité des actifs concernés.',
    [
      ['Rachats et ventes forcées', 'Si les demandes de liquidité persistent, les fonds peuvent devoir céder des actifs dans un marché peu profond.', 'Rachats nets et écarts acheteur-vendeur', 2, 'Possible'],
      ['Transmission aux contreparties', 'La baisse des prix peut affecter les garanties et les limites de risque d’acteurs liés aux fonds.', 'Décotes de collatéral et appels de marge', 1, 'À confirmer'],
      ['Soutien perçu comme permanent', 'Une intervention répétée pourrait modifier les anticipations de risque et la discipline de marché.', 'Nature et répétition des mesures publiques', 1, 'À confirmer']
    ],
    'Le résumé ne précise ni les fonds concernés ni les instruments d’intervention ou leurs montants.',
    [['high', 'Cartographier les expositions directes et contreparties concernées.', 'Risques de Marché', 'Sous 2 semaines'], ['medium', 'Suivre les flux de fonds et la liquidité des actifs associés.', 'Trésorerie', 'Quotidien pendant 1 mois'], ['medium', 'Réviser les scénarios de stress sur collatéral et rachats.', 'Risques + ALM', 'Prochain comité']], false
  ),
  'demo-finance-turkish-policy': createEditorialProfile(
    'La banque centrale turque annonce des mesures pour renforcer les marchés financiers',
    ["La banque centrale turque a annoncé des mesures destinées à soutenir le fonctionnement des marchés financiers. Le signal indique une action institutionnelle, mais son impact dépendra du détail des instruments, de leur durée et de la réaction des banques, investisseurs et entreprises.", "Pour les établissements exposés, les premières questions portent sur les conditions de financement, la liquidité et les éventuelles obligations opérationnelles. Il faudra distinguer l'effet d'annonce d'une amélioration mesurable des échanges et du crédit."],
    58, ['Mesures de banque centrale', 'Liquidité des marchés', 'Exposition au risque pays'],
    'L’existence d’une annonce ne suffit pas à établir son efficacité ni son périmètre.',
    [
      ['Conditions de liquidité modifiées', 'Les nouvelles mesures pourraient changer l’accès au financement ou le coût des opérations locales.', 'Texte d’application et conditions d’éligibilité', 1, 'À confirmer'],
      ['Adaptation opérationnelle', 'Les banques concernées pourraient devoir ajuster leurs processus de trésorerie ou de reporting.', 'Instructions aux établissements et premières opérations', 1, 'À confirmer'],
      ['Effet sur la confiance', 'Une amélioration durable dépendrait de la cohérence des mesures avec la trajectoire économique.', 'Évolution des primes de risque et des flux', 1, 'À confirmer']
    ],
    'Le résumé ne donne pas le contenu détaillé des mesures; aucune conséquence précise ne peut être tenue pour acquise.',
    [['medium', 'Obtenir le texte officiel et qualifier les mesures annoncées.', 'Veille Réglementaire', 'Sous 10 jours'], ['medium', 'Identifier les opérations et entités potentiellement concernées.', 'Conformité + Trésorerie', 'Après publication'], ['medium', 'Mettre à jour l’analyse pays si les conditions changent.', 'Risques Pays', 'Revue mensuelle']], false
  ),
  'demo-finance-cfg-results': createEditorialProfile(
    'CFG Bank progresse dans le secteur commercial malgré le poids des marchés',
    ["CFG Bank signale une progression de ses activités de banque commerciale tandis que les conditions de marché pèsent sur ses résultats. Le contraste souligne qu'une croissance des métiers avec les entreprises ne se traduit pas nécessairement par une hausse équivalente du résultat global.", "La performance dépend aussi du coût de financement, des revenus liés aux marchés et du risque de crédit. Pour juger la solidité de la tendance commerciale, il faut observer la qualité des nouveaux encours et la capacité de la banque à transformer l'activité en revenus récurrents."],
    60, ['Activité commerciale', 'Résultats de marché', 'Qualité des revenus'],
    'La croissance d’un métier et la performance totale peuvent diverger lorsque les marchés sont défavorables.',
    [
      ['Revenus plus volatils', 'Une forte contribution des marchés peut rendre les résultats moins prévisibles malgré une activité commerciale soutenue.', 'Part des revenus récurrents dans le résultat', 1, 'À confirmer'],
      ['Croissance et risque de crédit', 'L’expansion des prêts doit être rapprochée des critères d’octroi et de la qualité des nouveaux dossiers.', 'Évolution des encours, défauts et provisions', 1, 'À confirmer'],
      ['Signal concurrentiel local', 'Une progression durable auprès des entreprises pourrait intensifier la concurrence sur certains segments.', 'Parts de marché et offres commerciales publiées', 1, 'À confirmer']
    ],
    'Le résumé ne fournit ni chiffres de résultats ni ventilation détaillée des activités.',
    [['medium', 'Lire les résultats détaillés et séparer revenus commerciaux et marchés.', 'Veille Concurrentielle', 'À la publication'], ['medium', 'Suivre les segments de clientèle où CFG progresse.', 'Banque Entreprises', 'Revue trimestrielle'], ['medium', 'Comparer la croissance des encours à leur qualité de crédit.', 'Risques + Finance', 'Prochaine revue']], false
  ),
  'demo-finance-assets-volatility': createEditorialProfile(
    'La volatilité des marchés entraîne un léger recul des actifs bancaires',
    ["Un média philippin rapporte un léger recul des actifs bancaires dans un contexte de volatilité des marchés. Le mouvement peut refléter des valorisations, des changements de composition de bilan ou d'autres facteurs; le résumé seul ne permet pas d'en isoler la cause.", "Pour interpréter le signal, il faut distinguer une variation comptable de valorisation d'une contraction des dépôts, des prêts ou de la liquidité. La persistance du mouvement et sa répartition entre établissements sont plus informatives qu'une baisse agrégée isolée."],
    52, ['Actifs bancaires aux Philippines', 'Volatilité des marchés', 'Composition des bilans'],
    'Un recul agrégé ne permet pas à lui seul de conclure à un problème de solvabilité ou de financement.',
    [
      ['Effet de valorisation', 'Une variation de prix peut réduire la valeur comptable d’actifs sans entraîner de sortie immédiate de liquidité.', 'Ventilation entre valorisations et volumes', 1, 'À confirmer'],
      ['Contraction du crédit', 'Si le recul provient d’une réduction des prêts, le financement de l’économie pourrait ralentir.', 'Évolution des prêts et nouveaux crédits', 1, 'À confirmer'],
      ['Différences entre banques', 'Un chiffre agrégé peut masquer des établissements plus vulnérables aux mêmes mouvements de marché.', 'Données individuelles de bilan et de liquidité', 1, 'À confirmer']
    ],
    'Le résumé ne donne ni période de comparaison, ni montant, ni ventilation des actifs.',
    [['medium', 'Vérifier les données de bilan et leur période de comparaison.', 'Veille Marchés', 'Sous 2 semaines'], ['medium', 'Séparer variations de valorisation et variations de volumes.', 'Finance + Risques', 'Après données détaillées'], ['medium', 'Ne déclencher une revue pays qu’en cas de persistance du recul.', 'Risques Pays', 'Prochaine publication']], false
  ),
  'demo-finance-coop-ebrd': createEditorialProfile(
    'La Co-operative Bank obtient 12,9 milliards de shillings de la BERD pour financer en dollars',
    ["La Co-operative Bank of Kenya a obtenu une facilité de 12,9 milliards de shillings auprès de la Banque européenne pour la reconstruction et le développement afin de développer le financement en dollars. Le mécanisme annoncé vise à élargir l'accès des entreprises à des ressources libellées en devise.", "Ce type de financement peut aider les importateurs, exportateurs ou emprunteurs ayant des revenus en dollars, mais crée un risque de change lorsque la dette et les recettes ne sont pas alignées. L'effet concret dépendra des bénéficiaires, du coût du crédit et des conditions de la facilité."],
    69, ['Financement en devises', 'Entreprises kényanes', 'Risque de change'],
    'Une ligne en dollars peut élargir l’offre de crédit tout en exigeant une couverture adaptée des revenus.',
    [
      ['Accès élargi au dollar', 'Des entreprises qui manquaient de financement en devise pourraient accéder à des prêts adaptés à leurs flux commerciaux.', 'Bénéficiaires et décaissements de la facilité', 2, 'Possible'],
      ['Risque de change emprunteur', 'Un emprunteur dont les revenus sont en shillings reste exposé si le dollar s’apprécie.', 'Part des prêts avec revenus en devise correspondante', 2, 'Possible'],
      ['Effet de démonstration', 'Le montage pourrait encourager d’autres bailleurs à financer des banques locales sous conditions comparables.', 'Nouvelles facilités et cofinancements annoncés', 1, 'À confirmer']
    ],
    'Le résumé ne précise pas les taux, maturités, critères d’éligibilité ni les volumes déjà décaissés.',
    [['medium', 'Confirmer les modalités de la facilité et ses critères de distribution.', 'Financements Structurés', 'Sous 3 semaines'], ['medium', 'Repérer les clients dont les revenus correspondent à la devise de dette.', 'Banque Entreprises + Risques', 'Sous 1 mois'], ['medium', 'Suivre l’impact sur l’offre de financement régionale.', 'Veille Afrique', 'Revue trimestrielle']], false
  ),
  'demo-finance-afreximbank': createEditorialProfile(
    'Afreximbank accorde 10 millions de dollars à Azania Bank pour financer les PME tanzaniennes',
    ["Afreximbank accorde une facilité de 10 millions de dollars à Azania Bank, destinée au financement des petites et moyennes entreprises en Tanzanie. Le dispositif passe par une banque locale, qui peut ainsi distribuer les fonds à des entreprises auxquelles l'accès au crédit reste parfois limité.", "L'impact dépendra des secteurs servis, des conditions de prêt et de la capacité des bénéficiaires à rembourser. Le montage illustre aussi le rôle des institutions de développement dans le partage du risque et le financement d'entreprises locales."],
    71, ['Financement des PME', 'Intermédiation bancaire', 'Développement en Tanzanie'],
    'L’annonce décrit une capacité de financement; le nombre d’entreprises effectivement financées reste à observer.',
    [
      ['Crédit PME supplémentaire', 'La facilité pourrait soutenir des entreprises viables limitées par le manque de financement local.', 'Montants décaissés et nombre de PME financées', 2, 'Possible'],
      ['Risque de concentration', 'La distribution peut se concentrer sur les entreprises déjà bancables si les critères restent exigeants.', 'Répartition par taille, région et secteur', 1, 'À confirmer'],
      ['Partenariats de financement', 'Des garanties ou lignes similaires pourraient attirer d’autres capitaux vers les banques locales.', 'Nouvelles opérations avec bailleurs de développement', 1, 'À confirmer']
    ],
    'Le résumé ne donne pas la maturité, le taux, les critères d’octroi ni les premiers bénéficiaires.',
    [['medium', 'Suivre les premiers décaissements et les secteurs éligibles.', 'Veille Afrique + PME', 'Sous 1 mois'], ['medium', 'Comparer cette facilité aux dispositifs concurrents de financement PME.', 'Stratégie', 'Prochain trimestre'], ['medium', 'Surveiller la qualité de crédit des portefeuilles soutenus.', 'Risques', 'À la publication des résultats']], false
  ),
  'demo-finance-central-bank-appeals': createEditorialProfile(
    'La banque centrale reçoit plus de 4 100 recours en six mois',
    ["Un bilan publié en Ouzbékistan fait état de plus de 4 100 recours adressés à la banque centrale en six mois. Ce volume peut refléter une demande accrue de médiation ou de traitement des plaintes, mais il doit être rapproché du nombre de clients, de la nature des dossiers et de leur résolution.", "Les recours constituent un indicateur de friction dans les services financiers, sans désigner automatiquement une défaillance généralisée. Les motifs récurrents et les délais de réponse peuvent aider les banques à repérer les produits ou procédures qui créent le plus d'insatisfaction."],
    57, ['Réclamations clients', 'Supervision bancaire', 'Résolution des litiges'],
    'Le nombre de recours est un signal de volume; leur contenu détermine ce qu’il révèle sur les services.',
    [
      ['Plaintes répétées', 'Des motifs concentrés peuvent révéler un problème de compréhension, de facturation ou de traitement.', 'Catégories et récurrence des recours', 2, 'Possible'],
      ['Charge du dispositif de médiation', 'Une hausse durable pourrait allonger les délais de résolution pour les clients.', 'Délai de traitement et dossiers en attente', 1, 'À confirmer'],
      ['Retour utile à la conception', 'L’analyse des plaintes peut orienter des corrections de parcours avant qu’elles ne deviennent un enjeu de supervision.', 'Actions correctives associées aux motifs dominants', 1, 'À confirmer']
    ],
    'Le résumé ne précise pas les sujets des recours, leur évolution ni leur taux de résolution.',
    [['medium', 'Consulter la ventilation officielle des 4 100 recours.', 'Veille Réglementaire', 'Sous 2 semaines'], ['medium', 'Comparer les motifs à notre propre dispositif de réclamations.', 'Relation Client + Conformité', 'Sous 1 mois'], ['medium', 'Prioriser un correctif si un motif comparable est récurrent.', 'Produit concerné', 'Après analyse']], true
  ),
  'demo-finance-japan-flows': createEditorialProfile(
    'Quel effet la hausse des taux au Japon pourrait-elle avoir sur les flux de capitaux mondiaux ?',
    ["La hausse des taux au Japon soulève des questions sur les flux de capitaux internationaux, car elle modifie le rendement relatif des placements en yen et à l'étranger. Les investisseurs peuvent réexaminer leurs arbitrages, mais une variation de taux ne suffit pas à déterminer le sens ou l'ampleur des flux.", "Les décisions dépendront aussi du taux de change, des coûts de couverture, des anticipations des autres banques centrales et du niveau de risque accepté. Pour les marchés mondiaux, un retour de capitaux vers le Japon serait progressif et conditionnel, plutôt qu'automatique."],
    59, ['Différentiel de taux', 'Coût de couverture du yen', 'Flux de portefeuille'],
    'Le canal de transmission passe par les rendements relatifs et le coût de change, pas seulement par le taux japonais.',
    [
      ['Arbitrages recalculés', 'Un rendement domestique plus élevé pourrait rendre certains placements japonais plus attractifs.', 'Flux nets vers les actifs japonais', 1, 'À confirmer'],
      ['Couverture plus coûteuse', 'Le coût de protection contre le change peut neutraliser une partie du rendement supplémentaire.', 'Évolution des coûts de couverture yen-devise', 2, 'Possible'],
      ['Réallocation internationale', 'Si le mouvement est durable, certains marchés financés par des capitaux japonais pourraient en ressentir les effets.', 'Émissions et flux des marchés très dépendants', 1, 'À confirmer']
    ],
    'Il s’agit d’une analyse prospective; aucun flux futur n’est établi par le signal.',
    [['medium', 'Suivre les flux japonais et les coûts de couverture associés.', 'Marchés + Trésorerie', 'Revue mensuelle'], ['medium', 'Identifier les portefeuilles dépendants d’investisseurs japonais.', 'Risques de Marché', 'Sous 6 semaines'], ['medium', 'Actualiser le scénario si le différentiel de taux change nettement.', 'Économistes', 'À chaque décision de taux']], false
  ),
  'demo-fintech-brazil': createEditorialProfile(
    'Au Brésil, certains électeurs se sentent lésés par la révolution fintech',
    ["Un reportage Reuters examine le revers de l'expansion des services fintech au Brésil: certains consommateurs estiment ne pas avoir bénéficié de cette transformation. La diffusion des applications et des paiements numériques peut élargir l'accès, mais elle ne garantit pas à elle seule une expérience équitable ou une compréhension claire des produits.", "Les frais, le service après-vente, le crédit et la gestion des réclamations sont des points à examiner pour comprendre ce mécontentement. Le signal rappelle que la croissance d'une plateforme peut coexister avec des clients qui se sentent mal servis, surtout lorsque les usages numériques progressent plus vite que l'accompagnement."],
    61, ['Adoption fintech au Brésil', 'Expérience consommateur', 'Accès et recours'],
    'La croissance des usages ne permet pas de conclure que tous les clients en retirent un bénéfice équivalent.',
    [
      ['Inclusion incomplète', 'Des clients peuvent accéder à un service numérique tout en rencontrant des coûts ou des limites mal compris.', 'Réclamations par produit et profil de clientèle', 2, 'Possible'],
      ['Confiance fragilisée', 'Une résolution difficile des litiges peut réduire l’usage et alimenter une opposition plus large au secteur.', 'Délais de recours et motifs récurrents', 1, 'À confirmer'],
      ['Examen des pratiques commerciales', 'Un débat public soutenu pourrait conduire à davantage d’attention sur les frais et le crédit numérique.', 'Prises de position des autorités et associations', 1, 'À confirmer']
    ],
    'Le résumé ne détaille pas les témoignages ni les produits concernés; ne pas généraliser à l’ensemble des clients brésiliens.',
    [['medium', 'Lire le reportage et isoler les problèmes documentés.', 'Veille Marché', 'Sous 2 semaines'], ['medium', 'Comparer ces thèmes aux réclamations de nos parcours numériques.', 'Relation Client', 'Sous 1 mois'], ['medium', 'Réexaminer la clarté des frais sur les produits concernés.', 'Conformité + Produit', 'Prochaine revue']], false
  ),
  'demo-fintech-nubank-us': createEditorialProfile(
    'La néobanque brésilienne Nubank se lance aux États-Unis',
    ["Nubank annonce son lancement aux États-Unis, une étape qui étend l'ambition internationale de la fintech brésilienne. Une entrée sur un nouveau marché implique de construire une offre locale et de répondre aux règles, infrastructures et attentes propres aux clients américains.", "Le lancement ne renseigne pas à lui seul sur les produits proposés, les autorisations déjà obtenues ni le calendrier de déploiement. La traction dépendra aussi du coût d'acquisition, des partenariats de distribution et de la capacité à transformer une première offre en relation bancaire durable."],
    62, ['Entrée sur le marché américain', 'Autorisations et partenaires', 'Coût d’acquisition client'],
    'Le lancement annoncé est un signal d’ambition; son périmètre commercial et réglementaire reste à confirmer.',
    [
      ['Périmètre initial à vérifier', 'Une offre limitée ou un partenaire local pourrait constituer le point d’entrée, selon les autorisations disponibles.', 'Produits commercialisés et partenaires annoncés', 2, 'Possible'],
      ['Acquisition coûteuse', 'La concurrence américaine peut rendre difficile la conversion d’une notoriété internationale en clients actifs.', 'Coût d’acquisition et taux de rétention publiés', 2, 'Possible'],
      ['Distribution comme avantage', 'Un canal local efficace peut compter davantage qu’une simple présence de marque.', 'Accords de distribution et usage répété des services', 1, 'À confirmer']
    ],
    'Le résumé ne précise pas les licences, produits, partenaires ni la date de montée en puissance.',
    [['high', 'Confirmer les produits lancés et les autorisations détenues.', 'Veille + Conformité', 'Sous 10 jours'], ['medium', 'Repérer l’exposition de nos clients, partenaires et flux.', 'Marché + Distribution', 'Sous 1 mois'], ['medium', 'N’engager une étude que si l’offre et sa traction sont confirmées.', 'Stratégie', 'Revue mensuelle']], true
  ),
  'demo-fintech-managed-accounts': createEditorialProfile(
    'FV Bank lance des comptes internationaux gérés pour les fintechs',
    ["FV Bank lance une offre de comptes internationaux gérés destinée aux entreprises fintech. Une telle infrastructure peut aider des sociétés qui opèrent dans plusieurs pays à centraliser certaines fonctions de compte, mais elle ne supprime pas leurs obligations de conformité ni celles de la banque qui fournit le service.", "L'intérêt commercial dépendra des juridictions couvertes, des devises disponibles et du partage des responsabilités pour la connaissance client et la surveillance des opérations. Pour les fintechs, déléguer une partie de l'infrastructure peut accélérer le lancement tout en créant une dépendance à un fournisseur réglementé."],
    58, ['Comptes transfrontaliers', 'Fintechs clientes', 'Conformité et dépendance fournisseur'],
    'La gestion de comptes peut simplifier l’expansion, à condition que les responsabilités réglementaires restent claires.',
    [
      ['Expansion plus rapide', 'Une infrastructure gérée peut réduire les délais de mise en place dans les marchés couverts.', 'Pays, devises et fonctionnalités réellement disponibles', 1, 'À confirmer'],
      ['Responsabilités partagées', 'Des rôles mal définis entre banque et fintech peuvent créer des lacunes dans les contrôles clients.', 'Contrats et procédures de conformité publiés', 2, 'Possible'],
      ['Concentration d’infrastructure', 'Une fintech très dépendante d’un seul partenaire pourrait être vulnérable à un changement de service ou de conditions.', 'Nombre de partenaires bancaires alternatifs', 1, 'À confirmer']
    ],
    'Le résumé ne précise ni les pays couverts ni les fonctionnalités ou conditions commerciales.',
    [['medium', 'Vérifier le périmètre et les contrôles de l’offre annoncée.', 'Veille Fintech + Conformité', 'Sous 3 semaines'], ['medium', 'Comparer cette proposition aux besoins de nos partenaires fintech.', 'Partenariats', 'Sous 2 mois'], ['medium', 'Examiner la réversibilité des modèles de comptes gérés.', 'Juridique + Achats', 'Prochaine revue']], false
  ),
  'demo-fintech-wise-mena': createEditorialProfile(
    'Wise rejoint l’Association fintech de la région MENA',
    ["Wise rejoint l'Association fintech de la région MENA, renforçant sa présence dans l'écosystème régional. Une adhésion professionnelle peut faciliter les échanges avec des acteurs locaux et donner accès à des discussions sectorielles, mais ne constitue pas en elle-même une annonce de lancement ou d'autorisation dans un pays.", "Pour les paiements transfrontaliers, la connaissance des règles locales et des partenaires de règlement est essentielle. La suite à surveiller concerne donc les marchés ciblés et les services effectivement proposés, plutôt que l'adhésion seule."],
    50, ['Écosystème fintech MENA', 'Paiements internationaux', 'Présence locale'],
    'Le rapprochement institutionnel peut préparer des échanges, sans prouver une expansion commerciale immédiate.',
    [
      ['Réseau de partenaires élargi', 'La participation à l’association peut faciliter le dialogue avec des fintechs et acteurs régionaux.', 'Partenariats et événements commerciaux annoncés', 1, 'À confirmer'],
      ['Préparation réglementaire', 'Les échanges locaux peuvent aider à comprendre des régimes de paiement différents selon les pays.', 'Nouvelles autorisations ou offres nationales', 1, 'À confirmer'],
      ['Concurrence transfrontalière', 'Une présence renforcée peut accroître la visibilité de Wise auprès des entreprises et consommateurs de la région.', 'Volume de services locaux effectivement lancé', 1, 'À confirmer']
    ],
    'Une adhésion à une association ne confirme ni lancement produit ni accès réglementaire dans la région.',
    [['medium', 'Suivre les annonces commerciales distinctes de l’adhésion.', 'Veille Fintech', 'Revue mensuelle'], ['medium', 'Identifier les pays MENA où nos clients ont des flux pertinents.', 'Paiements Internationaux', 'Sous 6 semaines'], ['medium', 'Réévaluer l’intérêt concurrentiel après une annonce de produit.', 'Stratégie', 'Si lancement confirmé']], true
  ),
  'demo-fintech-timo': createEditorialProfile(
    'Timo parmi les dix banques les mieux notées au Vietnam pour la satisfaction client',
    ["La banque numérique Timo figure parmi les dix établissements les mieux notés au Vietnam dans un classement de satisfaction client. Cette reconnaissance suggère une perception positive auprès des répondants de l'étude, mais sa portée dépend de la méthode, de l'échantillon et des critères retenus.", "La satisfaction peut être un avantage concurrentiel si elle se traduit par une meilleure fidélisation et une utilisation plus large des services. Elle ne remplace toutefois pas les indicateurs de rentabilité, de qualité opérationnelle ou de confiance observée sur la durée."],
    51, ['Satisfaction client au Vietnam', 'Classement comparatif', 'Fidélisation numérique'],
    'Un classement est un signal de perception, dont la méthodologie doit être connue avant comparaison.',
    [
      ['Effet de réputation', 'Une distinction publique peut renforcer la confiance et soutenir l’acquisition si le classement est crédible.', 'Visibilité du classement et évolution des inscriptions', 1, 'À confirmer'],
      ['Méthode de comparaison', 'Des échantillons ou questions différents peuvent rendre les rangs peu comparables entre banques.', 'Taille, période et critères de l’étude', 2, 'Possible'],
      ['Qualité durable à démontrer', 'La satisfaction devient stratégique si elle accompagne une rétention et un service fiables.', 'Rétention, réclamations et disponibilité du service', 1, 'À confirmer']
    ],
    'Le résumé n’indique pas l’organisme d’étude, sa méthode ni le rang exact de Timo.',
    [['medium', 'Retrouver l’étude et sa méthodologie avant toute comparaison.', 'Veille Concurrentielle', 'Sous 2 semaines'], ['medium', 'Comparer les critères avec nos indicateurs de satisfaction.', 'Expérience Client', 'Sous 1 mois'], ['medium', 'Suivre la rétention plutôt que le classement seul.', 'Data + Marketing', 'Revue trimestrielle']], true
  ),
  'demo-fintech-barq-funding': createEditorialProfile(
    'La fintech saoudienne barq lève 329,5 millions de dollars en série A',
    ["La fintech saoudienne barq annonce une levée de série A de 329,5 millions de dollars destinée au développement de ses partenariats de paiement. Le montant annoncé, s'il est confirmé dans les documents de l'opération, donnerait à l'entreprise des moyens importants pour accélérer son développement.", "Une levée de fonds n'indique pas à elle seule la part déjà disponible ni la rentabilité du modèle. Les éléments déterminants seront l'usage des capitaux, les partenariats conclus et la capacité à développer les volumes sans dégrader la qualité du service ou les coûts."],
    55, ['Financement fintech en Arabie saoudite', 'Partenariats de paiement', 'Déploiement des capitaux'],
    'Le financement augmente la capacité d’investissement annoncée, mais la stratégie d’exécution reste à vérifier.',
    [
      ['Expansion accélérée', 'Des capitaux importants peuvent permettre d’élargir les produits ou partenariats plus rapidement.', 'Répartition des fonds et nouveaux marchés annoncés', 1, 'À confirmer'],
      ['Concurrence pour les partenaires', 'Une croissance financée peut intensifier la concurrence pour les réseaux marchands et les clients.', 'Accords de paiement et volumes publiés', 1, 'À confirmer'],
      ['Discipline après la levée', 'La pression pour convertir le financement en revenus peut favoriser une expansion rapide et coûteuse.', 'Coût d’acquisition et récurrence des transactions', 1, 'À confirmer']
    ],
    'Le montant et les conditions de la série A sont rapportés par le titre; leur détail reste à confirmer.',
    [['medium', 'Confirmer le montant, les investisseurs et l’usage des fonds.', 'Veille Fintech', 'Sous 2 semaines'], ['medium', 'Cartographier les partenariats de paiement annoncés.', 'Partenariats + Paiements', 'Sous 6 semaines'], ['medium', 'Réévaluer la menace après publication de volumes ou marchés servis.', 'Stratégie', 'Revue trimestrielle']], false
  ),
  'demo-fintech-crossborder': createEditorialProfile(
    'Fin.com lève 20 millions de dollars pour développer les paiements transfrontaliers',
    ["Fin.com annonce une levée de 20 millions de dollars pour étendre ses services de paiements transfrontaliers. Le financement vise un marché où les entreprises et particuliers attendent des transferts plus rapides, des frais prévisibles et une meilleure visibilité sur le taux de change.", "L'expansion suppose de construire des relations bancaires et des capacités de conformité dans chaque corridor. Le montant levé ne dit pas quels pays seront prioritaires ni si l'entreprise dispose déjà de l'échelle nécessaire pour rivaliser sur les coûts et la fiabilité."],
    53, ['Paiements transfrontaliers', 'Financement de croissance', 'Corridors et conformité'],
    'La levée finance une ambition d’expansion; la couverture effective des corridors reste le critère opérationnel clé.',
    [
      ['Nouveaux corridors', 'Les fonds peuvent financer l’ouverture de marchés ou l’amélioration des délais de transfert.', 'Pays et routes de paiement ajoutés', 1, 'À confirmer'],
      ['Pression sur les prix', 'Une meilleure couverture peut intensifier la concurrence sur les frais et le change.', 'Tarifs comparés sur les principaux corridors', 1, 'À confirmer'],
      ['Conformité à grande échelle', 'L’expansion multiplie les règles locales, les contrôles de transaction et les dépendances bancaires.', 'Autorisations et partenaires par juridiction', 2, 'Possible']
    ],
    'Le résumé ne détaille pas les corridors ciblés, l’utilisation des fonds ni les licences obtenues.',
    [['medium', 'Confirmer les corridors et les autorisations de Fin.com.', 'Veille Paiements', 'Sous 3 semaines'], ['medium', 'Comparer coûts et délais sur nos flux internationaux prioritaires.', 'Paiements + Trésorerie', 'Sous 2 mois'], ['medium', 'Surveiller les partenariats bancaires et la couverture géographique.', 'Partenariats', 'Revue trimestrielle']], false
  ),
  'demo-fintech-atome-grab': createEditorialProfile(
    'Grab prend les commandes d’Atome Financial',
    ["Grab prend le contrôle d'Atome Financial, rapprochant davantage une super-application régionale et une activité de crédit numérique en Asie du Sud-Est. Ce changement de contrôle peut permettre de coordonner les services financiers avec les usages de commerce et de mobilité présents sur la plateforme.", "La valeur dépendra de la manière dont les données, la distribution et les décisions de crédit seront articulées. L'intégration peut réduire le coût d'accès aux clients, mais elle exige aussi des garde-fous sur le consentement, le risque d'endettement et le traitement des informations personnelles."],
    57, ['Contrôle d’Atome Financial', 'Distribution par super-application', 'Crédit numérique'],
    'Le rapprochement peut renforcer la distribution, tout en augmentant les enjeux de gouvernance des données et du crédit.',
    [
      ['Distribution intégrée', 'Grab pourrait proposer des services financiers à une base d’utilisateurs déjà active dans d’autres parcours.', 'Produits Atome intégrés aux canaux Grab', 2, 'Possible'],
      ['Données et décisions de crédit', 'Le rapprochement des données d’usage et de crédit pourrait accroître la sensibilité des décisions et des consentements.', 'Règles de partage de données et critères d’octroi', 2, 'Possible'],
      ['Dépendance à l’écosystème', 'Des commerçants ou clients pourraient dépendre davantage d’un canal unique pour accéder au crédit et aux paiements.', 'Part des volumes transitant par l’écosystème Grab', 1, 'À confirmer']
    ],
    'Le résumé ne précise pas les modalités financières, l’intégration opérationnelle ni les changements de produits.',
    [['medium', 'Confirmer le périmètre du changement de contrôle.', 'Veille Concurrentielle', 'Sous 2 semaines'], ['medium', 'Suivre l’intégration des offres de paiement et de crédit.', 'Fintech + Risques', 'Revue mensuelle'], ['medium', 'Évaluer les implications de données et de distribution pour nos partenaires.', 'Conformité + Partenariats', 'Sous 2 mois']], false
  ),
  'demo-fintech-india-digital': createEditorialProfile(
    'L’Inde mise sur la croissance pour devenir un leader mondial des paiements numériques et de la fintech',
    ["L'article présente l'ambition de l'Inde de renforcer sa place dans les paiements numériques et la fintech. Le pays dispose d'un vaste marché intérieur et d'une infrastructure numérique développée, deux leviers susceptibles de soutenir l'innovation et l'adoption à grande échelle.", "La croissance du secteur dépendra toutefois de la confiance, de la protection des consommateurs et de la capacité des acteurs à bâtir des modèles viables. Un leadership mondial ne se mesure pas seulement aux volumes de transactions, mais aussi à l'interopérabilité, à la résilience et à l'accès effectif aux services."],
    54, ['Paiements numériques en Inde', 'Infrastructure et adoption', 'Ambition fintech'],
    'La taille du marché crée une opportunité, mais la durabilité dépend des règles, de la confiance et de l’économie des services.',
    [
      ['Concurrence sur l’innovation', 'Une adoption rapide peut favoriser de nouveaux modèles et accélérer les attentes des utilisateurs.', 'Nouveaux services et croissance des utilisateurs actifs', 1, 'À confirmer'],
      ['Pression sur les infrastructures', 'Des volumes plus élevés augmentent les exigences de disponibilité, de prévention de fraude et d’interopérabilité.', 'Incidents, disponibilité et règles d’accès aux réseaux', 1, 'À confirmer'],
      ['Exportation de modèles', 'Des solutions éprouvées localement pourraient être reprises dans d’autres marchés émergents.', 'Partenariats internationaux et déploiements hors d’Inde', 1, 'À confirmer']
    ],
    'Le résumé décrit une ambition et ne donne ni indicateur de croissance ni mesure politique précise.',
    [['medium', 'Suivre les annonces officielles et les indicateurs d’adoption.', 'Veille Asie', 'Revue trimestrielle'], ['medium', 'Identifier les infrastructures et fintechs pertinentes pour nos partenaires.', 'Innovation + Partenariats', 'Sous 2 mois'], ['medium', 'Comparer les usages exportables aux marchés où nous opérons.', 'Stratégie', 'Prochain comité']], false
  ),
  'demo-fintech-bank-islam-cto': createEditorialProfile(
    'Melvin Ooi nommé directeur de la technologie du groupe Bank Islam',
    ["Melvin Ooi rejoint Bank Islam comme directeur de la technologie du groupe après avoir exercé des responsabilités chez Ryt Bank, selon l'article cité. Cette nomination place un nouveau dirigeant à la tête des choix technologiques d'un établissement présent en Malaisie.", "Un changement de direction peut ouvrir une revue des priorités numériques, des fournisseurs et de l'organisation des équipes, sans signifier qu'une stratégie particulière a déjà été décidée. Les premiers indices seront les programmes annoncés et la façon dont les investissements technologiques se traduisent en services."],
    48, ['Nomination technologique', 'Transformation bancaire', 'Priorités d’investissement'],
    'La nomination constitue un signal de gouvernance; ses conséquences dépendront des priorités ensuite annoncées.',
    [
      ['Réexamen des priorités', 'Un nouveau responsable peut revoir la séquence des projets ou la gouvernance des plateformes.', 'Premiers programmes et changements d’organisation', 1, 'À confirmer'],
      ['Accélération de partenariats', 'L’expérience antérieure du dirigeant peut influer sur les choix de fournisseurs ou de solutions.', 'Contrats et collaborations technologiques annoncés', 1, 'À confirmer'],
      ['Concurrence pour les talents', 'Les recrutements de dirigeants peuvent signaler une montée en puissance de l’investissement numérique régional.', 'Autres nominations et dépenses technologiques', 1, 'À confirmer']
    ],
    'Le résumé ne décrit ni le mandat détaillé ni les projets prioritaires de la nouvelle direction.',
    [['medium', 'Vérifier le parcours et le périmètre du poste annoncé.', 'Veille Concurrentielle', 'Sous 2 semaines'], ['medium', 'Suivre les premiers projets et partenariats rendus publics.', 'Innovation', 'Revue trimestrielle'], ['medium', 'Réévaluer l’enjeu concurrentiel si une nouvelle offre est lancée.', 'Stratégie', 'Sur annonce confirmée']], true
  ),
  'demo-finai-csbs-framework': createEditorialProfile(
    'Le CSBS publie un cadre de supervision de l’IA pour les examinateurs bancaires',
    ["Le CSBS publie un cadre destiné aux examinateurs des banques d'État aux États-Unis afin de structurer l'évaluation de l'intelligence artificielle. Le document peut aider les équipes de supervision à examiner la gouvernance, les contrôles et la gestion des risques liés aux usages de l'IA.", "Un cadre d'examen ne signifie pas automatiquement une nouvelle règle applicable de la même manière à chaque établissement. Il peut néanmoins influencer les questions posées lors des contrôles et inciter les banques à relier leurs inventaires de modèles, leurs validations et leurs procédures de suivi."],
    71, ['Supervision bancaire américaine', 'Examinateurs des États', 'Gouvernance de l’IA'],
    'Un cadre de supervision peut façonner les attentes pratiques même lorsqu’il ne crée pas, à lui seul, une obligation réglementaire nouvelle.',
    [
      ['Questions de contrôle plus structurées', 'Les examinateurs pourraient utiliser le cadre pour demander une documentation plus cohérente des usages IA.', 'Guides d’examen et questionnaires publiés', 2, 'Possible'],
      ['Convergence des pratiques', 'Les établissements pourraient harmoniser leur inventaire et leurs contrôles pour répondre à des attentes proches.', 'Références communes entre autorités et banques', 2, 'Possible'],
      ['Extension des attentes fournisseurs', 'Les banques pourraient exiger de leurs prestataires davantage de preuves sur les modèles intégrés.', 'Clauses IA et documentation des fournisseurs', 1, 'À confirmer']
    ],
    'Le contenu détaillé du cadre et son articulation avec les autres autorités doivent être vérifiés dans la publication originale.',
    [['high', 'Lire le cadre CSBS et relever les attentes applicables à nos usages.', 'Conformité + Risques IA', 'Sous 2 semaines'], ['medium', 'Comparer ces attentes à notre inventaire de modèles et fournisseurs.', 'Contrôle Permanent + Achats', 'Sous 6 semaines'], ['medium', 'Préparer une synthèse pour les équipes exposées aux exigences américaines.', 'Affaires Publiques', 'Prochain comité']], true
  ),
  'demo-finai-state-framework': createEditorialProfile(
    'Les régulateurs américains envisagent un cadre de l’IA pour les banques',
    ["Des régulateurs d'État américains envisagent un cadre pour évaluer l'intelligence artificielle utilisée par les banques. La proposition vise à donner aux examinateurs une base commune pour questionner les pratiques et les contrôles, dans un contexte où les outils se diffusent plus vite que les méthodes d'évaluation.", "Le terme 'envisagent' indique que le cadre est en discussion et ne doit pas être traité comme une règle déjà entrée en vigueur. Les banques actives aux États-Unis ont intérêt à suivre le processus et à distinguer les attentes proposées des obligations existantes."],
    64, ['Proposition réglementaire', 'Régulateurs d’État américains', 'Évaluation de l’IA bancaire'],
    'Le statut de la proposition est aussi important que son contenu : il s’agit d’une piste, pas d’une règle confirmée.',
    [
      ['Évolution du texte', 'Les consultations ou versions révisées pourraient modifier le périmètre et les contrôles attendus.', 'Publication d’un projet formel ou d’une consultation', 2, 'Possible'],
      ['Pratiques des examinateurs', 'Même avant une règle définitive, des questions communes peuvent apparaître dans les échanges de supervision.', 'Retours d’examens et communications officielles', 1, 'À confirmer'],
      ['Fragmentation réglementaire', 'Des cadres différents entre autorités pourraient augmenter le coût de conformité des groupes multi-États.', 'Écarts entre exigences fédérales et locales', 1, 'À confirmer']
    ],
    'Le résumé ne permet pas de confirmer le stade formel, le calendrier ou le texte exact de la proposition.',
    [['medium', 'Confirmer le stade réglementaire et les autorités concernées.', 'Veille Réglementaire US', 'Sous 2 semaines'], ['medium', 'Comparer les principes proposés aux contrôles existants.', 'Conformité + Risques IA', 'Après publication'], ['medium', 'Éviter tout changement de procédure avant clarification du périmètre.', 'Juridique', 'En continu']], true
  ),
  'demo-finai-mambu-core': createEditorialProfile(
    'Mambu lance Intelligent Core pour connecter l’IA aux systèmes bancaires centraux',
    ["Mambu annonce Intelligent Core, une plateforme destinée à relier des capacités d'intelligence artificielle aux systèmes bancaires centraux. L'objectif affiché est de rapprocher les traitements numériques des opérations cœur, où résident les comptes, produits et transactions essentiels.", "La valeur dépendra de l'interopérabilité avec les systèmes déjà en place, de la sécurité des échanges et de la manière dont les résultats IA sont contrôlés avant d'affecter une opération. Une annonce produit ne suffit pas à établir les gains de migration ou la disponibilité de chaque fonction."],
    56, ['Plateformes core banking', 'Intégration de l’IA', 'Interopérabilité et contrôle'],
    'Le point stratégique est l’intégration au système bancaire central, pas le seul ajout d’une interface IA.',
    [
      ['Intégration plus rapide', 'Une couche de connexion pourrait réduire le travail nécessaire pour tester des usages IA sur des données bancaires.', 'Connecteurs disponibles et délais d’intégration mesurés', 1, 'À confirmer'],
      ['Risque dans les opérations cœur', 'Une erreur ou une interruption à proximité du système central peut avoir une portée opérationnelle élevée.', 'Contrôles, journaux et limites d’action documentés', 2, 'Possible'],
      ['Dépendance à la plateforme', 'Une intégration profonde peut accélérer l’innovation tout en rendant le changement de fournisseur plus coûteux.', 'Portabilité des modèles, données et connexions', 1, 'À confirmer']
    ],
    'Le résumé ne précise pas les fonctions disponibles, les intégrations validées ni les résultats de déploiement.',
    [['medium', 'Examiner la documentation produit et les connecteurs réels.', 'Architecture + Innovation', 'Sous 1 mois'], ['medium', 'Évaluer les contrôles requis avant toute action IA sur le core.', 'Risques IT + Sécurité', 'Avant pilote'], ['medium', 'Comparer les coûts d’intégration et de réversibilité.', 'Achats + Architecture', 'Avant décision']], false
  ),
  'demo-finai-jb-upstage': createEditorialProfile(
    'JB Financial et Upstage s’allient pour créer des solutions d’IA dédiées à la finance',
    ["JB Financial et Upstage s'associent pour développer des solutions d'intelligence artificielle destinées aux activités financières. Le partenariat rapproche l'expertise métier d'un groupe financier et les capacités technologiques d'un fournisseur spécialisé.", "La réussite dépendra des cas d'usage choisis, de la qualité des données et du partage des responsabilités sur la validation des résultats. Le partenariat indique une intention de développement; il ne permet pas encore de savoir quels services seront commercialisés ni quels gains seront obtenus."],
    54, ['Partenariat banque-technologie', 'IA appliquée à la finance', 'Déploiement de cas d’usage'],
    'Le partenariat peut accélérer les essais, mais ses résultats dépendront des usages et contrôles effectivement déployés.',
    [
      ['Accès aux données métier', 'La collaboration peut aider à adapter les modèles aux processus financiers, sous réserve de règles d’accès claires.', 'Cas d’usage pilotes et données autorisées', 1, 'À confirmer'],
      ['Responsabilité partagée', 'Un incident peut soulever des questions sur la validation, la surveillance et la responsabilité du fournisseur.', 'Répartition des contrôles dans les accords', 2, 'Possible'],
      ['Offre réutilisable', 'Des solutions validées pourraient être proposées à d’autres institutions si elles sont suffisamment modulaires.', 'Produit commercial et premiers clients externes', 1, 'À confirmer']
    ],
    'Le résumé ne détaille pas les produits, les échéances ni les modalités de gouvernance du partenariat.',
    [['medium', 'Identifier les cas d’usage et le calendrier annoncé.', 'Veille Asie + Innovation', 'Sous 3 semaines'], ['medium', 'Comparer les responsabilités banque-fournisseur aux exigences internes.', 'Achats + Conformité', 'Avant tout partenariat'], ['medium', 'Suivre la commercialisation hors JB Financial.', 'Stratégie', 'Revue trimestrielle']], true
  ),
  'demo-finai-canada-adoption': createEditorialProfile(
    'Les banques canadiennes accélèrent l’adoption de l’IA, malgré des obstacles persistants',
    ["Les banques canadiennes accélèrent leurs initiatives d'intelligence artificielle, alors que des obstacles continuent de freiner le déploiement à grande échelle. Les limites peuvent concerner les données, les compétences, l'intégration aux systèmes existants ou la démonstration de contrôles adéquats.", "Cette combinaison de projets actifs et de difficultés structurelles suggère que l'avantage ne revient pas nécessairement au premier établissement à tester un modèle. La capacité à industrialiser des usages fiables, avec des résultats mesurés et une surveillance continue, peut compter davantage que le nombre de pilotes."],
    60, ['Adoption bancaire au Canada', 'Freins à l’industrialisation', 'Gouvernance et données'],
    'Le passage à l’échelle, plus que l’expérimentation isolée, constitue le principal point de différenciation.',
    [
      ['Pilotes qui stagnent', 'Des contraintes de données ou d’intégration peuvent empêcher un prototype de rejoindre les processus réels.', 'Part des pilotes convertis en production', 2, 'Possible'],
      ['Compétences rares', 'L’adoption peut dépendre de la capacité à réunir expertise technique, métier et contrôle.', 'Postes ouverts et délais de recrutement spécialisés', 1, 'À confirmer'],
      ['Écart d’exécution', 'Les banques capables de réutiliser données et contrôles peuvent convertir leurs projets plus rapidement.', 'Durée entre expérimentation et mise en service', 1, 'À confirmer']
    ],
    'Le résumé ne nomme ni les banques ni les obstacles les plus importants ou leurs mesures.',
    [['medium', 'Vérifier les freins documentés dans l’article complet.', 'Veille Innovation', 'Sous 2 semaines'], ['medium', 'Comparer le taux de passage en production de nos pilotes IA.', 'Transformation + Data', 'Sous 1 mois'], ['medium', 'Prioriser un obstacle commun à plusieurs cas d’usage.', 'Comité IA', 'Prochain comité']], true
  ),
  'demo-finai-kastle-funding': createEditorialProfile(
    'Kastle lève 24 millions de dollars en série A pour son IA bancaire',
    ["La société Kastle annonce une levée de série A de 24 millions de dollars pour développer ses outils d'intelligence artificielle appliqués aux services bancaires. Le financement apporte des moyens supplémentaires à une entreprise qui cherche à transformer sa technologie en offre déployable auprès d'établissements financiers.", "Pour les banques, l'intérêt dépendra des tâches couvertes, de la compatibilité avec les systèmes existants et des garanties de sécurité et de contrôle. Une levée de fonds signale une capacité de développement, mais pas encore l'adoption commerciale ni la performance du produit."],
    52, ['Financement d’une startup IA', 'Outils pour les banques', 'Maturité commerciale'],
    'Le financement soutient le développement du fournisseur; les preuves d’intégration et d’usage restent à venir.',
    [
      ['Développement produit accéléré', 'La levée peut financer le recrutement, l’infrastructure ou l’élargissement des fonctions.', 'Équipe, produits et marchés annoncés après l’opération', 1, 'À confirmer'],
      ['Offres concurrentes plus nombreuses', 'Un fournisseur mieux financé peut intensifier les appels d’offres sur l’automatisation bancaire.', 'Clients de référence et fonctions commercialisées', 1, 'À confirmer'],
      ['Exigences de diligence', 'Une solution IA émergente doit démontrer sa continuité de service et sa gouvernance avant une dépendance critique.', 'Références, audits et modalités de secours', 2, 'Possible']
    ],
    'Le résumé ne précise pas les investisseurs, les clients, les fonctions ou les résultats opérationnels de Kastle.',
    [['medium', 'Confirmer l’offre et les cas d’usage effectivement commercialisés.', 'Veille FinAI', 'Sous 3 semaines'], ['medium', 'Comparer la solution aux besoins et fournisseurs déjà référencés.', 'Achats + Innovation', 'Sous 2 mois'], ['medium', 'Exiger des preuves de contrôle et de continuité avant tout test sensible.', 'Sécurité + Risques IT', 'Avant pilote']], false
  ),
  'demo-finai-wema-risk': createEditorialProfile(
    'Le patron de Wema Bank appelle à renforcer la confiance numérique face aux risques de l’IA',
    ["Le directeur général de Wema Bank insiste sur la confiance numérique alors que les risques associés à l'intelligence artificielle attirent davantage l'attention. Le message place la sécurité, la fiabilité et la transparence au cœur de la capacité des clients à adopter des services enrichis par l'IA.", "La confiance se construit par des contrôles visibles: protection des données, traitement des erreurs, possibilité de recours et responsabilité clairement définie. Une déclaration de dirigeant n'établit pas à elle seule l'existence d'un incident ou d'une nouvelle règle, mais elle illustre un enjeu de gouvernance pour les établissements."],
    57, ['Confiance numérique', 'Risques liés à l’IA', 'Protection et recours clients'],
    'L’adoption de l’IA dépend aussi de la possibilité pour le client de comprendre et contester un résultat.',
    [
      ['Confiance mise à l’épreuve', 'Des erreurs ou usages opaques peuvent réduire l’adoption même lorsque l’outil fonctionne techniquement.', 'Réclamations et abandons sur les parcours utilisant l’IA', 1, 'À confirmer'],
      ['Contrôles intégrés au produit', 'La sécurité et les voies de recours peuvent devenir des critères de conception, pas seulement de conformité.', 'Contrôles clients et processus d’escalade documentés', 2, 'Possible'],
      ['Attentes sectorielles plus fortes', 'Les prises de position des banques peuvent contribuer à faire émerger des pratiques communes de confiance.', 'Engagements sectoriels et guides publiés', 1, 'À confirmer']
    ],
    'Le résumé rapporte une prise de position générale et ne décrit aucun incident ni mesure précise chez Wema Bank.',
    [['medium', 'Lire les risques concrets cités dans la déclaration originale.', 'Veille FinAI', 'Sous 2 semaines'], ['medium', 'Vérifier les mécanismes de recours des parcours IA internes.', 'Relation Client + Conformité', 'Sous 1 mois'], ['medium', 'Ajouter des indicateurs de confiance aux pilotes IA concernés.', 'Produit + Risques', 'Prochaine revue']], true
  ),
  'demo-finai-borrower-stress': createEditorialProfile(
    'La gouverneure adjointe de la RBI encourage l’IA pour détecter les emprunteurs en difficulté',
    ["Une responsable de la Reserve Bank of India encourage les prêteurs à utiliser l'intelligence artificielle et l'apprentissage automatique pour repérer plus tôt les signes de difficulté chez les emprunteurs. Une détection anticipée peut donner davantage de temps pour comprendre une situation et examiner des solutions adaptées.", "Ces signaux doivent toutefois être interprétés avec prudence: une baisse temporaire de revenus ou un changement de comportement ne signifie pas nécessairement un défaut futur. Les données utilisées, les biais possibles et la manière de contacter les clients sont déterminants pour éviter qu'un outil d'alerte ne pénalise injustement les emprunteurs."],
    65, ['Détection précoce du stress', 'Crédit et accompagnement', 'Supervision de la RBI'],
    'Une alerte précoce n’a de valeur que si elle déclenche une vérification humaine et un accompagnement proportionné.',
    [
      ['Contact plus précoce', 'Les prêteurs pourraient proposer un échange ou une solution avant qu’un retard ne s’accumule.', 'Délai entre premier signal, contact et résolution', 2, 'Possible'],
      ['Faux positifs et biais', 'Des données incomplètes peuvent classer à tort certains emprunteurs comme en difficulté.', 'Taux d’alertes infirmées selon les profils', 2, 'Possible'],
      ['Prévention plutôt que recouvrement', 'Une approche bien conçue peut déplacer les ressources vers l’accompagnement et réduire les défauts évitables.', 'Résultats de remboursement après intervention', 1, 'À confirmer']
    ],
    'Le résumé rapporte une recommandation de supervision; il ne démontre pas l’efficacité d’un modèle particulier.',
    [['medium', 'Évaluer les signaux d’alerte déjà disponibles dans nos portefeuilles.', 'Risques Crédit + Data', 'Sous 1 mois'], ['medium', 'Tester la précision et les biais avant tout contact automatisé.', 'Modélisation + Conformité', 'Avant pilote'], ['medium', 'Associer les alertes pertinentes à un parcours d’accompagnement client.', 'Crédit + Relation Client', 'Après validation']], true
  ),
  'demo-finai-singapore-ai': createEditorialProfile(
    'À Singapour, les banques intègrent le suivi des dépenses par l’IA dans leurs applis',
    ["Des banques singapouriennes ajoutent à leurs applications des fonctions d'intelligence artificielle capables de classer ou suivre les dépenses des particuliers. L'objectif est de transformer les opérations du compte en vues plus lisibles et en outils de gestion du budget accessibles dans le canal bancaire habituel.", "La qualité de la fonction dépend de la précision des catégories, de la couverture des transactions et du consentement donné à l'analyse. Une suggestion erronée ou une interprétation trop intrusive peut diminuer la confiance, même si le service est présenté comme une aide au quotidien."],
    58, ['Applications bancaires à Singapour', 'Catégorisation des dépenses', 'Données de transaction'],
    'La fonction peut améliorer la lisibilité du budget, mais sa précision et son explication comptent pour l’adoption.',
    [
      ['Catégories inexactes', 'Les libellés marchands ambigus peuvent produire des classements erronés et des budgets trompeurs.', 'Corrections manuelles et catégories contestées', 2, 'Possible'],
      ['Usage secondaire des données', 'L’analyse des transactions peut soulever des questions sur la personnalisation et les finalités autorisées.', 'Consentements, paramètres et plaintes clients', 2, 'Possible'],
      ['Conseil à valeur ajoutée', 'Des tendances fiables peuvent aider à proposer des alertes utiles ou un accompagnement financier adapté.', 'Usage récurrent et actions initiées après les insights', 1, 'À confirmer']
    ],
    'Le résumé ne nomme pas les banques, la technologie ni la précision mesurée des fonctions.',
    [['medium', 'Comparer les fonctions disponibles et la manière dont elles expliquent les catégories.', 'Veille Asie + Digital', 'Sous 3 semaines'], ['medium', 'Vérifier le consentement et les règles d’utilisation des transactions.', 'Conformité + Data', 'Avant conception'], ['medium', 'Tester l’utilité avec les corrections et usages répétés comme mesures.', 'Expérience Client', 'Lors d’un pilote']], true
  ),
  'demo-finai-boe-warning': createEditorialProfile(
    'Andrew Bailey alerte le G20 sur les risques économiques de l’IA',
    ["Andrew Bailey, gouverneur de la Banque d'Angleterre, alerte le G20 sur les risques économiques et financiers associés à l'intelligence artificielle. Le message porte sur des effets potentiellement systémiques: une technologie largement adoptée peut modifier les comportements de marché, les opérations et les dépendances entre acteurs.", "Une mise en garde ne signifie pas qu'un ralentissement mondial provoqué par l'IA est imminent. Elle invite plutôt les autorités et les institutions à examiner les canaux de transmission, notamment les usages concentrés, les fournisseurs communs, les erreurs à grande échelle et les changements rapides de l'emploi ou de la productivité."],
    63, ['Alerte au G20', 'Risques économiques de l’IA', 'Dépendances systémiques'],
    'Le risque décrit est un scénario à examiner, pas une prévision certaine de récession.',
    [
      ['Choc technologique concentré', 'Une dépendance commune à quelques modèles ou fournisseurs pourrait amplifier une défaillance.', 'Concentration des fournisseurs et incidents partagés', 1, 'À confirmer'],
      ['Volatilité et décisions automatisées', 'Des systèmes réagissant à des signaux semblables pourraient accélérer des mouvements de marché.', 'Comportement des modèles lors d’épisodes de stress', 1, 'À confirmer'],
      ['Gains inégalement répartis', 'Une hausse de productivité peut coexister avec des coûts d’ajustement pour certains métiers et secteurs.', 'Évolution de l’emploi, de la productivité et des revenus', 1, 'À confirmer']
    ],
    'Le résumé ne précise pas les mécanismes quantifiés derrière l’avertissement ni le scénario retenu par la Banque d’Angleterre.',
    [['medium', 'Lire le discours pour distinguer risques identifiés et scénarios hypothétiques.', 'Veille Macro + IA', 'Sous 2 semaines'], ['medium', 'Intégrer les dépendances communes à la cartographie des fournisseurs IA.', 'Risques Opérationnels', 'Sous 2 mois'], ['medium', 'Suivre les analyses des autorités avant de modifier les scénarios macro.', 'Économistes + Risques', 'Revue trimestrielle']], true
  )
};

Object.assign(editorialProfiles, {
  'news-shopify-canvas': createEditorialProfile(
    'Shopify lance Canvas, un outil de creation de boutiques pilote par conversation',
    [
      "Shopify a lance Canvas, un outil qui permet aux marchands de creer et de modifier leur boutique en ligne en dialoguant avec Sidekick, l’agent d’intelligence artificielle de la plateforme. Les changements sont appliques au theme reel au fil de la conversation. Le marchand peut examiner l’ensemble de la boutique, zoomer sur un element ou reprendre la main pour effectuer une modification manuelle.",
      "Jusqu’ici, l’outil sans code de Shopify reposait principalement sur des themes composes de sections et de blocs. Les ajustements avances impliquaient souvent de modifier du code ou de faire appel a un developpeur. Canvas cherche a rapprocher ces possibilites techniques d’une interface accessible: le marchand formule le resultat souhaite, et Sidekick intervient directement dans les fichiers du theme.",
      "La difference avec une simple maquette est importante. Canvas affiche le code et le rendu de la boutique, afin que l’utilisateur puisse verifier les interactions, les animations et l’apparence sur plusieurs tailles d’ecran. Sidekick peut aussi prendre des captures de l’avancement. Shopify a adapte l’architecture des themes pour que l’agent puisse mieux en comprendre la structure et les modifier.",
      "Le lancement reste toutefois preliminaire. La premiere version est reservee aux ordinateurs et ne prend pas encore en charge les themes tiers, les extensions d’applications, les marches, les traductions, les deploiements progressifs ni les mises a jour de themes. Les boutiques dont l’activite depend de ces fonctions devront donc conserver leurs processus actuels. Canvas s’inscrit dans la concurrence entre constructeurs de sites assistes par IA, mais son enjeu pratique sera de reduire le delai entre une idee commerciale et une boutique fonctionnelle, sans rendre les changements plus difficiles a controler."
    ],
    71, ['Commerce numerique', 'Creation de boutiques', 'Agents IA et controle marchand'],
    'L’IA intervient ici dans la configuration du canal marchand; les limites de la premiere version sont encore importantes.',
    [
      ['Creation plus accessible', 'Une interface conversationnelle peut reduire le besoin d’interventions techniques pour les modifications courantes.', 'Part des modifications realisees sans developpeur', 2, 'Possible'],
      ['Controle du code genere', 'Les changements directs dans les themes demandent des outils de revue, de retour arriere et de test.', 'Historique des changements et taux d’incidents', 2, 'Possible'],
      ['Dependance a la plateforme', 'Une simplification peut renforcer l’attachement a l’environnement Shopify si les themes deviennent plus specifiques a Canvas.', 'Portabilite des themes et fonctions manquantes', 1, 'A confirmer']
    ],
    'L’outil est en lancement initial et plusieurs fonctions ainsi que la disponibilite mobile ne sont pas encore incluses.',
    [['medium', 'Suivre l’adoption de Canvas et les fonctions ajoutees au produit.', 'Veille Commerce', 'Revue mensuelle'], ['medium', 'Evaluer les usages des agents IA pour configurer des parcours marchands.', 'Innovation + Paiements', 'Sous 2 mois'], ['low', 'Ne pas extrapoler les gains tant que les resultats utilisateurs ne sont pas publies.', 'Strategie', 'A chaque revue']], false
  ),
  'news-dlocal-linkedin': createEditorialProfile(
    'dLocal active les paiements par carte en monnaie locale pour LinkedIn en Amerique latine',
    [
      "LinkedIn s’est associe a dLocal pour accepter les paiements par carte en monnaie locale au Bresil, au Mexique, en Colombie et au Chili. Le dispositif vise les membres qui achetent des services sur la plateforme et pour lesquels un prix ou un parcours de paiement exprime dans une devise etrangere peut compliquer la transaction.",
      "dLocal, entreprise uruguayenne specialisee dans les paiements transfrontaliers, fournit l’infrastructure necessaire a cette prise en charge. Pour LinkedIn, le partenariat permet de proposer un paiement qui correspond davantage aux habitudes locales sans construire separement toute la chaine d’acceptation dans chacun des quatre pays. Les deux entreprises presentent cette premiere couverture comme une base susceptible d’etre elargie dans la region.",
      "Le sujet depasse la seule conversion de devise. Les plateformes internationales doivent composer avec des moyens de paiement, des regles de change, des exigences de conformite et des relations d’acquisition differents selon les pays. Les refus de paiement et les etapes perçues comme inhabituelles peuvent interrompre un achat avant meme que l’utilisateur n’accede au service. Une couche locale d’acceptation tente de reduire cette friction tout en laissant l’entreprise internationale garder un parcours commun.",
      "dLocal indique operer dans plus de 60 pays et s’appuyer sur une API, une plateforme et un contrat uniques pour les grandes entreprises. Ces caracteristiques decrivent son modele, mais ne constituent pas a elles seules une mesure de performance de ce partenariat. Les prochaines indications utiles seront l’extension eventuelle a d’autres pays, les moyens de paiement ajoutes et les resultats publies sur l’acceptation. Pour les acteurs bancaires, le cas illustre le role d’intermediaires capables de relier une marque mondiale aux infrastructures et usages de paiement locaux."
    ],
    73, ['Paiement transfrontalier', 'Acceptation en monnaie locale', 'Bresil, Mexique, Colombie et Chili'],
    'Le partenariat est en place dans quatre pays; aucun taux d’acceptation ou gain chiffre n’est communique dans l’article.',
    [
      ['Friction de paiement reduite', 'Une devise familiere et une acceptation locale peuvent limiter les abandons et refus au paiement.', 'Taux d’autorisation et abandons par pays', 2, 'Possible'],
      ['Intermediation accrue', 'Une API regionale simplifie le lancement mais ajoute une dependance envers un prestataire de paiement.', 'Disponibilite, couts et plans de continuite', 2, 'Possible'],
      ['Extension regionale', 'La couverture actuelle pourrait servir de modele a d’autres marches d’Amerique latine.', 'Nouveaux pays et nouveaux moyens de paiement', 1, 'A confirmer']
    ],
    'Les resultats commerciaux du partenariat et son calendrier d’extension ne sont pas encore publies.',
    [['medium', 'Comparer les parcours locaux et les indicateurs d’acceptation par pays.', 'Paiements + Data', 'Sous 6 semaines'], ['medium', 'Cartographier les dependances aux plateformes d’acceptation regionales.', 'Achats + Risques', 'Sous 2 mois'], ['low', 'Suivre l’extension du partenariat avant d’en deduire une tendance generale.', 'Veille Fintech', 'Revue trimestrielle']], true
  ),
  'news-european-payments-network': createEditorialProfile(
    'Cinq reseaux de paiement creent une entite europeenne d’interoperabilite',
    [
      "Bancomat en Italie, Bizum en Espagne, EPI Company et son portefeuille Wero, SIBS et MB WAY au Portugal, ainsi que Vipps MobilePay en Norvege ont cree l’European Network for Payments, ou ENP. L’entite commune, dont le siege est en Espagne, doit organiser l’interoperabilite entre ces solutions nationales. Elle concretise un memorandum signe par les partenaires en fevrier 2026.",
      "Les cinq membres fondateurs detiennent des parts egales. ENP est chargee de coordonner les aspects techniques et operationnels du reseau et de decider de l’ajout de nouvelles fonctions. D’autres solutions europeennes deja etablies pourraient le rejoindre, sous reserve de l’accord des membres et du respect d’exigences techniques et operationnelles. Le projet conserve les marques existantes au lieu de les remplacer par une application unique.",
      "Selon les partenaires, les solutions regroupees representent environ 130 millions d’utilisateurs dans 13 pays, soit plus de 70 % de la population de l’Union europeenne et de la Norvege. Le plan annonce est progressif: les paiements entre particuliers au-dela des frontieres doivent venir en premier, avant les paiements en ligne et en point de vente. L’infrastructure s’appuierait notamment sur des normes europeennes et sur les paiements instantanes de compte a compte.",
      "Pour un utilisateur, la promesse est de pouvoir conserver son moyen de paiement domestique lors d’un achat ou d’un transfert dans un autre pays participant. Pour un commercant, une couche commune pourrait eviter d’integrer chaque reseau national separement. Mais la creation juridique d’ENP n’equivaut pas encore a un service paneuropeen disponible: l’implementation technique, les regles de participation et chaque phase de deploiement restent a realiser. Le signal strategique est celui d’acteurs etablis qui cherchent a relier leurs reseaux plutot qu’a repartir de zero face aux grands schemas internationaux."
    ],
    77, ['Interoperabilite europeenne', 'Paiements instantanes de compte a compte', 'Deploiement en plusieurs phases'],
    'ENP est constituee, mais les paiements transfrontaliers pour le grand public dependent encore de l’implementation et du calendrier de lancement.',
    [
      ['Experience transfrontaliere', 'La conservation des applications domestiques pourrait rendre les paiements transfrontaliers plus familiers.', 'Dates et pays couverts par les premiers transferts P2P', 2, 'Possible'],
      ['Acceptation commercant', 'Une couche commune peut reduire le nombre d’integrations necessaires si les regles sont effectivement harmonisees.', 'Conditions d’acces et couts d’acceptation', 2, 'Possible'],
      ['Infrastructure et souverainete', 'Un reseau europeen pourrait modifier la repartition entre solutions domestiques et schemas internationaux.', 'Volumes et parts de transactions une fois lancees', 1, 'A confirmer']
    ],
    'Les volumes cites correspondent aux bases des solutions partenaires; ils ne representent pas encore des utilisateurs actifs du reseau commun.',
    [['high', 'Suivre les specifications, le calendrier et les conditions d’interoperabilite.', 'Paiements Europe', 'Sous 1 mois'], ['medium', 'Cartographier les recouvrements avec nos moyens de paiement domestiques.', 'Strategie + Paiements', 'Sous 2 mois'], ['medium', 'Evaluer les impacts commerçants lorsque les phases ecommerce et POS seront datees.', 'Acquisition', 'A chaque annonce']], true
  ),
  'news-mastercard-agent-pay': createEditorialProfile(
    'Mastercard ajoute des signaux de confiance a Agent Pay',
    [
      "Mastercard etend son offre Agent Pay avec des services d’intelligence et de confiance destines a donner davantage de contexte aux paiements realises par des agents d’intelligence artificielle. L’entreprise travaille notamment avec Cloudflare et Skyfire. Le but affiche est d’aider les emetteurs et les commercants a distinguer une activite automatisee attendue d’un comportement qui merite un controle supplementaire.",
      "La premiere fonction annoncee est un score de probabilite teste aux Etats-Unis. Il estime la possibilite qu’une transaction ait ete initiee par un agent IA et doit aider les emetteurs a autoriser les achats legitimes. Mastercard prevoit ensuite d’ajouter des signaux sur le comportement, le risque commercant, les habitudes transactionnelles, les identifiants et la propension du consommateur.",
      "Le probleme pratique est celui de l’intention. Un client peut autoriser un assistant a reserver un voyage, lequel effectuera ensuite plusieurs achats aupres de compagnies aeriennes, d’hotels ou de services de transport. Sans contexte partage, ces operations peuvent sembler inhabituelles aux systemes de fraude. Mastercard veut associer des indications sur l’identite de l’agent, son mandat et les caracteristiques de la transaction pour permettre une decision mieux informee.",
      "Cloudflare et Mastercard explorent des environnements proteges pour comprendre les signaux issus du web et des paiements. Skyfire apporte une expertise d’identification et de verification d’agents, presentee comme une facon de reconnaitre les agents de confiance. Il s’agit toutefois d’une infrastructure en construction: le score est en test aux Etats-Unis et l’article ne publie ni taux de precision ni resultat de reduction de fraude. Pour les banques, l’enjeu a terme sera de verifier que ces signaux ameliorent les decisions sans exposer inutilement les donnees ni rendre l’autorisation dependante d’un fournisseur unique."
    ],
    72, ['Paiements initiés par des agents', 'Signaux de fraude et d’identite', 'Tests initiaux aux Etats-Unis'],
    'Le score est en phase de test; ses performances et son adoption a grande echelle ne sont pas encore documentees.',
    [
      ['Nouveau contexte d’autorisation', 'Les banques pourraient recevoir des indicateurs sur l’agent et son mandat pour mieux interpreter une transaction.', 'Disponibilite et usage des nouveaux signaux', 2, 'Possible'],
      ['Faux refus ou abus', 'Un agent legitime peut ressembler a une anomalie; un agent compromis peut aussi paraitre regulier.', 'Taux de refus, contestations et fraude agent', 2, 'Possible'],
      ['Normes et dependances', 'La confiance peut se concentrer autour de quelques identifiants ou infrastructures prives.', 'Portabilite des signaux et gouvernance partagee', 1, 'A confirmer']
    ],
    'Les estimations d’adoption de l’achat agentique citees par l’entreprise sont des projections, pas des usages observes.',
    [['medium', 'Suivre les resultats des essais et les conditions d’acces aux signaux.', 'Fraude + Paiements', 'Sous 2 mois'], ['medium', 'Definir les preuves de mandat requises pour des achats delegues.', 'Conformite + Parcours Client', 'Sous 6 semaines'], ['low', 'Ne pas modifier les regles d’autorisation avant d’avoir des mesures independantes.', 'Risques Paiements', 'Avant pilote']], true
  ),
  'news-esma-mica': createEditorialProfile(
    'ESMA propose de faire evoluer MiCA sur la DeFi, le staking et les stablecoins',
    [
      "L’Autorite europeenne des marches financiers (ESMA) a transmis sa reponse a la consultation de la Commission europeenne sur la revision du reglement MiCA. Ses recommandations couvrent la protection des investisseurs, les pouvoirs de supervision, la finance decentralisee, la classification des crypto-actifs, la simplification des procedures et le developpement des marches tokenises. Il s’agit de propositions adressees a la Commission, et non d’un texte deja adopte.",
      "Sur la protection des investisseurs, ESMA souhaite renforcer la transparence sur les couts et encadrer plus clairement la promotion des crypto-actifs, notamment lorsqu’elle passe par des influenceurs ou d’autres tiers. Pour le staking, le pret et l’emprunt de crypto-actifs, l’autorite preconise des obligations proportionnees de divulgation. Les clients devraient pouvoir comprendre les frais, les risques, les recompenses, les garanties et les pertes possibles avant de prendre une decision.",
      "Le document recommande egalement des pouvoirs de supervision plus forts pour lutter contre les services non autorises, les fraudes en ligne et les stablecoins non conformes a MiCA. ESMA propose notamment d’ameliorer la capacite europeenne a detecter et faire bloquer des sites frauduleux, et evoque des pouvoirs de gel d’actifs lorsque des soupcons d’abus de marche ou de financement du terrorisme existent. L’autorite veut aussi clarifier les criteres permettant de qualifier une activite de veritablement decentralisee et de classer de nouveaux types de jetons, dont les jetons hybrides.",
      "Pour les entreprises, la proposition combine simplification et surveillance renforcee. Certaines notifications de livres blancs pourraient etre allegees, tout comme des autorisations redondantes pour des acteurs deja reglementes. A plus long terme, ESMA appelle a un cadre pour les titres tokenises et le reglement sur chaine. Ces evolutions pourraient modifier les obligations des prestataires crypto et les frontieres entre activites reglementees et decentralisees. La prochaine etape appartient a la Commission europeenne, qui devra arbitrer entre ces recommandations et toute modification legislative eventuelle."
    ],
    79, ['Revision de MiCA', 'Protection des investisseurs', 'Classification et supervision crypto'],
    'La publication exprime les recommandations d’ESMA dans le cadre d’une consultation; elle ne modifie pas encore les obligations en vigueur.',
    [
      ['Evolution des obligations', 'Les propositions sur marketing, stablecoins et services de staking pourraient affecter les prestataires autorises.', 'Texte de la Commission et calendrier legislatif', 2, 'Possible'],
      ['Classification plus coherente', 'Des criteres ou avis contraignants pourraient reduire les divergences de traitement entre pays.', 'Regles sur les jetons hybrides et competences d’ESMA', 2, 'Possible'],
      ['Surveillance accrue', 'Les pouvoirs proposes visent aussi les plateformes, sites frauduleux et acteurs de pays tiers.', 'Reponse de la Commission et accords de supervision', 2, 'Possible']
    ],
    'Il faut distinguer les recommandations de l’autorite du droit applicable et attendre les decisions de la Commission et du legislateur.',
    [['high', 'Comparer les recommandations ESMA a nos expositions crypto et fournisseurs.', 'Juridique + Conformite', 'Sous 3 semaines'], ['medium', 'Identifier les activites concernees par staking, stablecoins et classification des jetons.', 'Conformite + Risques', 'Sous 2 mois'], ['medium', 'Suivre la reponse de la Commission avant toute interpretation comme obligation.', 'Affaires Publiques', 'Revue mensuelle']], true
  ),
  'news-finastra-scf': createEditorialProfile(
    'Finastra lance une plateforme de financement de la chaine d’approvisionnement',
    [
      "Finastra a lance Finastra Supply Chain Finance, une plateforme de financement de la chaine d’approvisionnement destinee aux banques. La solution couvre plusieurs etapes du programme, depuis l’acquisition et l’integration des acheteurs et fournisseurs jusqu’au traitement, au service des dossiers, a la gestion des risques et a la distribution secondaire des actifs.",
      "Le produit est integre a Trade Innovation et Loan IQ par la suite d’API Nexus. Finastra cherche ainsi a relier le financement du commerce, les prets et les programmes de financement fournisseurs au sein d’un environnement commun. Pour une banque, une telle architecture peut limiter les ruptures entre outils et donner une vue plus unifiee des limites, des expositions et des donnees associees a ses clients entreprises.",
      "La plateforme est concue pour se connecter aux systemes de gestion integree des entreprises et aux partenaires de l’ecosysteme. Elle peut etre exploitee sur site ou en mode SaaS. Finastra indique qu’elle vise des milliers de contreparties et des millions de factures, avec un traitement en temps reel. Le fournisseur integre egalement des fonctions de detection de fraude, de filtrage de conformite et de verification de l’eligibilite dans les flux de travail.",
      "Le lancement s’inscrit dans la strategie de Finastra visant a faire evoluer Trade Innovation vers un environnement modulaire, oriente API et adapte au cloud. Des extensions sont annoncees pour le financement de bons de commande, de stocks, de distributeurs et des financements allant de l’avant-expedition a l’apres-expedition, sans calendrier publie. Pour les banques, la promesse est de lancer plus rapidement de nouveaux produits de fonds de roulement; la valeur devra se verifier dans les delais d’integration, la qualite des donnees, l’adoption par les fournisseurs et la maitrise des risques."
    ],
    74, ['Financement du commerce', 'Fonds de roulement', 'Integration bancaire et ERP'],
    'La plateforme et sa capacite cible sont annoncees par le fournisseur; aucun resultat client ou calendrier d’extension n’est fourni.',
    [
      ['Offre plus integree', 'Une plateforme commune peut rapprocher les decisions de credit, les limites et les flux de financement.', 'Integrations clients et delais de mise en service', 2, 'Possible'],
      ['Risque de migration', 'Les dependances entre trade finance, prets et ERP rendent la qualite de l’integration determinante.', 'Incidents, reconciliation et couts de migration', 2, 'Possible'],
      ['Nouveaux produits entreprises', 'Le financement des stocks ou des commandes pourrait elargir les besoins couverts par les banques.', 'Modules effectivement livres et volumes finances', 1, 'A confirmer']
    ],
    'Le calendrier produit et les performances de la solution en exploitation ne sont pas indiques.',
    [['medium', 'Comparer les fonctions annoncees a notre feuille de route de trade finance.', 'Financement Entreprises', 'Sous 6 semaines'], ['medium', 'Demander des references et mesures d’integration avant evaluation fournisseur.', 'Architecture + Achats', 'Avant consultation'], ['low', 'Surveiller les modules prevus sans les traiter comme deja disponibles.', 'Veille Technologie', 'Revue trimestrielle']], true
  ),
  'news-airtel-ifc': createEditorialProfile(
    'IFC investit jusqu’a 90 millions de dollars dans Airtel Money avant son projet d’introduction en Bourse',
    [
      "La Societe financiere internationale, branche du Groupe Banque mondiale, s’est engagee a investir jusqu’a 90 millions de dollars dans Airtel Mobile Commerce N.V., l’entite qui exploite Airtel Money. L’investissement est prevu comme une prise de participation de reference dans le cadre d’une introduction en Bourse envisagee a Londres. Airtel Africa prepare la publication du prospectus officiel de l’operation.",
      "La transaction envisagee est une cession d’actions existantes plutot qu’une augmentation de capital apportant directement de nouveaux fonds a l’entreprise. Airtel Africa, qui detient 77,85 % de l’entite, devrait vendre une partie de ses titres, avec certains investisseurs minoritaires. Des estimations de marche evoquent une levee d’environ 800 millions de dollars et une valorisation cible comprise entre 8 et 9 milliards, mais ces chiffres ne remplacent pas les conditions definitives qui figureront dans le prospectus.",
      "Airtel Money est presente dans 13 pays d’Afrique subsaharienne. Pour l’exercice clos en mars 2026, l’activite a declare 1,3 milliard de dollars de revenus et une marge d’EBITDA proche de 50 %. La plateforme s’appuie aussi sur les infrastructures et le reseau d’agents de sa maison mere, Airtel Africa, qui compte 189 millions d’abonnes telecoms. Cette relation peut soutenir la distribution, mais les conditions de services factures entre les deux entites influencent les resultats d’Airtel Money en tant qu’entreprise autonome.",
      "C’est precisement la question que devront examiner les investisseurs: quelle rentabilite restera une fois les couts de reseau, de distribution et d’acquisition de clients attribues a l’activite cotee? L’article signale egalement la volatilite des devises, les concurrents numeriques et les couts operationnels regionaux comme facteurs de risque. La direction projette une forte croissance des volumes de transactions numeriques d’ici 2031, mais la cotation et son calendrier restent conditionnes a la documentation reglementaire et a l’accueil des investisseurs."
    ],
    76, ['Fintech africaine', 'Introduction en Bourse envisagee', 'Dependance aux infrastructures telecoms'],
    'Le montant d’investissement est un engagement pouvant aller jusqu’a 90 millions de dollars; l’IPO et sa valorisation restent a finaliser.',
    [
      ['Valorisation des paiements mobiles', 'Une operation a Londres fournirait un point de comparaison public pour une activite fintech panafricaine.', 'Prospectus, valorisation finale et demande investisseurs', 2, 'Possible'],
      ['Autonomie economique', 'Les couts factures par la maison mere peuvent modifier la marge d’une activite separee.', 'Accords de services et evolution de la marge autonome', 2, 'Possible'],
      ['Financement et inclusion', 'Un nouvel acces au capital pourrait soutenir les services financiers mobiles dans plusieurs marches.', 'Investissements et nouveaux services publies', 1, 'A confirmer']
    ],
    'Les estimations de valorisation, le calendrier de cotation et la croissance projetee ne sont pas des resultats garantis.',
    [['medium', 'Attendre le prospectus pour distinguer engagement, cession et nouveaux capitaux.', 'Veille Marches', 'A publication'], ['medium', 'Suivre les indicateurs autonomes et les couts d’infrastructure.', 'Analyse Financiere', 'Revue trimestrielle'], ['low', 'Comparer l’operation aux autres modeles de mobile money africains.', 'Strategie Internationale', 'Sous 3 mois']], false
  ),
  'news-natwest-ai': createEditorialProfile(
    'NatWest teste des outils d’IA pour le budget et l’orientation en cas de fraude',
    [
      "NatWest Group a annonce deux initiatives d’intelligence artificielle destinees aux particuliers. La premiere, Spending Insights, est testee par l’intermediaire de Royal Bank of Scotland et permet d’explorer ses depenses en utilisant la voix ou le texte. La seconde, Fraud Triage Agent, est integree a Cora, l’assistant numerique de NatWest, pour aider les clients qui pensent avoir repere une transaction suspecte sur leur carte de credit.",
      "Avec Spending Insights, un client peut poser des questions sur ses achats, son budget ou ses habitudes, puis approfondir le sujet par des demandes de suivi. L’outil peut presenter les donnees de transaction sous forme d’informations interactives et de graphiques. NatWest indique que son bureau de recherche en IA a utilise un petit modele de langage proprietaire pour permettre des echanges vocaux en temps reel. L’initiative est un essai, et non une mise a disposition generale annoncee pour toutes les marques du groupe.",
      "Fraud Triage Agent repond a un probleme different: un client inquiet ne sait pas toujours s’il doit signaler une fraude, une escroquerie ou contester un achat. Il peut decrire la situation avec ses propres mots et recevoir une orientation vers le service adapte. Selon The Paypers, l’agent avait deja traite pres de 19 000 conversations. Ce volume montre un usage du parcours, mais ne renseigne pas sur la resolution des dossiers ou la precision de l’orientation.",
      "L’annonce accompagne une etude de NatWest sur l’adoption de l’IA au Royaume-Uni. Parmi les personnes interrogees, 57 % disaient utiliser l’IA davantage qu’un semestre auparavant; 81 % jugeaient important de pouvoir acceder a une personne reelle pour etablir la confiance. Les attentes relatives a la fiabilite, a l’utilisation des donnees et au controle independant etaient egalement elevees. Pour la banque, la combinaison de conversation automatisee et d’escalade humaine sera donc aussi importante que la qualite du modele."
    ],
    78, ['IA conversationnelle bancaire', 'Orientation fraude et litige', 'Confiance et intervention humaine'],
    'L’essai Spending Insights est limite et le volume de conversations de l’agent fraude ne mesure pas, a lui seul, la resolution des cas.',
    [
      ['Meilleure orientation client', 'Une description libre peut eviter au client de choisir seul entre fraude, escroquerie et contestation.', 'Taux d’orientation correcte et dossiers resolus', 2, 'Possible'],
      ['Conseil budget personnalise', 'Des donnees de compte rendues lisibles peuvent encourager une utilisation recurrente du canal bancaire.', 'Usage repete, corrections et satisfaction client', 1, 'A confirmer'],
      ['Confiance et escalade', 'Les attentes concernant un interlocuteur humain imposent de concevoir une sortie claire de l’automatisation.', 'Transferts vers conseiller et reclamations', 2, 'Possible']
    ],
    'Les statistiques d’adoption proviennent d’une etude commanditee par NatWest et ne doivent pas etre generalisees sans methode complete.',
    [['medium', 'Suivre les resultats d’essai au-dela du nombre de conversations.', 'Experience Client + Fraude', 'Sous 2 mois'], ['medium', 'Definir les cas ou le parcours doit passer rapidement a un conseiller.', 'Relation Client', 'Avant pilote'], ['low', 'Verifier les methodes d’etude avant de comparer les chiffres d’adoption.', 'Etudes + Conformite', 'A la prochaine publication']], true
  ),
  'news-bofa-cashpro': createEditorialProfile(
    'Bank of America ajoute Payments Insights a CashPro',
    [
      "Bank of America a lance Payments Insights, une nouvelle fonction de CashPro destinee aux entreprises et aux clients commerciaux. L’outil doit donner aux equipes de tresorerie une lecture des paiements, des flux transfrontaliers et de la performance du fonds de roulement sur les comptes americains de l’entreprise. Il est integre a CashPro Data Intelligence, l’ensemble de services d’analyse et de pilotage de tresorerie de la banque.",
      "Payments Insights presente des donnees clients sous forme de visualisations dynamiques et de comparaisons avec des groupes de pairs. Les tresoriers peuvent examiner des tendances et reperer des domaines a approfondir au moyen de vues adaptees. Le service est accessible dans l’environnement CashPro existant: il s’agit donc d’ajouter une couche d’analyse au canal deja utilise, plutot que de demander aux entreprises de migrer vers une nouvelle plateforme.",
      "Bank of America indique que la conception a integre les retours de clients, notamment ceux des CashPro Boards, groupes consultatifs representant plusieurs segments et regions. La banque rapporte que CashPro a facilite 213 millions de paiements pendant le premier semestre 2026, soit une hausse annuelle de 10 %. Ce chiffre donne une indication de l’echelle de la plateforme, mais ne constitue pas une mesure des utilisateurs ou de l’efficacite propre a Payments Insights.",
      "La banque prevoit d’etendre son portefeuille d’outils. Capital Markets Insights, CashPro Forecasting et CashPro Search font deja partie de l’offre; Mobile Security Insights est attendu a l’echelle mondiale pour les administrateurs du programme en 2027. Ce futur service devrait examiner les parametres d’entreprise, d’utilisateur et de compte afin de produire des scores de securite et des recommandations. Pour les directions financieres, la question sera de savoir si le benchmarking apporte des decisions concretes sur les couts ou la liquidite, et comment la banque protege et contextualise les donnees comparees."
    ],
    74, ['Tresorerie d’entreprise', 'Analyse de paiements', 'CashPro et donnees clients'],
    'L’outil couvre les comptes americains; le volume global CashPro ne permet pas encore d’evaluer ses resultats propres.',
    [
      ['Pilotage plus exploitable', 'Des vues consolidees pourraient aider les tresoriers a identifier des inefficacites dans leurs flux.', 'Actions prises a partir des insights et gains mesures', 2, 'Possible'],
      ['Benchmarks sensibles', 'La valeur des comparaisons depend de la qualite, de l’anonymisation et de la comparabilite des donnees.', 'Methodologie de comparaison et controles de donnees', 2, 'Possible'],
      ['Concurrence des portails bancaires', 'L’ajout d’analyses peut renforcer la place de la banque dans les operations quotidiennes de tresorerie.', 'Adoption de l’outil et services associes', 1, 'A confirmer']
    ],
    'La couverture est limitee aux comptes americains et aucun resultat client ni gain chiffre n’est indique.',
    [['medium', 'Evaluer les cas d’usage de benchmarking pour les clients entreprises.', 'Cash Management', 'Sous 2 mois'], ['medium', 'Verifier les attentes de gouvernance sur les donnees comparatives.', 'Data + Conformite', 'Avant tout produit'], ['low', 'Comparer l’adoption de Payments Insights aux fonctions CashPro existantes.', 'Veille Concurrentielle', 'Revue trimestrielle']], true
  ),
  'news-brite-uk': createEditorialProfile(
    'Brite Payments lance Pay by Bank au Royaume-Uni apres son agrement FCA',
    [
      "Brite Payments a obtenu de la Financial Conduct Authority britannique un agrement d’etablissement de monnaie electronique. L’entreprise annonce le lancement progressif de son service Pay by Bank au Royaume-Uni pour les commercants et les consommateurs. Les entreprises pourront accepter des paiements de compte a compte au Royaume-Uni et dans le reseau europeen de Brite au moyen d’une seule integration API.",
      "Le produit s’inscrit dans un reseau que Brite dit exploiter depuis 2019. L’entreprise indique etre connectee a plus de 3 800 banques dans 27 marches europeens et combiner les rails locaux, l’Open Banking et son propre reseau de paiements instantanes. L’agrement britannique permet de proposer le service dans un nouveau cadre reglementaire, mais le deploiement annonce est par phases et son calendrier detaille n’est pas publie.",
      "Brite accompagne le lancement d’une enquete menee aupres de 2 000 adultes britanniques par Appinio pour le compte de l’entreprise. Selon ces resultats, 47 % des personnes interrogees declarent etre frustrees par le paiement en ligne et 25 % avoir deja subi un paiement echoue a cause d’une erreur de saisie, d’une carte expiree ou d’un controle de securite. L’enquete rapporte aussi un interet declare pour les prestataires britanniques ou europeens, mais ces reponses ne prejugent pas du choix effectif au moment de payer.",
      "Pour les commercants internationaux, une connexion unique pourrait simplifier l’acces aux paiements bancaires britanniques et europeens. Les paiements de compte a compte peuvent aussi modifier les delais de reglement et les couts associes, mais les details tarifaires, la couverture initiale et les niveaux de service ne sont pas precises dans l’annonce. Les points a suivre sont le lancement effectif chez les commercants, l’acceptation par les banques, les taux de conversion et la gestion des remboursements ou litiges."
    ],
    72, ['Paiements de compte a compte', 'Agrement EMI au Royaume-Uni', 'Integration commercant paneuropeenne'],
    'La licence est obtenue, mais le service est deployee progressivement et le calendrier exact n’est pas indique.',
    [
      ['Alternative aux cartes', 'Pay by Bank peut ajouter une option de paiement directe pour les commercants et clients eligibles.', 'Part des paiements finalises par ce canal', 2, 'Possible'],
      ['Reglement et remboursements', 'Le parcours A2A peut changer les processus de rapprochement, de remboursement et de gestion des litiges.', 'Delais constates et taux de reclamation', 2, 'Possible'],
      ['Consolidation des integrations', 'Une API couvrant plusieurs marches peut reduire les integrations locales, si la couverture est homogene.', 'Banques disponibles et performance par pays', 1, 'A confirmer']
    ],
    'Les chiffres de frustration proviennent d’une enquete commanditee par Brite; ils ne mesurent pas la performance du produit lance.',
    [['medium', 'Verifier la couverture bancaire et les conditions du deploiement britannique.', 'Paiements + Achats', 'Sous 6 semaines'], ['medium', 'Comparer les couts complets avec les paiements par carte et autres A2A.', 'Finance + Paiements', 'Avant pilote'], ['low', 'Suivre les resultats de conversion plutot que la seule intention declaree.', 'Data + Commerce', 'Apres lancement']], true
  )
});

Object.values(newsItems).forEach((item) => Object.assign(item, editorialProfiles[item.id]));
const curatedSectorsById = {
  'ai-regulation': 'Finance',
  'instant-payments': 'Fintech',
  'predictive-risk': 'FinAI',
  'banking-consolidation': 'Finance',
  'client-data-protection': 'Finance',
  'data-pipelines': 'FinAI',
  'ai-assistants': 'FinAI',
  'risk-models': 'Finance',
  'mobile-banking': 'Fintech',
  'fintech-concentration': 'Fintech'
};

Object.values(newsItems).forEach((item) => {
  item.sector = item.sector || curatedSectorsById[item.id];
  Object.assign(item, editorialProfiles[item.id]);
});

function renderStrategicRecommendations(item) {
  const actions = item.strategicRecommendations;
  const feasibility = item.feasible
    ? { label: 'À instruire · Faisable', className: 'is-feasible' }
    : { label: 'À instruire · Faisabilité à confirmer', className: 'is-uncertain' };

  return `
  <section class="strategic-recommendations" aria-labelledby="strategic-recommendations-title" data-strategic-actions>
    <header class="strategic-recommendations-head">
      <div class="strategic-recommendations-heading">
        <span class="strategic-recommendations-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="4"></circle><path d="m14.8 9.2 5.7-5.7M16 3.5h4.5V8"></path></svg></span>
        <div class="strategic-recommendations-title-line"><h2 id="strategic-recommendations-title">Recommandations stratégiques</h2><span class="secondary-effects-ai">Analyse IA</span></div>
      </div>
      <div class="strategic-recommendations-tools"><span class="strategic-priority ${feasibility.className}">${feasibility.label}</span><button class="strategic-copy-button" type="button" data-copy-strategic-actions aria-label="Copier le plan" title="Copier le plan"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"></rect><path d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2"></path></svg></button><span class="strategic-copy-status" data-copy-strategic-status role="status" aria-live="polite"></span></div>
    </header>
    <div class="strategic-recommendation-list">${actions.map((action) => `
      <article class="strategic-recommendation-row">
        <span class="strategic-recommendation-dot is-${action.priority}" aria-hidden="true"></span>
        <span class="strategic-recommendation-text">${action.text}</span>
        <span class="strategic-recommendation-owner">${action.owner}</span>
        <span class="strategic-recommendation-due">${action.due}</span>
      </article>`).join('')}</div>
    <div class="strategic-recommendation-actions"><button class="strategic-footer-button strategic-footer-primary" type="button" data-prepare-strategic-note>Préparer une note pour le comité</button><button class="strategic-footer-button" type="button" data-assign-strategic-plan>Assigner</button><button class="strategic-footer-button" type="button" data-discuss-strategic-plan>Discuter</button></div>
  </section>`;
}

demoNewsItems.forEach((item) => {
  const profile = editorialProfiles[item.id];
  if (!profile) throw new Error(`Missing editorial profile for ${item.id}`);
  Object.assign(item, profile);
  newsItems[item.id] = item;
});

function renderNewsDetail(content, item) {
  content.className = `news-article signal-${item.score >= 80 ? 'high' : item.score >= 60 ? 'medium' : 'low'}`;
  const analysis = item.secondaryAnalysis;
  const confidenceMarkup = Number.isFinite(analysis.confidence)
    ? `<span class="secondary-confidence-track" role="img" aria-label="${analysis.confidence}%"><span style="width: ${analysis.confidence}%"></span></span><strong>${analysis.confidence} %</strong>`
    : '<strong>À qualifier</strong>';
  content.innerHTML = `
  <header class="news-hero">
    <div>
      <span class="tag">${item.category}</span>
      <p class="news-kicker">Signal VeiLCL · ${item.date}</p>
      <h1>${item.title}</h1>
      <p class="news-summary">${item.summary}</p>
    </div>
    <div class="news-score"><strong>${item.score}</strong><span>Pertinence</span></div>
  </header>
  <div class="news-meta">
    <span>Source</span><a href="${item.sourceUrl}" target="_blank" rel="noreferrer">${item.source} ↗</a>
    <span>Publié le</span><strong>${item.date}</strong>
  </div>
  <div class="news-layout">
    <div class="news-main">
      <section class="news-section"><p class="section-label">Article</p><h2>Les faits et leurs enjeux</h2>${item.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}</section>
    </div>
  </div>
  <section class="secondary-effects" aria-labelledby="secondary-effects-title">
    <header class="secondary-effects-head">
      <div class="secondary-effects-title-group">
        <span class="secondary-effects-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"></circle><circle cx="5" cy="7" r="1.5"></circle><circle cx="19" cy="7" r="1.5"></circle><circle cx="5" cy="17" r="1.5"></circle><circle cx="19" cy="17" r="1.5"></circle><path d="m10.3 10.9-4-2.8m7.4 2.8 4-2.8m-7.4 5-4 2.8m7.4-2.8 4 2.8"></path></svg></span>
        <h2 class="secondary-effects-title" id="secondary-effects-title">Effets secondaires</h2>
        <span class="secondary-effects-ai">Analyse IA</span>
      </div>
      <div class="secondary-effects-confidence"><span>Confiance de l'analyse</span>${confidenceMarkup}</div>
    </header>
    <div class="secondary-effects-context" aria-label="Contexte pris en compte"><span class="secondary-context-label">Contexte</span>${analysis.context.map((context) => `<span class="secondary-context-chip">${context}</span>`).join('')}</div>
    <div class="secondary-effects-immediate"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"></path><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.2 2.2-2.5 3.3M6.2 6.2C4.3 7.4 3 9.2 2.5 12c.8 2.1 4.2 7 9.5 7 1.2 0 2.3-.3 3.3-.8"></path></svg><p><strong>Lecture immédiate :</strong> ${analysis.immediate}</p></div>
    <p class="secondary-effects-lead">Ce à quoi on ne pense pas forcément</p>
    <div class="secondary-horizons">
      ${analysis.horizons.map((horizon, index) => `<section class="secondary-horizon" aria-labelledby="secondary-horizon-${index}"><h3 class="secondary-horizon-heading" id="secondary-horizon-${index}"><span class="secondary-horizon-dot"></span><span>${horizon.label}</span><span class="secondary-horizon-line"></span></h3><div class="secondary-horizon-cards">${horizon.scenarios.map((scenario) => `<article class="secondary-scenario-card"><h4>${scenario.title}</h4><p>${scenario.explanation}</p><div class="secondary-scenario-signal"><span class="secondary-signal-icon" aria-hidden="true"></span><span>${scenario.signal}</span></div><div class="secondary-scenario-probability" aria-label="${scenario.likelihood}">${[1, 2, 3].map((step) => `<span class="${step <= scenario.level ? 'is-on' : ''}" aria-hidden="true"></span>`).join('')}<span>${scenario.likelihood}</span></div></article>`).join('')}</div></section>`).join('')}
    </div>
    <p class="secondary-effects-footnote"><svg class="secondary-effects-footnote-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v5m0-8h.01"></path></svg><span>${analysis.caveat}</span></p>
  </section>`;
  content.insertAdjacentHTML('beforeend', renderStrategicRecommendations(item));
}

function formatStrategicPlan(section) {
  const articleTitle = section.closest('.news-page-view')?.querySelector('h1')?.innerText
    || document.querySelector('.news-hero h1')?.innerText
    || document.title;
  const headline = `${section.querySelector('.strategic-recommendations-heading h2').innerText} — ${articleTitle}`;
  const recommendations = [...section.querySelectorAll('.strategic-recommendation-row')].map((action) => [
    action.querySelector('.strategic-recommendation-text').innerText,
    `Responsable : ${action.querySelector('.strategic-recommendation-owner').innerText}`,
    `Échéance : ${action.querySelector('.strategic-recommendation-due').innerText}`
  ].join('\n'));
  return `${headline}\n\n${recommendations.join('\n\n')}`;
}

document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy-strategic-actions], [data-prepare-strategic-note], [data-assign-strategic-plan], [data-discuss-strategic-plan]');
  if (!button) return;

  const section = button.closest('[data-strategic-actions]');
  const status = section.querySelector('[data-copy-strategic-status]');
  if (button.hasAttribute('data-prepare-strategic-note')) {
    const articleTitle = section.closest('.news-page-view')?.querySelector('.news-page-card:not([hidden]) h1')?.textContent.trim()
      || section.closest('.news-article')?.querySelector('h1')?.textContent.trim()
      || document.querySelector('.news-hero h1')?.textContent.trim()
      || document.title;
    const noteDialog = document.querySelector('[data-committee-note-dialog]');
    noteDialog.querySelector('[data-committee-note-article]').textContent = articleTitle;
    noteDialog.showModal();
    return;
  }

  if (button.hasAttribute('data-assign-strategic-plan')) {
    const articleTitle = section.closest('.news-page-view')?.querySelector('.news-page-card:not([hidden]) h1')?.textContent.trim()
      || section.closest('.news-article')?.querySelector('h1')?.textContent.trim()
      || document.querySelector('.news-hero h1')?.textContent.trim()
      || document.title;
    const assignmentDialog = document.querySelector('[data-assignment-dialog]');
    assignmentDialog.querySelector('[data-assignment-article]').textContent = articleTitle;
    assignmentDialog.dataset.articleId = section.closest('[data-news-id]')?.dataset.newsId || '';
    renderAssignmentTasks(section);
    resetAssignmentForm();
    assignmentDialog.showModal();
    return;
  }

  const plan = formatStrategicPlan(section);

  if (button.hasAttribute('data-discuss-strategic-plan') && navigator.share) {
    try {
      await navigator.share({ title: 'Recommandations stratégiques', text: plan });
      status.textContent = 'Plan prêt à discuter';
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
    }
  }

  try {
    await navigator.clipboard.writeText(plan);
  } catch {
    const fallback = document.createElement('textarea');
    fallback.value = plan;
    fallback.style.position = 'fixed';
    fallback.style.opacity = '0';
    document.body.append(fallback);
    fallback.select();
    document.execCommand('copy');
    fallback.remove();
  }

  status.textContent = button.hasAttribute('data-prepare-strategic-note')
    ? 'Note comité copiée'
    : button.hasAttribute('data-discuss-strategic-plan')
      ? 'Plan copié pour discussion'
      : 'Plan copié';
  window.setTimeout(() => { status.textContent = ''; }, 2500);
});

const committeeNoteDialog = document.querySelector('[data-committee-note-dialog]');
const committeeNoteCommittee = document.querySelector('#committee-note-committee [data-note-dropdown-value]');
const committeeNoteDate = document.getElementById('committee-note-date');
const committeeNotePreviewTitle = document.querySelector('[data-committee-note-preview-title]');
const committeeNotePreviewSubtitle = document.querySelector('[data-committee-note-preview-subtitle]');
const committeeNoteToast = document.querySelector('[data-committee-note-toast]');
const committeeNoteToastIcon = document.querySelector('[data-committee-note-toast-icon]');
const committeeNoteToastLabel = document.querySelector('[data-committee-note-toast-label]');
const committeeNoteToastProgress = document.querySelector('[data-committee-note-progress]');
let committeeNoteToastTimer;

const assignmentDialog = document.querySelector('[data-assignment-dialog]');
const assignmentTaskList = assignmentDialog.querySelector('[data-assignment-tasks]');
const assignmentSearch = assignmentDialog.querySelector('[data-assignment-search]');
const assignmentNoResults = assignmentDialog.querySelector('[data-assignment-no-results]');
const assignmentToast = document.querySelector('[data-assignment-toast]');
const assignmentToastIcon = assignmentDialog.ownerDocument.querySelector('[data-assignment-toast-icon]');
const assignmentToastLabel = assignmentToast.querySelector('[data-assignment-toast-label]');
const assignmentToastProgress = assignmentToast.querySelector('[data-assignment-progress]');
let assignmentToastTimer;

function renderAssignmentTasks(section) {
  assignmentTaskList.replaceChildren();
  section.querySelectorAll('.strategic-recommendation-row').forEach((row, index) => {
    const label = document.createElement('label');
    label.className = 'assignment-task';
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'assignment-task';
    radio.checked = index === 0;
    radio.dataset.assignmentTask = '';
    const priorityDot = row.querySelector('.strategic-recommendation-dot')?.cloneNode();
    const text = document.createElement('span');
    text.className = 'strategic-recommendation-text';
    text.textContent = row.querySelector('.strategic-recommendation-text')?.textContent.trim() || '';
    const owner = row.querySelector('.strategic-recommendation-owner')?.textContent.trim() || '';
    const due = row.querySelector('.strategic-recommendation-due')?.textContent.trim() || '';
    const ownerLabel = document.createElement('span');
    ownerLabel.className = 'strategic-recommendation-owner';
    ownerLabel.textContent = owner;
    const dueLabel = document.createElement('span');
    dueLabel.className = 'strategic-recommendation-due';
    dueLabel.textContent = due;
    label.append(radio, priorityDot, text, ownerLabel, dueLabel);
    assignmentTaskList.append(label);
  });
}

const assignmentPeople = [...assignmentDialog.querySelectorAll('[data-assignment-person]')];
const filterAssignmentPeople = () => {
  const query = assignmentSearch.value.trim().toLocaleLowerCase();
  let visiblePeople = 0;
  assignmentPeople.forEach((person) => {
    person.hidden = !person.textContent.toLocaleLowerCase().includes(query);
    if (!person.hidden) visiblePeople += 1;
  });
  assignmentNoResults.hidden = visiblePeople > 0;
};

function resetAssignmentForm() {
  assignmentSearch.value = '';
  filterAssignmentPeople();
  assignmentDialog.querySelector('input[name="assignment-person"][value="Claire Martin"]').checked = true;
  assignmentDialog.querySelector('input[name="assignment-priority"][value="high"]').checked = true;
  assignmentDialog.querySelectorAll('.assignment-notifications input').forEach((input) => {
    input.checked = input.hasAttribute('data-default-checked');
  });
  assignmentDialog.querySelector('#assignment-message').value = '';
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 14);
  assignmentDialog.querySelector('[data-assignment-date]').value = [
    dueDate.getFullYear(),
    String(dueDate.getMonth() + 1).padStart(2, '0'),
    String(dueDate.getDate()).padStart(2, '0')
  ].join('-');
  const validation = assignmentDialog.querySelector('[data-assignment-validation]');
  validation.textContent = '';
  validation.hidden = true;
}

assignmentSearch.addEventListener('input', filterAssignmentPeople);
assignmentDialog.querySelectorAll('[data-close-assignment]').forEach((button) => {
  button.addEventListener('click', () => assignmentDialog.close());
});
assignmentDialog.addEventListener('click', (event) => {
  if (event.target === assignmentDialog) assignmentDialog.close();
});
assignmentDialog.querySelector('[data-submit-assignment]').addEventListener('click', () => {
  const selectedTasks = assignmentTaskList.querySelectorAll('[data-assignment-task]:checked');
  const validation = assignmentDialog.querySelector('[data-assignment-validation]');
  if (!selectedTasks.length) {
    validation.textContent = 'Sélectionnez une action à assigner.';
    validation.hidden = false;
    return;
  }
  const assignee = assignmentDialog.querySelector('input[name="assignment-person"]:checked')?.value || '';
  const assignmentTask = selectedTasks[0].closest('.assignment-task');
  const assignmentId = `assignment-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const record = {
    id: assignmentId,
    assignee,
    task: assignmentTask.querySelector('.strategic-recommendation-text')?.textContent.trim() || '',
    articleId: assignmentDialog.dataset.articleId || '',
    articleTitle: assignmentDialog.querySelector('[data-assignment-article]').textContent.trim(),
    priority: assignmentDialog.querySelector('input[name="assignment-priority"]:checked')?.value || 'medium',
    dueDate: assignmentDialog.querySelector('[data-assignment-date]').value,
    message: assignmentDialog.querySelector('#assignment-message').value.trim(),
    assignedBy: 'Vous',
    assignedByInitials: 'VL',
    createdAt: new Date().toISOString()
  };
  let assignments;
  try {
    assignments = JSON.parse(window.localStorage.getItem('veilcl-alert-assignments') || '[]');
    if (!Array.isArray(assignments)) assignments = [];
    assignments.push(record);
    window.localStorage.setItem('veilcl-alert-assignments', JSON.stringify(assignments));
  } catch {
    validation.textContent = 'Impossible d’enregistrer cette assignation sur cet appareil.';
    validation.hidden = false;
    return;
  }
  assignmentDialog.close();
  window.clearTimeout(assignmentToastTimer);
  assignmentToast.classList.remove('is-sent');
  assignmentToastIcon.className = 'ti ti-loader-2 committee-note-toast-icon';
  assignmentToastLabel.textContent = 'Assignation en cours…';
  assignmentToastProgress.style.transition = 'none';
  assignmentToastProgress.style.width = '0';
  assignmentToast.hidden = false;
  void assignmentToastProgress.offsetWidth;
  assignmentToastProgress.style.transition = '';
  assignmentToastProgress.style.width = '100%';
  const assignmentDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 3000;
  assignmentToastTimer = window.setTimeout(() => {
    assignmentToast.classList.add('is-sent');
    assignmentToastIcon.className = 'ti ti-circle-check committee-note-toast-icon';
    assignmentToastLabel.textContent = `Action assignée à ${assignee}`;
    assignmentToastTimer = window.setTimeout(() => { assignmentToast.hidden = true; }, 2200);
  }, assignmentDuration);
});

const updateCommitteeNotePreview = () => {
  const objective = committeeNoteDialog.querySelector('input[name="committee-note-objective"]:checked')?.nextElementSibling.textContent.trim() || '';
  const [year, month, day] = committeeNoteDate.value.split('-').map(Number);
  const date = year && month && day ? new Date(year, month - 1, day) : null;
  const dateLabel = date
    ? date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
    : '';
  committeeNotePreviewTitle.textContent = `Note au ${committeeNoteCommittee.textContent.trim()}`;
  committeeNotePreviewSubtitle.textContent = [objective, dateLabel].filter(Boolean).join(' · ');
};

const defaultCommitteeDate = new Date();
defaultCommitteeDate.setDate(defaultCommitteeDate.getDate() + 14);
committeeNoteDate.value = [
  defaultCommitteeDate.getFullYear(),
  String(defaultCommitteeDate.getMonth() + 1).padStart(2, '0'),
  String(defaultCommitteeDate.getDate()).padStart(2, '0')
].join('-');
updateCommitteeNotePreview();

const committeeNoteDropdowns = [...committeeNoteDialog.querySelectorAll('[data-note-dropdown]')];
const closeCommitteeNoteDropdown = (dropdown, returnFocus = false) => {
  dropdown.querySelector('[data-note-dropdown-trigger]').setAttribute('aria-expanded', 'false');
  dropdown.querySelector('[role="listbox"]').hidden = true;
  if (returnFocus) dropdown.querySelector('[data-note-dropdown-trigger]').focus();
};
const selectCommitteeNoteOption = (dropdown, option) => {
  dropdown.dataset.value = option.dataset.value;
  dropdown.querySelector('[data-note-dropdown-value]').textContent = option.dataset.value;
  dropdown.querySelectorAll('[role="option"]').forEach((candidate) => {
    const selected = candidate === option;
    candidate.setAttribute('aria-selected', String(selected));
    candidate.tabIndex = selected ? 0 : -1;
  });
  closeCommitteeNoteDropdown(dropdown);
  if (dropdown.id === 'committee-note-committee') updateCommitteeNotePreview();
};

committeeNoteDropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('[data-note-dropdown-trigger]');
  const listbox = dropdown.querySelector('[role="listbox"]');
  const options = [...listbox.querySelectorAll('[role="option"]')];

  trigger.addEventListener('click', () => {
    const shouldOpen = trigger.getAttribute('aria-expanded') !== 'true';
    committeeNoteDropdowns.forEach((otherDropdown) => closeCommitteeNoteDropdown(otherDropdown));
    if (!shouldOpen) return;
    listbox.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    options.find((option) => option.getAttribute('aria-selected') === 'true')?.focus();
  });

  trigger.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    if (listbox.hidden) trigger.click();
    else options.find((option) => option.getAttribute('aria-selected') === 'true')?.focus();
  });

  listbox.addEventListener('click', (event) => {
    const option = event.target.closest('[role="option"]');
    if (option) selectCommitteeNoteOption(dropdown, option);
  });

  listbox.addEventListener('keydown', (event) => {
    const currentIndex = options.indexOf(event.target.closest('[role="option"]'));
    if (event.key === 'Escape') {
      event.preventDefault();
      closeCommitteeNoteDropdown(dropdown, true);
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? options.length - 1
          : (currentIndex + (event.key === 'ArrowDown' ? 1 : options.length - 1)) % options.length;
      options[nextIndex].focus();
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const option = options[currentIndex];
      if (option) selectCommitteeNoteOption(dropdown, option);
    }
  });

  dropdown.addEventListener('focusout', (event) => {
    if (!dropdown.contains(event.relatedTarget)) closeCommitteeNoteDropdown(dropdown);
  });
});

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-note-dropdown]')) return;
  committeeNoteDropdowns.forEach((dropdown) => closeCommitteeNoteDropdown(dropdown));
});

committeeNoteDialog.querySelectorAll('[data-close-committee-note]').forEach((button) => {
  button.addEventListener('click', () => committeeNoteDialog.close());
});
committeeNoteDialog.addEventListener('click', (event) => {
  if (event.target === committeeNoteDialog) committeeNoteDialog.close();
});
committeeNoteCommittee.addEventListener('change', updateCommitteeNotePreview);
committeeNoteDate.addEventListener('change', updateCommitteeNotePreview);
committeeNoteDialog.querySelectorAll('input[name="committee-note-objective"]').forEach((input) => {
  input.addEventListener('change', updateCommitteeNotePreview);
});
committeeNoteDialog.querySelectorAll('[data-note-section]').forEach((input) => {
  input.addEventListener('change', () => {
    const previewSection = committeeNoteDialog.querySelector(`[data-note-preview-section="${input.dataset.noteSection}"]`);
    previewSection.hidden = !input.checked;
  });
});
committeeNoteDialog.querySelector('[data-generate-committee-note]').addEventListener('click', () => {
  committeeNoteDialog.close();
  window.clearTimeout(committeeNoteToastTimer);
  committeeNoteToast.classList.remove('is-sent');
  committeeNoteToastIcon.className = 'ti ti-loader-2 committee-note-toast-icon';
  committeeNoteToastLabel.textContent = 'Génération du brouillon…';
  committeeNoteToastProgress.style.transition = 'none';
  committeeNoteToastProgress.style.width = '0';
  committeeNoteToast.hidden = false;
  void committeeNoteToastProgress.offsetWidth;
  committeeNoteToastProgress.style.transition = '';
  committeeNoteToastProgress.style.width = '100%';
  const generationDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 3000;
  committeeNoteToastTimer = window.setTimeout(() => {
    committeeNoteToast.classList.add('is-sent');
    committeeNoteToastIcon.className = 'ti ti-circle-check committee-note-toast-icon';
    committeeNoteToastLabel.textContent = 'Brouillon envoyé';
    committeeNoteToastTimer = window.setTimeout(() => {
      committeeNoteToast.hidden = true;
    }, 2200);
  }, generationDuration);
});

window.newsItems = newsItems;
window.demoNewsItems = demoNewsItems;
window.renderNewsDetail = renderNewsDetail;

const content = document.getElementById('news-content');
if (content) {
  const id = new URLSearchParams(window.location.search).get('id');
  const item = newsItems[id] || newsItems['ai-regulation'];
  document.title = `${item.title} | VeiLCL`;
  renderNewsDetail(content, item);
}
