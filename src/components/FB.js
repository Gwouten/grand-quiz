/**
 * Show a popup with an option to share the User's results to Facebook
 *
 * @param  {Object} result
 */
export const shareResultToFacebook = (result, lang) => {
    const params = {
        u: result,
        picture: `${lang ? 'http://concours.concerto.space/img/GrandQuizz2018_logo_fr.svg' : 'http://quizz.concerto.space/img/GrandQuizz2018_logo_nl.svg'}`,
        title: `${lang ? 'Grand Quiz 2018' : 'De Grote QuizZ 2018'}`,
        description: `${lang ? 'Mon résultat du Grand Quiz 2018' : 'Mijn resultaat van De Grote QuizZ 2018'}`,
    };

    const url = `https://www.facebook.com/sharer/sharer.php?${serialize(params)}`;

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