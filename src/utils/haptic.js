import { trigger } from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

// Trigger haptic feedback

export const lightFeedback=()=>{
    trigger("impactLight", options);
}

export const mediumFeedback=()=>{
    trigger("impactMedium", options);
}

export const hardFeedback=()=>{
    trigger("rigid", options);
}

export const softFeedback=()=>{
    trigger("soft", options);
}

