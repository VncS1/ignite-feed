import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> { //Extendendo uma interface pronta, para poder usar os atributos padrões, nesse
                                                                    //caso da tag img, para não precisarmos criar nossa propria interface,
                                                                    //por exemplo: title, alt, etc...
    hasBorder?: boolean; //Falando que essa propriedade é opcional
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { /*  Se não tiver propiredades enviadas, o hasBorder padrão será true 
                                                    ele só será alterado se o hasBorder for igual a false */
                        //pega separadamente o hasBorder e coloca o resto no objeto props
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} /* Se o hasBorder for true, aplicar um estilo, se não, aplicar outro*/
            {...props} //Usar todos os outros valores do props que foram passado
                        //como uma propriedade, sem precisar por 1 por 1
        />
    );
}