const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedNews() {
  const newsData = [
    {
      taskId: 1,
      categoryId: 1,
      pendingId: null,
      authorId: 3,
      title: "Mahasiswa Rencana Aplikasi Eduakasi untuk Daerah 3T",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      pendingId: null,
      authorId: 4,
      title: "Teknologi AI Mengubah Cara Jurnalis Bekerja di Lapangan",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
  ];

  for (const news of newsData) {
    await prisma.news.create({
      data: news,
    });
  }

  console.log("News seeded successfully.");
}

module.exports = { seedNews };
