const staggerContainer = ( delayChildren?: number) => {
    return {
        hidden: {
            opacity: 0
        },
        show: {
            transition: {
                staggerChildren: true,
                delayChildren: delayChildren || 0,
            },
        },
    };
};

export default staggerContainer;