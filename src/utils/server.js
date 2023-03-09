/* eslint-disable prettier/prettier */
import Candidates from "../data/candidates.json";
import Chats from "../data/chats.json";

function getRandomCandidatePhoto() {
    const base_url = "https://xsgames.co/randomusers/assets/avatars/";
    const MAX_GENDERS = 2;
    const MAX_PICS = 21;

    // Random number between 0 and 1
    const randomGenderIndex = Math.floor(Math.random() * MAX_GENDERS);
    const randomGender = randomGenderIndex === 0 ? "male" : "female";

    // Random number between 0 and 20
    const randomPicIndex = Math.floor(Math.random() * MAX_PICS);

    return `${base_url}${randomGender}/${randomPicIndex}.jpg`;
}

function getRandomCompany() {
    const companyList = [
        "Google",
        "Facebook",
        "Apple",
        "Microsoft",
        "Amazon",
        "Nvidia",
    ];

    return Math.floor(Math.random() * companyList.length);
}

export const getCandidate = (index) => {
    return {
        name: Candidates[index].name,
        photo: getRandomCandidatePhoto(),
        company: getRandomCompany(),
    };
};
