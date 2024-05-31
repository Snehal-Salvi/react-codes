const data = [
    {
      id: 1,
      name: "public",
      type: "folder",
      childrens: [
        {
          id: 2,
          name: "src",
          childrens: [
            { id: 2.1, name: "file1.txt", type: "file" },
            { id: 2.2, name: "file2.txt", type: "file" },
            { id: 2.3, name: "file3.txt", type: "file" },
          ],
          type: "folder",
        },
        {
          id: 3,
          name: "index.js",
          type: "file",
        },
      ],
    },
    {
      id: 4,
      name: "images",
      type: "folder",
      childrens: [
        {
          id: 4.1,
          name: "img1",
          type: "file",
        },
        {
          id: 4.2,
          name: "img2",
          type: "file",
        },
        {
          id: 4.3,
          name: "img3",
          type: "file",
        },
      ],
    },
    {
      id: 5,
      name: "package.json",
      type: "file",
    },
  ];
  export default data;
  