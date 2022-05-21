
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

function IconButton({icon, onPress}) {

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Ionicons name={icon} size={20} color="black" />
        </TouchableOpacity>
    )
}

export default IconButton;