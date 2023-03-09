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

    return companyList[Math.floor(Math.random() * companyList.length)];
}

function getRandomTime() {
    const randomTimeIndex = Math.floor(Math.random() * 2);
    const randomTime = randomTimeIndex === 0 ? "hr" : "mins";

    switch (randomTime) {
        case "hr":
            const randomHourNum = Math.floor(Math.random() * 24);
            return `${randomHourNum} hrs`;
        case "mins":
            const randomMinNum = Math.floor(Math.random() * 60);
            return `${randomMinNum} mins`;
    }
}

function getCandidate(index) {
    return {
        name: Candidates.candidates[index].name,
        photo: getRandomCandidatePhoto(),
        company: getRandomCompany(),
    };
}

function getChat(index) {
    const randomName =
        Candidates.candidates[Math.floor(Math.random() * 10)].name;

    return {
        name: randomName,
        photo: getRandomCandidatePhoto(),
        message: Chats.chats[index].message,
        time: getRandomTime(),
    };
}

export const getCandidates = () => {
    const candidateList = [];

    for (let i = 0; i < Candidates.candidates.length; i++) {
        candidateList.push(getCandidate(i));
    }

    return candidateList;
};

export const getChats = () => {
    const chatList = [];

    for (let i = 0; i < Chats.chats.length; i++) {
        chatList.push(getChat(i));
    }

    return chatList;
};
