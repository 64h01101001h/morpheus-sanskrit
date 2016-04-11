//
var utils = require('../utils');
var la = 'lit';

var tests = {

'han': {
    'lit_par': ['जहान', 'जहनिथ', 'जहान-जहन', 'जहनतुः', 'जहनथुः', 'जहनिव', 'जहनुः', 'जहन', 'जहनिम'],
    'lit_atm': ['जहने', 'जहनिषे', 'जहने', 'जहनाते', 'जहनाथे', 'जहनिवहे', 'जहनिर', 'जहनिध्व', 'जहनिमहे'],},
'Gas': {
    'lit_par': ['जघास', 'जघसिथ', 'जघास-जघस', 'जक्षतुः', 'जक्षथुः', 'जक्षिव', 'जक्षुः', 'जक्ष', 'जक्षिम'],},
'gam': {
    'lit_par': ['जगाम', 'जगमिथ-जगन्थ', 'जगाम-जगम', 'जग्मतुः', 'जग्मथुः', 'जग्मिव', 'जग्मुः', 'जग्म', 'जग्मिम'],
    'lit_atm': ['जग्मे', 'जग्मिषे', 'जग्मे', 'जग्माते', 'जग्माथे', 'जग्मिवहे', 'जग्मिर', 'जग्मिध्व', 'जग्मिमहे'], },
'Kan': {
    'lit_par': ['चखान', 'चखनिथ', 'चखान-चखन', 'चख्नतुः', 'चख्नथुः', 'चख्निव', 'चख्नुः', 'चख्न', 'चख्निम'],
    'lit_atm': ['चख्ने', 'चख्निषे', 'चख्ने', 'चख्नाते', 'चख्नाथे', 'चख्निवहे', 'चख्निर', 'चख्निध्व', 'चख्निमहे'],},
'jan': {
    'lit_par': ['जजान', 'जज्ञिथ-जजन्थ', 'जजान-जजन', 'जज्ञतुः', 'जज्ञथुः', 'जज्ञिव', 'जज्ञुः', 'जजन', 'जज्ञिम'],
    'lit_atm': ['जज्ञे', 'जज्ञिषे', 'जज्ञे', 'जज्ञाते', 'जज्ञाथे', 'जज्ञिवहे', 'जज्ञिर', 'जज्ञिध्व', 'जज्ञिमहे'],},

'jIv': {
    'lit_par': ['जिजीव', 'जिजीविथ', 'जिजीव', 'जिजीवतुः', 'जिजीवथुः', 'जिजीविव', 'जिजीवुः', 'जिजीव', 'जिजीविम'], },
    'buD': {
        'lit_par': ['बुबोध', 'बुबोधिथ', 'बुबोध', 'बुबुधतुः', 'बुबुधथुः', 'बुबुधिव', 'बुबुधुः', 'बुबुध', 'बुबुधिम'],
        'lit_atm': ['बुबुधे', 'बुबुधिषे', 'बुबुधे', 'बुबुधाते', 'बुबुधाथे', 'बुबुधिवहे', 'बुबुधिरे', 'बुबुधिध्वे', 'बुबुधिमहे'], },
'hve': {
    'lit_par': ['जह्वौ', 'जह्विथ-जह्वाथ', 'जह्वौ', 'जह्वतुः', 'जह्वथुः', 'जह्विव', 'जह्वुः', 'जह्व', 'जह्विम'],
    'lit_atm': ['जह्वे', 'जह्विषे', 'जह्वे', 'जह्वाते', 'जह्वाथे', 'जह्विवहे', 'जह्विर', 'जह्विध्व', 'जह्विमहे'],},

'DA': {
    'lit_par': ['दधौ', 'दधिथ-दधाथ', 'दधौ', 'दधतुः', 'दधथुः', 'दधिव', 'दधुः', 'दध', 'दधिम'],
    'lit_atm': ['दधे', 'दधिषे', 'दधे', 'दधाते', 'दधाथे', 'दधिवहे', 'दधिरे', 'दधिध्वे', 'दधिमहे'],},
'dA': {
        'lit_par': ['ददौ', 'ददिथ-ददाथ', 'ददौ', 'ददतुः', 'ददथुः', 'ददिव', 'ददुः', 'दद', 'ददिम'],
        'lit_atm': ['ददे', 'ददिषे', 'ददे', 'ददाते', 'ददाथे', 'ददिवहे', 'ददिरे', 'ददिध्वे', 'ददिमहे'], },

'gE': {
    'lit_par': ['जगौ', 'जगिथ-जगाथ', 'जगौ', 'जगतुः', 'जगथुः', 'जगिव', 'जगुः', 'जग', 'जगिम'],
    'lit_atm': ['जगे', 'जगिषे', 'जगे', 'जगाते', 'जगाथे', 'जगिवहे', 'जगिर', 'जगिध्व', 'जगिमहे'],},
'tan': {
    'lit_par': ['ततान', 'तेनिथ-ततन्थ', 'ततान-ततन', 'तेनतुः', 'तेनथुः', 'तेनिव', 'तेनुः', 'तेन', 'तेनिम'],
    'lit_atm': ['तेने', 'तेनिषे', 'तेने', 'तेनाते', 'तेनाथे', 'तेनिवहे', 'तेनिर', 'तेनिध्व', 'तेनिमहे'],},
'BU': {
    'lit_par': ['बभूव', 'बभूविथ-बभूथ', 'बभूव', 'बभूवतुः', 'बभूवथुः', 'बभूविव', 'बभूवुः', 'बभूव', 'बभूविम'],},

'krI': {
    'lit_par': ['चिक्राय', 'चिक्रेथ-चिक्रयिथ', 'चिक्राय-चिक्रय', 'चिक्रियतुः', 'चिक्रियथुः', 'चिक्रियिव', 'चिक्रियुः', 'चिक्रिय', 'चिक्रियिम'],
    'lit_atm': ['चिक्रिये', 'चिक्रियिषे', 'चिक्रिये', 'चिक्रियाते', 'चिक्रियाथे', 'चिक्रियिवहे', 'चिक्रियिर', 'चिक्रियिध्व', 'चिक्रियिमहे'],},
'nI': {
    'lit_par': ['निनाय', 'निनेथ-निनयिथ', 'निनाय-निनय', 'निन्यतुः', 'निन्यथुः', 'निन्यिव', 'निन्युः', 'निन्य', 'निन्यिम'],
    'lit_atm': ['निन्ये', 'निन्यिषे', 'निन्ये', 'निन्याते', 'निन्याथे', 'निन्यिवहे', 'निन्यिरे', 'निन्यिध्वे', 'निन्यिमहे'],},

'svap': {
    'lit_par': ['सुष्वाप', 'सुष्वपिथ', 'सुष्वाप-सुष्वप', 'सुषुपतुः', 'सुषुपथुः', 'सुषुपिव', 'सुषुपुः', 'सुषुप', 'सुषुपिम'],},
'grah': {
    'lit_par': ['जग्राह', 'जग्रहिथ', 'जग्राह-जग्रह', 'जगृहतुः', 'जगृहथुः', 'जगृहिव', 'जगृहुः', 'जगृह', 'जगृहिम'],
    'lit_atm': ['जगृहे', 'जगृहिषे', 'जगृहे', 'जगृहाते', 'जगृहाथे', 'जगृहिवहे', 'जगृहिर', 'जगृहिध्व', 'जगृहिमहे'],},
'vyaD': {
    'lit_par': ['विव्याध', 'विव्यधिथ', 'विव्याध-विव्यध', 'विविधतुः', 'विविधथुः', 'विविधिव', 'विविधुः', 'विविध', 'विविधिम'], },

'yaj': {
    'lit_par': ['इयाज', 'इयष्ठ-इयजिथ', 'इयाज-इयज', 'ईजतुः', 'ईजथुः', 'ईजिव', 'ईजुः', 'ईज', 'ईजिम'],
    'lit_atm': ['ईजे', 'ईजिषे', 'ईजे', 'ईजाते', 'ईजाथे', 'ईजिवहे', 'ईजिर', 'ईजिध्व', 'ईजिमहे'],},
'vah': {
    'lit_par': ['उवाह', 'उवाढ-उवहिथ', 'उवाह-उवह', 'ऊहतुः', 'ऊहथुः', 'ऊहिव', 'ऊहुः', 'ऊह', 'ऊहिम'],
    'lit_atm': ['ऊहे', 'ऊहिषे', 'ऊहे', 'ऊहाते', 'ऊहाथे', 'ऊहिवहे', 'ऊहिर', 'ऊहिध्व', 'ऊहिमहे'],},
'vas': {
    'lit_par': ['उवास', 'उवस्थ-उवसिथ', 'उवास-उवस', 'ऊसतुः', 'ऊसथुः', 'ऊसिव', 'ऊसुः', 'ऊस', 'ऊसिम'],},
'vap': {
    'lit_par': ['उवाप', 'उवप्थ-उवपिथ', 'उवाप-उवप', 'ऊपतुः', 'ऊपथुः', 'ऊपिव', 'ऊपुः', 'ऊप', 'ऊपिम'],
    'lit_atm': ['ऊपे', 'ऊपिषे', 'ऊपे', 'ऊपाते', 'ऊपाथे', 'ऊपिवहे', 'ऊपिर', 'ऊपिध्व', 'ऊपिमहे'],},
'vad': {
    'lit_par': ['उवाद', 'उवदिथ-उवत्थ', 'उवाद-उवद', 'ऊदतुः', 'ऊदथुः', 'ऊदिव', 'ऊदुः', 'ऊद', 'ऊदिम'],
    'lit_atm': ['ऊदे', 'ऊदिषे', 'ऊदे', 'ऊदाते', 'ऊदाथे', 'ऊदिवहे', 'ऊदिर', 'ऊदिध्व', 'ऊदिमहे'], },
'vac': {
    'lit_par': ['उवाच', 'उवचिथ-उवक्थ', 'उवाच-उवच', 'ऊचतुः', 'ऊचथुः', 'ऊचिव', 'ऊचुः', 'ऊच', 'ऊचिम'],},

'iz': {
    'lit_par': ['इयेष', 'इयेषिथ', 'इयेष', 'ईषतुः', 'ईषथुः', 'ईषिव', 'ईषुः', 'ईष', 'ईषिम'],
    'lit_atm': ['ईषे', 'ईषिषे', 'ईषे', 'ईषाते', 'ईषाथे', 'ईषिवहे', 'ईषिर', 'ईषिध्व', 'ईषिमहे'],},
'i': {
    'lit_par': ['इयाय', 'इयेथ-इययिथ', 'इयाय-इयय', 'ईयतुः', 'ईयथुः', 'ईय्व', 'ईयुः', 'ईय', 'ईय्म'],
    'lit_atm': ['ईये', 'ईय्से', 'ईये', 'ईयाते', 'ईयाथे', 'ईय्वहे', 'ईयिर', 'ईय्ध्व', 'ईय्महे'],},

'Ap': {
    'lit_par': ['आप', 'आपिथ', 'आप', 'आपतुः', 'आपथुः', 'आपिव', 'आपुः', 'आप', 'आपिम'],},
'ad': {
    'lit_par': ['आद', 'आदिथ', 'आद', 'आदतुः', 'आदथुः', 'आदिव', 'आदुः', 'आद', 'आदिम'],},
'kf': {
    'lit_par': ['चकार', 'चकर्थ', 'चकार-चकर', 'चक्रतुः', 'चक्रथुः', 'चकृव', 'चक्रुः', 'चक्र', 'चकृम'],
    'lit_atm': ['चक्रे', 'चकृषे', 'चक्रे', 'चक्राते', 'चक्राथे', 'चकृवहे', 'चक्रिर', 'चकृध्व', 'चकृमहे'],},
'tF': {
    'lit_par': ['ततार', 'ततरिथ', 'ततार-ततर', 'ततरतुः', 'ततरथुः', 'ततरिव', 'ततरुः', 'ततर', 'ततरिम'],},
}

describe(la, function() {
    utils.fireTest(tests, la);
});
