module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_time: (time) => {
        return time.currentTime();
    },
};