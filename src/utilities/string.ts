const hashEmail = (email: string): string => {
    const lenM = email.length;
    let hashed = "";
    for (let i = 0; i < lenM; i += 1) {
        if (i < 4 || i > lenM - 5) hashed += email[i];
        else hashed += "*";
    }
    return hashed;
};

const formatSSN = (SSN: string): string => {
    const len = SSN.length;
    let result = SSN;
    if (/^[0-9]{0,13}$/.test(SSN)) {
        if (len > 1) {
            result = `${result.substring(0, 1)}-${result.substring(1, len)}`;
        }
        if (len > 5)
            result = `${result.substring(0, 6)}-${result.substring(
                6,
                len + 1
            )}`;
        if (len > 9)
            result = `${result.substring(0, 12)}-${result.substring(
                12,
                len + 2
            )}`;
        if (len > 12)
            result = `${result.substring(0, 15)}-${result.substring(
                15,
                len + 3
            )}`;
        return result;
    }

    return "";
};

export { hashEmail, formatSSN };
