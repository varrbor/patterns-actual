class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }
//     toHTML() {
//         return `
//             <div>
//                 <h1>${this.title}</h1>
//                 <p>${this.text}</p>
//             </div>
//         `
//     }
//
//     toJSON() {
//        return JSON.stringify(
//            {
//                title: this.title,
//                text: this.text,
//                modified: this.modified
//            }
//        )
// }
}

class NewsPrinter {
    constructor(news) {
        this.news = news;

    }

    HTML() {
        return `
            <div>
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    JSON() {
        return JSON.stringify(
            {
                title: this.news.title,
                text: this.news.text,
                modified: this.news.modified
            }
        )
    }
}

const news = new News('Ukraine', 'Independance')
const printer = new NewsPrinter(news)

console.log(printer.JSON())