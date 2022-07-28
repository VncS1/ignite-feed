import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void; //Uma função que não retorna nada
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => { //pra atualizar o valor de likes, eu preciso do valor anterior, que no caso é o state
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png" /> {/* Passando a propriedade hasBorder para definir se o avatar terá ou não borda*/}

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Josias</strong>
                            <time title="24 de Julho às 4:30h" dateTime="2022-05-11 8:13:50">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}> {/* passando: handleLikeComment, estou passando uma função
                                                            se colocar como: handleLikeComment(), aí estou passando a execução
                                                            de uma função, e isso não pode, pois irá entrar em um loop infinito
                                                            */}
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}