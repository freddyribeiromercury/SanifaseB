import {defineField, defineType} from 'sanity'

export const catalogo = defineType({
  name: 'catalogo',
  title: 'Catálogo (PDF)',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'marca',
      title: 'Marca',
      type: 'string',
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'categoria'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ficheiro',
      title: 'Ficheiro PDF',
      description: 'Carregue aqui o PDF do catálogo (em alternativa, preencha o link abaixo)',
      type: 'file',
      options: {accept: 'application/pdf'},
    }),
    defineField({
      name: 'ficheiroUrl',
      title: 'Ficheiro PDF (link alternativo)',
      description: 'Usado apenas se não carregar ficheiro acima, ex.: https://www.sanifase.pt/catalogos/neuce-interiores.pdf',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['https', 'http']}),
    }),
    defineField({
      name: 'capa',
      title: 'Imagem da capa',
      description: 'Imagem de capa mostrada no cartão (arraste o ficheiro para aqui)',
      type: 'image',
    }),
    defineField({
      name: 'tamanho',
      title: 'Tamanho do ficheiro',
      description: 'Calculado automaticamente quando o PDF é carregado no campo Ficheiro — preencha apenas para links externos, ex.: "6.8 MB"',
      type: 'string',
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
    select: {title: 'nome', subtitle: 'categoria.nome', media: 'capa'},
  },
})
