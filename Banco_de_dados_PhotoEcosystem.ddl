
CREATE TABLE T_COMENTARIO_STORY 
    ( 
     id_comentario NUMBER  NOT NULL , 
     id_user       NUMBER  NOT NULL , 
     us_comentario CLOB  NOT NULL 
    ) 
;

ALTER TABLE T_COMENTARIO_STORY 
    ADD CONSTRAINT T_COMENTARIO_STORY_PK UNIQUE( id_comentario ) ;


CREATE TABLE T_COMENTARIOS_POSTAGEM 
    ( 
     id_comentario_postagem NUMBER  NOT NULL , 
     pt_comentario          VARCHAR2(300) Null,
     dt_comentario  DATE  NOT NULL , 
     id_user    NUMBER (5)  NOT NULL 
    ) 
;

ALTER TABLE T_COMENTARIOS_POSTAGEM 
    ADD CONSTRAINT T_COMENTARIOS_POSTAGEM_PK PRIMARY KEY ( id_comentario_postagem ) ;

ALTER TABLE T_COMENTARIOS_POSTAGEM 
    ADD CONSTRAINT T_COMENTARIOS_POSTAGEM__UN UNIQUE ( id_user ) ;

CREATE TABLE T_CONFIGURACOES (
    id_user                 NUMBER   NOT NULL,
    cf_privacidade_perfil   CHAR(1)  NOT NULL,
    cf_localizacao          CHAR(1)  NOT NULL,
    cf_compart_atividade    CHAR(1)  NOT NULL
);
ALTER TABLE T_CONFIGURACOES
ADD CONSTRAINT T_CONFIGURACOES_PK unique (T_USUARIO_ID_USER);

CREATE TABLE T_CURTIDA_COMENTARIO 
    ( 
     id_comentario NUMBER  NOT NULL , 
     id_postagem   NUMBER  NOT NULL , 
     id_user       NUMBER  NOT NULL 
    ) 
;


ALTER TABLE T_CURTIDA_COMENTARIO 
    ADD CONSTRAINT T_CURTIDA_COMENTARIO_PK PRIMARY KEY ( id_comentario, id_user ) ;

CREATE TABLE T_CURTIDA_POSTAGEM 
    ( 
     id_curtida_postagem NUMBER  NOT NULL , 
     id_user             NUMBER  NOT NULL 
    ) 
;

ALTER TABLE T_CURTIDA_POSTAGEM 
    ADD CONSTRAINT T_CURTIDA_POSTAGEM_PK PRIMARY KEY ( id_curtida_postagem ) ;

ALTER TABLE T_CURTIDA_POSTAGEM 
    ADD CONSTRAINT T_CURTIDA_POSTAGEM__UN UNIQUE ( id_user , id_curtida_postagem ) ;

CREATE TABLE T_CURTIDA_STORY 
    ( 
     id_curtida_story NUMBER  NOT NULL , 
     id_user          NUMBER  NOT NULL , 
     ct_data          DATE  NOT NULL 
    ) 
;

ALTER TABLE T_CURTIDA_STORY 
    ADD CONSTRAINT T_CURTIDA_STORY_PK PRIMARY KEY ( id_curtida_story ) ;

ALTER TABLE T_CURTIDA_STORY 
    ADD CONSTRAINT T_CURTIDA_STORY__UN UNIQUE ( id_curtida_story , id_user ) ;

CREATE TABLE T_PESQUISA_USER 
    ( 
     id_pesquisa         NUMBER  NOT NULL , 
     ct_pesquisado_ordem DATE , 
     T_USUARIO_id_user   NUMBER  NOT NULL 
    ) 
;

COMMENT ON COLUMN T_PESQUISA_USER.ct_pesquisado_ordem IS 'Ordem de organzação dos conteudos pesquisados por data de pesquisa, assim deixando os mais recentes acima e os mais velhos abaixo, como funciona no instagram.' 
;

ALTER TABLE T_PESQUISA_USER 
    ADD CONSTRAINT T_PESQUISA_USER_PK PRIMARY KEY ( id_pesquisa ) ;

CREATE TABLE T_POSTAGEM_USER 
    ( 
     id_postagem       NUMBER  NOT NULL , 
     pt_data           DATE  NOT NULL , 
     pt_descricao      VARCHAR2 (300) NULL,
     T_USUARIO_id_user NUMBER  NOT NULL 
    ) 
;

