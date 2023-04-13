export const hideEmailPartially = (emailid) => {

    const email = emailid.split("@")
    const userName = email[0].split("")
        .map((item, index) => {
            if (index > 2) {
                return "*"

            }
            return item

        }).join("")

    return userName + '@' + email[1]
};
