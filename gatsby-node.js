// const config = require('./gatsby-config')
// const { createRemoteFileNode } = require('gatsby-source-filesystem')
// const axios = require('axios')
// const camelCase = require('camelcase');
// const {
//     apiKey: microcmsApiKey,
//     serviceId: microcmsServiceId,
//     apis: microcmsApis
// } = config.plugins
//     .filter(plugin => plugin.resolve === 'gatsby-source-microcms')[0]
//     .options
// const microcmsPrefix = 'Microcms'
// const localPrefix = 'local'
// const ignoreFields = []

// /**
//  * フィールドがmicroCMSの画像型か判定する
//  * @param {*} field 
//  * @returns 
//  */
// const isMicroCmsImageField = field => {
//     return (
//         field &&
//         typeof field === 'object' &&
//         field.url &&
//         field.width &&
//         field.height
//     )
// }
// /**
//  * フィールドがmicroCMSの画像配列型か判定する
//  * @param {*} field 
//  * @returns 
//  */
// const isMicroCmsImageListField = field => {
//     if (!Array.isArray(field)) {
//         return false;
//     }
    
//     if (field.length === 0) {
//         return false
//     }

//     for (const el of field) {
//         if (!isMicroCmsImageField(el)) {
//             return false
//         }
//     }

//     return true
// }
// const createNodeFieldName = field => {
//     return camelCase(
//         [localPrefix, field],
//         { pascalCase: false }
//     )
// }

// exports.createPages = async function ({ actions, graphql }) {
//     const projects = [
//         {
//             id: 1,
//             title: 'パンテオン',
//             image: '/sample1.jpg',
//             discription: 'パンテオン (Pantheon) は、ローマ市内のマルス広場に建造された神殿。元々は、すべてのローマ神を奉る万神殿であった。汎神殿(はんしんでん)とも訳される。最初のパンテオンは紀元前25年、初代ローマ皇帝アウグストゥスの側近マルクス・ウィプサニウス・アグリッパによって建造された。ローマ市内の建築物についてアウグストゥスとアグリッパは明確な役割分担を持っており、アグリッパが建造した神殿はこのパンテオンのみである。このため、パンテオンは元々アウグストゥスを奉ることを予定していたが、市民の反発を避けるため、万神殿に変更されたとの説もある。このパンテオンは、後に火事で焼失している。',
//             images: [
//                 {
//                     alt: 'sampel 1',
//                     src: '/sample1.jpg',
//                 },
//                 {
//                     alt: 'sampel 2',
//                     src: '/sample2.jpg',
//                 },
//                 {
//                     alt: 'sampel 3',
//                     src: '/sample3.jpg',
//                 }
//             ],
//         },
//         {
//             id: 2,
//             title: 'パンテオン',
//             image: '/sample2.jpg',
//             discription: 'パンテオン (Pantheon) は、ローマ市内のマルス広場に建造された神殿。元々は、すべてのローマ神を奉る万神殿であった。汎神殿(はんしんでん)とも訳される。最初のパンテオンは紀元前25年、初代ローマ皇帝アウグストゥスの側近マルクス・ウィプサニウス・アグリッパによって建造された。ローマ市内の建築物についてアウグストゥスとアグリッパは明確な役割分担を持っており、アグリッパが建造した神殿はこのパンテオンのみである。このため、パンテオンは元々アウグストゥスを奉ることを予定していたが、市民の反発を避けるため、万神殿に変更されたとの説もある。このパンテオンは、後に火事で焼失している。',
//             images: [
//                 {
//                     alt: 'sampel 1',
//                     src: '/sample1.jpg',
//                 },
//                 {
//                     alt: 'sampel 2',
//                     src: '/sample2.jpg',
//                 },
//                 {
//                     alt: 'sampel 3',
//                     src: '/sample3.jpg',
//                 }
//             ],
//         },
//         {
//             id: 3,
//             title: 'パンテオン',
//             image: '/sample3.jpg',
//             discription: 'パンテオン (Pantheon) は、ローマ市内のマルス広場に建造された神殿。元々は、すべてのローマ神を奉る万神殿であった。汎神殿(はんしんでん)とも訳される。最初のパンテオンは紀元前25年、初代ローマ皇帝アウグストゥスの側近マルクス・ウィプサニウス・アグリッパによって建造された。ローマ市内の建築物についてアウグストゥスとアグリッパは明確な役割分担を持っており、アグリッパが建造した神殿はこのパンテオンのみである。このため、パンテオンは元々アウグストゥスを奉ることを予定していたが、市民の反発を避けるため、万神殿に変更されたとの説もある。このパンテオンは、後に火事で焼失している。',
//             images: [
//                 {
//                     alt: 'sampel 1',
//                     src: '/sample1.jpg',
//                 },
//                 {
//                     alt: 'sampel 2',
//                     src: '/sample2.jpg',
//                 },
//                 {
//                     alt: 'sampel 3',
//                     src: '/sample3.jpg',
//                 }
//             ],
//         }
//     ]
//     projects.forEach(project => {
//         const id = project.id
//         actions.createPage({
//             path: `project/${id}`,
//             component: require.resolve('./src/templates/project.js'),
//             context: project,
//         })
//     })
// }

// exports.createSchemaCustomization = async ({ actions }) => {
//     const { createTypes } = actions
//     /**
//      * microCMSにはスキーマを取得するAPIがないため
//      * 全てのコンテンツを取得して画像型のフィールドを検索する必要がある
//      */
//     for (const api of microcmsApis) {
//         const endpoint = api.endpoint
//         const url = `https://${microcmsServiceId}.microcms.io/api/v1/${endpoint}`

