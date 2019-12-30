/* eslint-disable no-console */
class CustomLogging {
    constructor(title) {
        this.title = {
            body: title || "---",
            color: "black",
            size: "0.8rem"
        };

        this.body = {
            color: "#008f68",
            size: "1rem"
        };
    }

    setTitleStyle({ color, size }) {
        if (color !== undefined) this.title.color = color;
        if (size !== undefined) this.title.size = size;
    }

    setBodyStyle({ color, size }) {
        if (color !== undefined) this.body.color = color;
        if (size !== undefined) this.body.size = size;
    }

    log(body = "") {
        console.table(body);
        // the second line is now the body because the first references the content after the first %c for the title
        // console.log(
        //     `%c${this.title.body} | %c${body}`,
        //     `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size};`,
        //     `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size};`
        // );
    }
}

export default CustomLogging;
