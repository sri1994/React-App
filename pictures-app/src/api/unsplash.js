import axios from 'axios';

export default axios.create({
    headers: {
        Authorization: 'Client-ID 1d524a39a335aac32043d9681091a21a7ac122746d790a0bbfb71f1756ec2f36'
    },
    baseURL: 'https://api.unsplash.com'
});