import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link'; //Vai ser de um tipo ou outro
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[]; //Um array do tipo content
}

export function Post({ author, publishedAt, content }: PostProps) { //Falando q as propriedades do post possuem o formato do PostProps
    //estado => Variáveis que eu quero q o componente monitore
    //Comments está dentro da função post para não compartilhar
    //os comentários com outros post
    const [comments, setComments] = useState([
        'Post muito bacana!'
    ])

    const [newCommentText, setNewCommentText] = useState('');//Inicializando com o mesmo formato que será guardado depois

    //Formatando a data: o d, LLL e o HH:mm são como as informações irão aparecer
    //de acordo com a biblioteca date-fns, e o 'de' e o 'às' estão entre aspas
    //simples para não entrar na formatação
    //E colocando o idioma como ptBR
    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    //Vendo quanto tempo passou da data que foi passad até a data atual
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) { /* handle pois essa função será chamada por uma ação do usuário*/
                                    //Passando o tipo de evento
        event.preventDefault()

        //Le o valor da variável comentários, e adiciona no final dela
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) { //Vendo quando tiver uma mudança no textarea (algo digitado)
                                            //Passando o tipo de evento e de onde o evento foi disparado
        event.target.setCustomValidity('')//Resetando a validação quando o usuário digitar algo

        setNewCommentText(event.target.value)
    }

    //Função que irá ser chamada quando tiver um submit invalido
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        //Imutabilidade: as variaveis não sofrem mutação (nunca alteramos uma variável na memória da aplicação)
        //nós criamos um novo valor(novo espaço na memória)

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete //Manter os comentários que possuem um texto diferente do commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar
                        src={author.avatarUrl}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p> //key sempre vai no primeiro elemento apos o inicio da lista
                    } else if (line.type === 'link') {        //nesse caso, a tag <p>
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid} //Chamada sempre que o html identificar algum submit inválido \/
                    required //Faz o texto ser obrigatório, não deixando enviar nada vazio
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}> {/* Botão ficará desabilitado quando não tiver nada no textarea*/}
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment} //Passando uma função para o componente Comment com o comentário que será deletado
                        />
                    ) //Mandando o texto do comentário
                })}
            </div>
        </article>
    )
}