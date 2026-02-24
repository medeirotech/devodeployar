const BRAZIL_TIMEZONE_OFFSET: number = 180 * 60 * 1000;

const getBrazilDate = () => new Date(Date.now() - BRAZIL_TIMEZONE_OFFSET);

export default getBrazilDate;
