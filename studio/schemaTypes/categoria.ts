import {defineField, defineType} from 'sanity'

export const categoria = defineType({
  name: 'categoria',
  title: 'Categoria',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL da categoria)',
      description: 'Identificador usado no endereço da página, ex.: categoria.html?cat=drogaria-e-tintas',
      type: 'slug',
      options: {source: 'nome'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImagem',
      title: 'Imagem de destaque',
      description: 'Imagem de topo da página da categoria (arraste o ficheiro para aqui)',
      type: 'image',
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
    select: {title: 'nome', subtitle: 'descricao', media: 'heroImagem'},
  },
})
