import { delay } from "../helpers/functionality"
export default {
    methods: {
        async notification(data) {
            this.$store.commit("setNotifData", {
                status: data.status,
                message: data.message,
            });
            this.$store.commit("showNotif", true);

            await delay(5000);
            this.$store.commit("showNotif", false);
        }
    }
};