// const environment = process.env.NODE_ENV || 'production';
const environment ='development';
// 


const config = {
    development: {
        mode: 'development',
        API_URL: "http://localhost:3000"
    },
    production: {
        mode: 'production',
        API_URL: "https://blog-app-backend-gs9u07ztc-prafulk9155s-projects.vercel.app/"
    }
};

// Export the configuration for the current environment as default
const currentConfig = config[environment];
export default currentConfig;