ALTER TABLE T_POSTAGEM_USER 
    ADD CONSTRAINT T_POSTAGEM_USER_PK PRIMARY KEY ( id_postagem ) ;

CREATE TABLE T_STORY_USER 
    ( 
     id_story          NUMBER  NOT NULL , 
     st_data           DATE  NOT NULL , 
     st_imagem         BLOB , 
     st_video          BLOB , 
     T_USUARIO_id_user NUMBER  NOT NULL 
    ) 
;

ALTER TABLE T_STORY_USER 
    ADD CONSTRAINT T_STORY_USER_PK PRIMARY KEY ( id_story ) ;

CREATE TABLE T_USUARIO 
    ( 
     id_user   NUMBER  NOT NULL , 
     nm_user   VARCHAR2 (100) NOT NULL , 
     em_user   VARCHAR2(100) NULL , 
     tl_user   NUMBER(11)NULL , 
     ft_perfil BLOB NULL, 
     ds_perfil VARCHAR2 (200) NULL                    
    ) 
;

COMMENT ON COLUMN T_USUARIO.ds_perfil IS 'Bloco de descrição sobre o usuario, desde seus gostos até caracteristicas.' 
;

ALTER TABLE T_USUARIO 
    ADD CONSTRAINT T_USUARIO_PK PRIMARY KEY ( id_user ) ;

ALTER TABLE T_USUARIO 
    ADD CONSTRAINT T_USUARIO__UN UNIQUE ( em_user , nm_user ) ;
 
ALTER TABLE T_COMENTARIO_STORY 
    ADD CONSTRAINT T_COMENTARIO_STORY_T_STORY_USER_FK FOREIGN KEY 
    ( 
     id_user
    ) 
    REFERENCES T_STORY_USER 
    ( 
     id_story
    ) 
;

ALTER TABLE T_COMENTARIOS_POSTAGEM 
    ADD CONSTRAINT T_COMENTARIOS_POSTAGEM_T_POSTAGEM_USER_FK FOREIGN KEY 
    ( 
     id_user
    ) 
    REFERENCES T_POSTAGEM_USER 
    ( 
     id_postagem
    ) 
;

ALTER TABLE T_CONFIGURACOES 
    ADD CONSTRAINT T_CONFIGURACOES_T_USUARIO_FK FOREIGN KEY 
    ( 
     T_USUARIO_id_user
    ) 
    REFERENCES T_USUARIO 
    ( 
     id_user
    ) 
;
ALTER TABLE T_CURTIDA_COMENTARIO 
    ADD CONSTRAINT T_CURTIDA_COMENTARIO_T_CURTIDA_COMENTARIO_FK FOREIGN KEY 
    ( 
     id_comentario,
     id_user
    ) 
    REFERENCES T_CURTIDA_COMENTARIO 
    ( 
     id_comentario,
     id_user
    ) 
;

ALTER TABLE T_CURTIDA_POSTAGEM 
    ADD CONSTRAINT T_CURTIDA_POSTAGEM_T_POSTAGEM_USER_FK FOREIGN KEY 
    ( 
     id_user
    ) 
    REFERENCES T_POSTAGEM_USER 
    ( 
     id_postagem
    ) 
;


ALTER TABLE T_CURTIDA_STORY 
    ADD CONSTRAINT T_CURTIDA_STORY_T_CURTIDA_STORY_FK FOREIGN KEY 
    ( 
     id_user
    ) 
    REFERENCES T_CURTIDA_STORY 
    ( 
     id_curtida_story
    ) 
;

ALTER TABLE T_PESQUISA_USER 
    ADD CONSTRAINT T_PESQUISA_USER_T_USUARIO_FK FOREIGN KEY 
    ( 
     T_USUARIO_id_user
    ) 
    REFERENCES T_USUARIO 
    ( 
     id_user
    ) 
;

ALTER TABLE T_POSTAGEM_USER 
    ADD CONSTRAINT T_POSTAGEM_USER_T_USUARIO_FK FOREIGN KEY 
    ( 
     T_USUARIO_id_user
    ) 
    REFERENCES T_USUARIO 
    ( 
     id_user
    ) 
;

ALTER TABLE T_STORY_USER 
    ADD CONSTRAINT T_STORY_USER_T_USUARIO_FK FOREIGN KEY 
    ( 
     T_USUARIO_id_user
    ) 
    REFERENCES T_USUARIO 
    ( 
     id_user
    ) 
;



