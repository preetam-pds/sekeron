export const hidePhoneNumberPartially = (phonenumber) => {

    const userName = phonenumber.split("")
        .map((item, index) => {
            if (index > 4 && index < 10) {
                return "*"

            }
            return item

        }).join("")

    return userName
};
