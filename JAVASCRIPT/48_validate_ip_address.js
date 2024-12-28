// 48. Given an IP address validate it based on the given conditions.

const validateIPAddress = ip => {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;

    for (let part of parts) {
        if (!/^\d+$/.test(part)) return false;
        const num = parseInt(part, 10);
        if (num < 0 || num > 255) return false;
        if (part !== num.toString()) return false;
    }
    return true;
};

const ip1 = '192.68.0.1';
console.log(validateIPAddress(ip1));

const ip2 = "192.00..0.1";
console.log(validateIPAddress(ip2));

const ip3 = '192.634.000.00';
console.log(validateIPAddress(ip3));