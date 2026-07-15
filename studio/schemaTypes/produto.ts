import {defineField, defineType} from 'sanity'

export const produto = defineType({
  name: 'produto',
  title: 'Produto (Artigo)',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'categoria'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      description: 'Fotografia do produto (arraste o ficheiro para aqui)',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de apresentação',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Ordem de apresentação',
      name: 'ordemAsc',
      by: [{field: 'ordem', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'nome', subtitle: 'categoria.nome', media: 'imagem'},
  },
})