//         let offset = 0
//         const limit = 10
//         const imageFields = []
//         const imageListFields = []
//         while (true) {
//             const res = await axios.get(url, {
//                 params: { offset, limit },
//                 headers: {
//                     'X-MICROCMS-API-KEY': microcmsApiKey,
//                 }
//             })
//             for (const content of res.data.contents) {
//                 for (const field in content) {
//                     if (ignoreFields.includes(field)) {
//                         continue
//                     }
//                     if (imageFields.includes(field)) {
//                         continue
//                     }
//                     if (imageListFields.includes(field)) {
//                         continue
//                     }
//                     if (isMicroCmsImageField(content[field])) {
//                         imageFields.push(field)
//                         continue
//                     }
//                     if (isMicroCmsImageListField(content[field])) {
//                         imageListFields.push(field)
//                         continue
//                     }
//                 }
//             }

//             offset += limit
//             if (offset >= res.data.totalCount) {
//                 break
//             }
//         }
        
//         for (const field of imageFields) {
//             const typeName = camelCase(
//                 [microcmsPrefix, endpoint],
//                 { pascalCase: true }
//             )
//             const fieldName = camelCase(
//                 [localPrefix, field],
//                 { pascalCase: false }
//             )
//             createTypes(`
//                 type ${typeName} implements Node {
//                     ${fieldName}: File @link(from: "fields.${fieldName}.id")
//                 }
//             `)
//         }
        
//         for (const field of imageListFields) {
//             const typeName = camelCase(
//                 [microcmsPrefix, endpoint],
//                 { pascalCase: true }
//             )
//             const fieldName = camelCase(
//                 [localPrefix, field],
//                 { pascalCase: false }
//             )
//             createTypes(`
//                 type ${typeName} implements Node {
//                     ${fieldName}: [File] @link(from: "fields.${fieldName}.id")
//                 }
//             `)
//         }
//     }
// }

// exports.onCreateNode = async ({ node, actions, createNodeId, cache }) => {
//     const { createNode, createNodeField } = actions
//     if (node.internal.owner === 'gatsby-source-microcms') {
//         // for (const field in node) {
//         //     if (isMicroCmsImageField(node[field])) {
//         //         const fileNode = await createRemoteFileNode({
//         //             url: node[field].url,
//         //             parentNodeId: node.id,
//         //             cache,
//         //             createNode,
//         //             createNodeId,
//         //         })
//         //         console.log(`downloaded: ${node[field].url}`);
//         //         const name = camelCase(
//         //             [localPrefix, field],
//         //             { pascalCase: false }
//         //         )
//         //         await createNodeField({
//         //             node,
//         //             name,
//         //             value: fileNode,
//         //         })
//         //         continue
//         //     }

//         //     if (isMicroCmsImageListField(node[field])) {
//         //         const fileNodes = []
//         //         for (const el of node[field]) {
//         //             const fileNode = await createRemoteFileNode({
//         //                 url: el.url,
//         //                 parentNodeId: node.id,
//         //                 cache,
//         //                 createNode,
//         //                 createNodeId,
//         //             })
//         //             console.log(`downloaded: ${el.url}`);
//         //             fileNodes.push(fileNode)
//         //         }
//         //         const name = camelCase(
//         //             [localPrefix, field],
//         //             { pascalCase: false }
//         //         )
//         //         await createNodeField({
//         //             node,
//         //             name,
//         //             value: fileNodes,
//         //         })
//         //         continue
//         //     }
//         // }

//         await Promise.all(Object.keys(node)
//             .map(async field => {
//                 if (ignoreFields.includes(field)) {
//                     return
//                 }
//                 // *** フィールドが画像型の場合 ***
//                 if (isMicroCmsImageField(node[field])) {
//                     console.log(`start: ${node[field].url}`);
//                     return createRemoteFileNode({
//                         url: node[field].url,
//                         parentNodeId: node.id,
//                         cache,
//                         createNode,
//                         createNodeId,
//                     }).then(fileNode => {
//                         console.log(`end: ${node[field].url}`);
//                         return createNodeField({
//                             node,
//                             name: createNodeFieldName(field),
//                             value: fileNode,
//                         })
//                     })
//                 }
//                 // *** フィールドが画像型リストの場合 ***
//                 if (isMicroCmsImageListField(node[field])) {
//                     return Promise.all(node[field].map(img => {
//                         console.log(`start: ${img.url}`);
//                         return createRemoteFileNode({
//                             url: img.url,
//                             parentNodeId: node.id,
//                             cache,
//                             createNode,
//                             createNodeId,
//                         }).then(() => console.log(`end: ${img.url}`))
//                     })).then(fileNodes => {
//                         return createNodeField({
//                             node,
//                             name: createNodeFieldName(field),
//                             value: fileNodes,
//                         })
//                     })
//                 }
//                 //     return Promise.all(node[field].map(img => {
//                 //         console.log(`start: ${img.url}`);
//                 //         return createRemoteFileNode({
//                 //             url: img.url,
//                 //             parentNodeId: node.id,
//                 //             cache,
//                 //             createNode,
//                 //             createNodeId,
//                 //         }).then(() => console.log(`end: ${img.url}`))
//                 //     })).then(fileNodes => {
//                 //         const name = camelCase(
//                 //             [localPrefix, field],
//                 //             { pascalCase: false }
//                 //         )
//                 //         return createNodeField({
//                 //             node,
//                 //             name,
//                 //             value: fileNodes,
//                 //         })
//                 //     })
//                 // }
//             }))
//     }
// }
