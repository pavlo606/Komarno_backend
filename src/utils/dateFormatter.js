const monthsGenitiveUA = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
];

const monthsGenitiveEN = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function format(str, values) {
    return str.replace(/{(\w+)}/g, function (match, index) {
        return typeof values[index] !== "undefined" ? values[index] : match;
    });
}

export const dateFormatter = (dateString, format_string, en = false) => {
    const date = new Date(dateString);
    const dateFormats = {
        d: String(date.getDate()).padStart(2, "0"),
        m: String(date.getMonth() + 1).padStart(2, "0"),
        Y: date.getFullYear(),
        M: en ? monthsGenitiveEN[date.getMonth()] : monthsGenitiveUA[date.getMonth()]
    };
    const formattedDate = format(format_string, dateFormats);
    return formattedDate;
};