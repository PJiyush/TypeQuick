export const storeWpmAccuracy = (timer:number) => {
    const correct = document.querySelectorAll('.correct').length;
    const incorrect = document.querySelectorAll('.incorrect').length;
    const total = correct + incorrect;
    const accuracy = Math.round((correct / total) * 100);
    const words = document.querySelectorAll('.word').length;
    const wpm =(words / (
        timer / 60
    ));
    return {
        accuracy: accuracy,
        wpm: wpm
    }
};