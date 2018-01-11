/**
 * Show a popup with an option to share the User's results to Facebook
 *
 * @param  {Object} result
 */
export const shareResultToFacebook = (result, lang) => {
    const params = {
        href: encodeURIComponent(`${lang ? 'http://concours.concerto.space/' : 'http://quizz.concerto.space/' }`),
        u: result,
        picture: `${lang ? 'http://concours.concerto.space/img/GrandQuizz2018_logo_fr.svg' : 'http://quizz.concerto.space/img/GrandQuizz2018_logo_nl.svg'}`,
        title: `${lang ? 'Grand Quiz 2018' : 'De Grote QuizZ 2018'}`.replace(/\s/gi,'-'),
        description: `${lang ? 'Mon résultat du Grand Quiz 2018' : 'Mijn resultaat van De Grote QuizZ 2018'}`.replace(/\s/gi,'-'),
    };
    console.log(params);
    const url = `https://www.facebook.com/dialog/share?app_id=1625426427527020&display=popup&${serialize(params)}`;

    return url;
};

/**
 * Serialize an Object
 *
 * @param  {Object} params
 * @return {String}
 */
const serialize = params => Object.keys(params)
.map(param => `${param}=${encodeURIComponent(params[param])}`)
.join('&');

// https://www.facebook.com/dialog/share?app_id=5303202981&display=popup&href=http%3A%2F%2Fwww.divercitymag.be%2Fnl%2Fde-grote-verkeersaders-alternatief-voor-de-teloorgang-van-de-winkelcentra%2F&redirect_uri=https%3a%2f%2fstatic.addtoany.com%2fmenu%2fthanks.html%23url%3dhttp%3A%2F%2Fwww.divercitymag.be%2Fnl%2Fde-grote-verkeersaders-alternatief-voor-de-teloorgang-van-de-winkelcentra%2F&quote=