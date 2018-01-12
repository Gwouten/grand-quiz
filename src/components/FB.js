
export const shareResultToFacebook = (result, lang) => {

    const title = lang ? 'Grand QuizZ 2018' : 'De Grote QuizZ 2018';
    const app_id = '1625426427527020';
    const caption = lang ? 'Mon résultat: '+ result +'/15' : 'Mijn resultaat: '+ result +'/15';
    const href = lang ? 'http://concours.concerto.space' : 'http://quizz.concerto.space';
    const description = lang ? 'Déscription' : 'Omschrijving';
    const picture = lang ? 'https://i.vimeocdn.com/portrait/8268469_300x300' : 'https://i.vimeocdn.com/portrait/8268469_300x300';
    const message = caption;

    const url =  'https://www.facebook.com/dialog/feed?app_id='+ app_id +'&link='+ encodeURIComponent(href) +
    '&display=popup' +
    '&name='+ encodeURIComponent(title) +
    '&caption='+ encodeURIComponent(caption) +
    '&description='+ encodeURIComponent(description) +
    '&picture='+ encodeURIComponent(picture) +
    '&message='+ encodeURIComponent(message) +
    '&redirect_uri=https://www.facebook.com';

    console.log(url.toString());
    return url;
    
};
