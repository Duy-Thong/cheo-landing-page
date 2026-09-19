import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

export interface CharacterSubtype {
  typeName: string
  role: string
  vocal: string
  description: string
}

export interface StageConvention {
  title: string
  description: string
}

export interface SignatureMelody {
  name: string
  emotionalTone: string
  context: string
}

export interface IconicScene {
  title: string
  play: string
  description: string
}

export interface CharacterArchetype {
  id: string
  name: string
  fullName: string
  category: string
  image: string
  representative: string
  tagline: string
  famousQuote: string
  quoteContext: string
  overview: string[]
  subtypes: CharacterSubtype[]
  conventions: StageConvention[]
  signatureMelodies: SignatureMelody[]
  iconicScenes: IconicScene[]
  philosophy: string
  badge: string
}

export const CHARACTERS_DATA: CharacterArchetype[] = [
  {
    id: 'dao',
    name: 'Đào',
    fullName: 'Đào — Mẫu Hình Người Nữ Trong Chiếu Chèo Sân Đình',
    category: 'Hình Mẫu Nữ Chuẩn Mực',
    image: '/images/char_dao.jpg',
    representative: 'Thị Kính • Thị Mầu • Xúy Vân • Châu Long',
    tagline: 'Từ đức hạnh nhẫn nhục của Thị Kính đến khát vọng giải phóng tình cảm cuồng nhiệt của Thị Mầu và bi kịch nội tâm giằng xé của Xúy Vân.',
    famousQuote: 'Thầy như táo rụng sân đình, em như gái dở đi rình của chua... Nước trong leo lẻo con cá đớp mồi, chẳng giấu gì tôi đây ra mắt làng nước!',
    quoteContext: 'Thị Mầu ghẹo chú Tiểu Thiện Sĩ trong trích đoạn Thị Mầu Lên Chùa, vở Quan Âm Thị Kính',
    overview: [
      'Trong nghệ thuật Chèo cổ, hình tượng người phụ nữ chiếm vị trí trung tâm thiêng liêng và đa tầng bậc nhất. Khác với nhiều loại hình kịch hát phương Đông vốn thường tôn vinh đấng quân vương hay võ tướng lừng lẫy, chiếu Chèo châu thổ sông Hồng lại dành trọn sự cảm thương sâu sắc và ngòi bút tinh tế nhất cho thân phận người phụ nữ Việt Nam.',
      'Người nữ trong Chèo vừa là hiện thân của đức hy sinh, lòng tiết hạnh kiên trinh trước định kiến phong kiến hà khắc, vừa là ngọn lửa bản năng cháy bỏng, khát khao phá bỏ xiềng xích lễ giáo để đòi quyền tự do yêu đương và khẳng định bản ngã.'
    ],
    subtypes: [
      {
        typeName: 'Đào Thương',
        role: 'Thị Kính, Châu Long, Trinh Thục',
        vocal: 'Giọng hát nghẹn ngào, nỉ non, âm sắc trầm đượm nước mắt (Sử Rầu, Ru Kệ, Hát Cách)',
        description: 'Mẫu phụ nữ hiền thục, đoan trang, chịu thương chịu khó. Gặp nhiều oan trái bất công nhưng luôn lấy chữ Nhẫn và lòng trắc ẩn để hóa giải hận thù, giữ vẹn tấm lòng trong sạch.'
      },
      {
        typeName: 'Đào Lẳng',
        role: 'Thị Mầu, Đào Huế',
        vocal: 'Giọng hát tươi vui, nhịp phách rộn ràng, nẩy hạt lúng liếng (Cấm Giá, Đò Đưa, Hề Mồi)',
        description: 'Mẫu người phụ nữ đa tình, sắc sảo, dám sống thật với khát khao bản năng. Nụ cười đong đưa và ánh mắt lúng liếng phá tan không gian trang nghiêm của lễ giáo phong kiến.'
      },
      {
        typeName: 'Đào Điên / Đào Cuồng',
        role: 'Xúy Vân (Kim Nham)',
        vocal: 'Biến ảo khôn lường giữa tiếng cười sặc sụa và tiếng nấc u uất (Con Gà Rừng, Quá Giang, Xuôi Ngược Con Vịt)',
        description: 'Đỉnh cao bi kịch tâm lý sân khấu. Người phụ nữ vì bế tắc trước hôn nhân sắp đặt mà phải giả dại để tìm đường giải thoát, dẫn đến bi kịch giằng xé giữa điên loạn và nỗi đau tỉnh thức.'
      },
      {
        typeName: 'Đào Chiến / Đào Võ',
        role: 'Trần Quốc Toản, Hai Bà Trưng',
        vocal: 'Khí sắc sang sảng, âm vang hào sảng (Hát Vỉa, Hát Dặm)',
        description: 'Hình tượng nữ tướng quật cường xông pha trận mạc cứu nước, vũ đạo dứt khoát uy dũng nhưng vẫn giữ được nét thanh thoát của nữ nhi.'
      }
    ],
    conventions: [
      {
        title: 'Thế Đứng Chữ Đinh & Bước Chân Lướt Nhẹ',
        description: 'Chân trước thẳng, chân sau hơi chếch 45 độ, hai đầu gối chùng nhẹ nhàng tạo nên đường cong thon thả nâng đỡ tà áo tứ thân. Bước đi như lướt trên mặt chiếu, không nghe tiếng động.'
      },
      {
        title: 'Vũ Đạo Quạt Chèo Ước Lệ',
        description: 'Chiếc quạt nan lụa biến hóa thành ngôn ngữ biểu cảm: xòe quạt che nửa mặt e ấp thẹn thùng, gập quạt gõ lòng bàn tay toan tính băn khoăn, mở phắt vung cao rung nhẹ ở cao trào cảm xúc.'
      },
      {
        title: 'Ánh Mắt Có Đuôi & Ngón Tay Búp Sen',
        description: 'Mắt liếc có đuôi kín đáo mà duyên dáng; các ngón tay khép nhẹ, ngón trỏ và ngón cái uốn cong hình cánh sen e ấp vuốt nhẹ dải yếm lụa hồng đào.'
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Sử Rầu',
        emotionalTone: 'Ai oán, nỉ non, ngắt quãng nghẹn ngào',
        context: 'Diễn tả nỗi oan khuất khôn cùng của Thị Kính khi bị đuổi khỏi nhà chồng mà không thể thanh minh.'
      },
      {
        name: 'Làn điệu Cấm Giá',
        emotionalTone: 'Rộn rã, lả lơi, nhịp phách đảo liên hồi',
        context: 'Thị Mầu buông lời trêu ghẹo chú Tiểu Thiện Sĩ giữa chốn thiền môn thanh tịnh.'
      },
      {
        name: 'Làn điệu Con Gà Rừng',
        emotionalTone: 'Bất định, hỗn loạn, xót xa cay đắng',
        context: 'Xúy Vân độc thoại giằng xé giữa ước vọng tự do và vực thẳm cô đơn bế tắc của số phận.'
      }
    ],
    iconicScenes: [
      {
        title: 'Thị Mầu Lên Chùa',
        play: 'Quan Âm Thị Kính',
        description: 'Màn đối chất nghệ thuật kinh điển giữa sắc dục trần thế căng tràn nhựa sống và sự tĩnh lặng vô vi chốn Phật đường.'
      },
      {
        title: 'Xúy Vân Giả Dại',
        play: 'Kim Nham',
        description: 'Kiệt tác độc diễn nội tâm và vũ đạo múa quạt xuất thần bậc nhất của nền sân khấu kịch hát dân tộc Việt Nam.'
      }
    ],
    philosophy: 'Người nữ trong Chèo là tiếng nói bênh vực nhân phẩm, tôn vinh khát vọng tình yêu tự do và niềm cảm thương vô hạn của người nông dân Bắc Bộ dành cho thân phận người phụ nữ chịu nhiều thiệt thòi trong xã hội cũ.',
    badge: 'Hình Mẫu Nữ'
  },
  {
    id: 'kep',
    name: 'Kép',
    fullName: 'Kép — Mẫu Hình Đấng Nam Nhi Quân Tử',
    category: 'Hình Mẫu Nam Chuẩn Mực',
    image: '/images/char_kep.jpg',
    representative: 'Lưu Bình • Thiện Sĩ • Trương Viên • Tuần Ty',
    tagline: 'Biểu tượng của chữ Nhân, chữ Nghĩa, phong thái nho nhã đĩnh đạc và tinh thần xả thân vì nghĩa lớn.',
    famousQuote: 'Chí làm trai dặm nghìn tang bồng bảng lảng, dốc lòng vàng quyết đền nợ nước ơn vua. Dẫu thác cũng thơm danh cùng sử sách!',
    quoteContext: 'Khẩu khí tráng chí của Lưu Bình khi lên đường dùi mài kinh sử đền đáp tình tri kỷ, vở Lưu Bình Dương Lễ',
    overview: [
      'Nếu Đào là dòng sông cảm xúc uốn lượn thăng trầm thì Kép là cột trụ đạo đức, đại diện cho những giá trị luân thường đạo lý cốt lõi của xã hội cổ truyền: Nhân, Lễ, Nghĩa, Trí, Tín. Trên chiếu Chèo, Kép mang cốt cách ung dung tự tại, lời ăn tiếng nói mạch lạc của người có học.',
      'Dù ở dạng thức thư sinh nho nhã hay võ tướng dũng liệt xông pha, nhân vật Kép luôn gánh vác sứ mệnh lập thân cứu đời, giữ trọn tình bằng hữu thủy chung và thực hiện ước vọng công danh sáng rạng tông môn.'
    ],
    subtypes: [
      {
        typeName: 'Kép Văn (Thư Sinh Chuẩn Mực)',
        role: 'Lưu Bình, Thiện Sĩ, Trương Viên',
        vocal: 'Giọng hát ấm áp, ngân dài đĩnh đạc, rõ từng âm tiết (Quân Tử Vu Dịch, Hát Nói, Lới Lơ)',
        description: 'Mẫu nam nhi đĩnh đạc, áo the khăn xếp, đèn sách chuyên cần. Trọng nghĩa khinh tài, son sắt thủy chung với bằng hữu và người bạn đời hiền thục.'
      },
      {
        typeName: 'Kép Võ (Tướng Soái Oai Phong)',
        role: 'Triệu Khánh Bình, Thoát Hoan, Trần Hưng Đạo',
        vocal: 'Âm vang hào sảng, uy dũng, dứt khoát (Hát Vỉa, Hát Dặm Hùng)',
        description: 'Tướng lĩnh mình khoác chiến bào, gươm đao sáng quắc, phong thái oai vệ xông pha sa trường bảo vệ non sông bờ cõi.'
      },
      {
        typeName: 'Kép Lệch / Kép Bạc Tình',
        role: 'Tuần Ty, Trần Phương',
        vocal: 'Giọng hát đon đả, trau chuốt nhưng thiếu chiều sâu chân thành',
        description: 'Kẻ tham phú phụ bần, tráo trở lời thề non hẹn biển. Tạo nên đối trọng xung đột sắc nét làm nổi bật phẩm giá cao đẹp của người phụ nữ.'
      }
    ],
    conventions: [
      {
        title: 'Bộ Tấn Chữ Bát & Dáng Đi Vuông Vắn',
        description: 'Dáng đứng thẳng hiên ngang, hai gót chân khép góc, mũi chân mở rộng hình chữ Bát, ngực ưỡn nhẹ, bước đi dứt khoát vững chãi như núi non.'
      },
      {
        title: 'Vén Tà Áo Thụng & Cầm Cuốn Thư',
        description: 'Một tay nhẹ nâng vạt áo dài ngang thắt lưng khi cất bước, tay kia cầm cuốn thư chữ Hán hoặc ngọn bút lông; khi trầm ngâm chắp tay sau lưng đi bách bộ uy nghi.'
      },
      {
        title: 'Khẩu Khí Nói Lối Đĩnh Đạc',
        description: 'Phát âm tròn vành rõ chữ, không dùng giọng lơi lả, giữ ngữ điệu trang trọng mực thước của người thấu triệt kinh thư thánh hiền.'
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Quân Tử Vu Dịch',
        emotionalTone: 'Trầm hùng, lưu luyến mà quyết đoán',
        context: 'Kẻ sĩ từ biệt gia đình, người thương lên đường tòng quân hoặc lai kinh ứng thí.'
      },
      {
        name: 'Làn điệu Tình Thư Bức Thao',
        emotionalTone: 'Trữ tình, da diết, đượm tình ân nghĩa',
        context: 'Lưu Bình bày tỏ nỗi nhớ nhung sâu lắng và lời cảm tạ chân tình gửi nàng Châu Long.'
      }
    ],
    iconicScenes: [
      {
        title: 'Lưu Bình Dương Lễ Hội Ngộ',
        play: 'Lưu Bình Dương Lễ',
        description: 'Màn tái ngộ rưng rưng nước mắt tôn vinh tình bạn kim bằng tri kỷ và đức hy sinh thầm lặng vì đại nghĩa.'
      },
      {
        title: 'Thiện Sĩ Nghi Oan Thị Kính',
        play: 'Quan Âm Thị Kính',
        description: 'Bước ngoặt bi kịch của sự hồ đồ định kiến, để lại bài học đau xót muôn đời về sự tỉnh táo và lòng thấu hiểu trong hôn nhân.'
      }
    ],
    philosophy: 'Nhân vật Kép gửi gắm ước mơ của người dân về người trí thức có tâm có đức, sống trọn tình trọn nghĩa, là chỗ dựa vững chãi cho gia đình và xã tắc.',
    badge: 'Hình Mẫu Nam'
  },
  {
    id: 'he',
    name: 'Hề',
    fullName: 'Hề — Linh Hồn Tiếng Cười Dân Gian Sân Đình',
    category: 'Nhân Vật Trào Phúng Dân Gian',
    image: '/images/char_he.jpg',
    representative: 'Hề Cu Sứt • Hề Mồi • Hề Gậy • Hề Thầy Bói',
    tagline: 'Chiếc gương soi thói hư tật xấu, dùng tiếng cười sảng khoái của kẻ cùng khổ để hạ bệ uy quyền phong kiến mục ruỗng.',
    famousQuote: 'Ăn no ngủ kỹ rồi ra múa quạt, cười một trận cho sáng mắt trần gian! Thầy ăn hết nạc thì để con gặm xương, chứ đời thuở nhà ai măng cụt lại bảo là tre già bao giờ!',
    quoteContext: 'Hề Cu Sứt xỏ xiên Thầy Cai bóc lột trong trích đoạn Cu Sứt Xỏ Thầy, vở Kim Nham',
    overview: [
      'Không có chiếu Chèo nào trọn vẹn nếu thiếu vắng tiếng cười của nhân vật Hề. Hề là linh hồn của sân đình, là đại diện kiệt xuất cho trí tuệ dân gian hóm hỉnh, sự lạc quan bất diệt và tinh thần phản kháng sắc bén của người nông dân trước cường quyền thống trị.',
      'Đặc quyền vô song của Hề Chèo là phá vỡ bức tường ngăn cách giữa sân khấu và đời thực: Hề tự do trò chuyện, nháy mắt với khán giả hội làng, kéo cả đám đông người xem hòa vào một trận cười vừa hả hê vừa thấm đẫm triết lý nhân sinh.'
    ],
    subtypes: [
      {
        typeName: 'Hề Gậy (Cu Sứt, Hề Theo Thầy)',
        role: 'Cu Sứt, Hề theo quan huyện',
        vocal: 'Lối hát nói tưng tửng, dồn dập, gắt nhịp bất ngờ (Hề Gậy Nhảy Chân Sáo)',
        description: 'Người hầu đi theo thầy cai hoặc quan chức. Bề ngoài giả bộ ngô nghê ngớ ngẩn nhưng bên trong cực kỳ láu lỉnh, chuyên dùng phép chơi chữ dân gian để xỏ xiên và bóc trần thói hợm hĩnh của chủ.'
      },
      {
        typeName: 'Hề Mồi (Hề Đơm Rơm)',
        role: 'Hề Mồi Làng Khuốc, Hề Bói Quẻ',
        vocal: 'Nhí nhảnh, đảo phách rộn rã, tiếng cười bật ra tự nhiên (Làn điệu Hề Mồi, Hề Đơm Rơm)',
        description: 'Tay cầm đóm rơm bùi nhùi le lói, miệng liến thoắng rổn rảng. Chuyên châm chọc thói mê tín dị đoan, thầy bói rởm và phường trọc phú bần tiện nơi thôn dã.'
      },
      {
        typeName: 'Hề Áo Ngắn (Hề Bần Nông)',
        role: 'Kẻ tôi tớ, người ở cùng khổ',
        vocal: 'Mộc mạc, đậm chất ca dao dân ca đồng ruộng',
        description: 'Mặc manh áo cộc rách vá chằng đụp, quần xắn cao khập khiễng. Đại diện cho tiếng nói bất khuất và niềm tin yêu cuộc đời của giai cấp nông dân cùng đinh.'
      }
    ],
    conventions: [
      {
        title: 'Bước Chân Sáo & Dáng Đi Ziczac',
        description: 'Chân nhảy nhót nhún nhảy theo nhịp trống đế, đầu lắc lư ngộ nghĩnh, lưng uốn lượn biến hóa tức thì, có thể ngồi thụp hay xoay phắt 180 độ chỉ trong chớp mắt.'
      },
      {
        title: 'Cây Gậy Tre Biến Hóa & Chiếc Quạt Rách',
        description: 'Gậy tre khi biến thành ngựa thần phi nước đại, lúc hóa thành đòn gánh hay thước đo lòng dạ quan trên; quạt nan rách dùng để che miệng khi thì thầm nói xấu chủ.'
      },
      {
        title: 'Nghệ Thuật Ứng Khẩu Cùng Khán Giả',
        description: 'Không bị câu thúc cứng nhắc vào kịch bản, Hề tự do ứng biến theo không khí hội làng, biến người xem thành nhân vật đồng sáng tạo tiếng cười.'
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Hề Mồi',
        emotionalTone: 'Tươi vui rộn rã, phách trống đế phụ họa giòn tan',
        context: 'Hề ra mắt dân làng, làm nóng không gian chiếu chèo bằng những câu đố mẹo hóm hỉnh.'
      },
      {
        name: 'Làn điệu Hề Gậy',
        emotionalTone: 'Tưng tửng, châm biếm sâu cay, nhịp dồn dập',
        context: 'Màn đối đáp lột trần thói dốt nát và tham lam vô đáy của quan huyện thầy đồ.'
      }
    ],
    iconicScenes: [
      {
        title: 'Cu Sứt Xỏ Thầy Cai',
        play: 'Kim Nham',
        description: 'Màn đối đáp thượng thừa biến quan thầy phong kiến uy nghiêm thành trò cười chế giễu của toàn bộ dân làng quanh sân đình.'
      },
      {
        title: 'Hề Mồi Thầy Bói Bịt Mắt Bắt Dê',
        play: 'Tích Chèo Cổ Bắc Bộ',
        description: 'Cơn bão tiếng cười đả kích kịch liệt tệ mê tín dị đoan và thói đạo đức giả của phường buôn thần bán thánh.'
      }
    ],
    philosophy: 'Tiếng cười Hề Chèo là vũ khí tự vệ văn hóa của người bình dân, lấy sự hóm hỉnh để giải tỏa u uất, giữ vững tinh thần lạc quan yêu đời vượt lên gian khó cơ hàn.',
    badge: 'Tiếng Cười Sân Đình'
  },
  {
    id: 'lao',
    name: 'Lão',
    fullName: 'Lão — Bậc Trưởng Thượng & Chiều Sâu Nhân Thế',
    category: 'Hình Mẫu Bậc Trưởng Lão',
    image: '/images/char_lao.jpg',
    representative: 'Mãng Ông • Lão Say Làng Khuốc • Trương Mẫu',
    tagline: 'Đại diện cho sự từng trải nhân thế, tiếng thở dài xót thương trước nỗi oan con cháu và triết lý an nhiên thấu suốt bụi trần.',
    famousQuote: 'Con ơi! Oan khổ thấu tận trời xanh nhưng bia miệng ngàn năm còn nhớ người trong sạch. Trời đất mênh mông một chén rượu cay, say để thấy rõ lòng người điên đảo!',
    quoteContext: 'Lời nghẹn ngào của Mãng Ông khi gạt nước mắt tiễn Thị Kính dứt áo xuất gia, tích Quan Âm Thị Kính',
    overview: [
      'Nhân vật Lão trên sân khấu Chèo cổ là biểu tượng của thế hệ cha ông đi trước, mang trĩu nặng trên vai kinh nghiệm nhân sinh và luân thường đạo lý. Từ hình ảnh người cha nghèo gạt nước mắt nuốt đắng cay trước sự áp chế bạo tàn của nhà giàu, đến cụ già say mượn rượu để nói sự thật giữa đời.',
      'Sự xuất hiện của vai Lão tạo nên nốt lặng trầm lắng và triết lý, giữ cho sân khấu Chèo luôn gắn chặt với tình phụ tử mẫu tử thiêng liêng và sự bao dung nhân hậu của người Việt.'
    ],
    subtypes: [
      {
        typeName: 'Lão Hiền (Mãng Ông, Lão Tiều)',
        role: 'Mãng Ông, Trương Mẫu',
        vocal: 'Trầm buồn, đứt đoạn, run rẩy xót xa (Sa Lệch Lão, Trần Tình)',
        description: 'Người cha già hiền lương chất phác, đại diện cho gia đình bần hàn nhưng thanh bạch. Tình yêu con vô bờ bến thể hiện qua những giọt nước mắt nghẹn ngào trước cường quyền oan nghiệt.'
      },
      {
        typeName: 'Lão Say (Trí Giả Ẩn Dật)',
        role: 'Lão say làng Khuốc (Thái Bình)',
        vocal: 'Phóng khoáng, tự do, nhịp ngắt bất thường (Lão Say Ngâm Gió)',
        description: 'Điển hình kiệt xuất của nghệ thuật Chèo dân gian. Say rượu mà tâm cực tỉnh, thân xiêu ngả mà mắt thấu tỏ tim đen kẻ ác, mượn men cay để cười cợt thế sự đảo điên.'
      },
      {
        typeName: 'Lão Trọc Phú / Quan Liêu',
        role: 'Phú Ông, Xã Trưởng',
        vocal: 'Hách dịch, kéo dài giọng kẻ cả nhưng hèn nhát khi gặp họa',
        description: 'Kẻ cậy giàu ức hiếp dân nghèo, hám sắc bủn xỉn, là nguồn cơn tạo nên mâu thuẫn giai cấp gay gắt nơi thôn dã.'
      }
    ],
    conventions: [
      {
        title: 'Dáng Còng Chữ C & Bước Đi Ngập Ngừng',
        description: 'Lưng gập vòm về phía trước, hai chân run rẩy chậm chạp, gối chùng, tay chống gậy trúc hoặc chắp sau thắt lưng thể hiện sức nặng vô hình của năm tháng tuổi tác.'
      },
      {
        title: 'Động Tác Vuốt Chòm Râu Bạc',
        description: 'Ba chòm râu bạc dài được vuốt nhẹ nhàng theo từng nhịp thở dài suy ngẫm; đầu khẽ rung khi xúc động nghẹn ngào.'
      },
      {
        title: 'Khẩu Khí Trầm Đục & Thở Dài Ngậm Ngùi',
        description: 'Giọng nói trầm ấm nhưng đượm buồn, lời ca trĩu nặng ưu tư chắt lọc từ cả một đời nếm trải cay đắng nhân gian.'
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Sa Lệch Lão',
        emotionalTone: 'U buồn, chậm rãi, day dứt khôn nguôi',
        context: 'Mãng Ông than thở về số kiếp hẩm hiu nghèo hèn khiến con gái phải chịu án oan khiên.'
      },
      {
        name: 'Làn điệu Lão Say Ngâm Gió',
        emotionalTone: 'Ngật ngưỡng, ngạo nghễ, phóng khoáng',
        context: 'Lão say làng Khuốc đối ẩm cùng trăng tàn, cười nhạo sự phù du của danh lợi hư ảo.'
      }
    ],
    iconicScenes: [
      {
        title: 'Mãng Ông Khóc Con',
        play: 'Quan Âm Thị Kính',
        description: 'Giọt nước mắt bất lực và vòng tay ấm áp của người cha nghèo trước sự nhục mạ tàn nhẫn của gia đình thông gia phú hào Sùng Bà.'
      },
      {
        title: 'Lão Say Đàm Đạo Dưới Trăng',
        play: 'Chèo Cổ Làng Khuốc',
        description: 'Màn độc thoại triết lý vô song về sự phù du của bạc tiền quyền thế và giá trị trường tồn của đạo đức nhân ái.'
      }
    ],
    philosophy: 'Nhân vật Lão nhắc nhở thế hệ mai sau về cội nguồn hiếu đễ, lòng biết ơn đấng sinh thành và triết lý sống an nhiên, coi trọng nhân cách hơn của cải trần thế.',
    badge: 'Bậc Trưởng Lão'
  },
  {
    id: 'mu',
    name: 'Mụ',
    fullName: 'Mụ — Tuyến Tính Cách Sắc Sảo & Xung Đột Kịch Tính',
    category: 'Hình Mẫu Tuyến Đối Kháng',
    image: '/images/char_mu.jpg',
    representative: 'Sùng Bà (Quan Âm Thị Kính) • Mụ Quán • Mụ Mối (Kim Nham)',
    tagline: 'Cội nguồn của giông bão xung đột sân khấu, bộc lộ sự tha hóa của quyền lực gia trưởng phong kiến và thói thực dụng lọc lõi đời thường.',
    famousQuote: 'Dâu là con, rể là khách! Mày là con nhà bần hàn, chuột sa chĩnh gạo mà còn toan giết con bà để cướp cơ nghiệp à? Đồ con ong bầu, cút xéo khỏi mắt tao ngay!',
    quoteContext: 'Sùng Bà đay nghiến giáng án oan giết chồng xua đuổi Thị Kính trong đêm mưa gió, tích Quan Âm Thị Kính',
    overview: [
      'Nếu không có tuyến nhân vật Mụ, sân khấu Chèo cổ sẽ thiếu đi lực đẩy xung đột then chốt tạo nên cao trào kịch tính. Mụ là hiện thân sắc nét của sự va đập xã hội gay gắt: từ quyền uy áp chế tàn nhẫn của địa chủ nhà giàu đối với người nghèo, đến thói khôn lỏi bươn chải của tầng lớp thị dân buôn bán.',
      'Thể hiện vai Mụ đòi hỏi tài năng diễn xuất thượng thừa của người nghệ sĩ: vừa phải lột tả được sự cay nghiệt đến rợn người của Sùng Bà để người xem căm phẫn, vừa phải giữ được nét đon đả lươn lẹo trào lộng của Mụ Quán để khán giả bật cười thích thú.'
    ],
    subtypes: [
      {
        typeName: 'Mụ Ác (Sùng Bà Điển Hình)',
        role: 'Sùng Bà (Quan Âm Thị Kính)',
        vocal: 'The thé, sắc nhọn như dao cứa, đanh thép giáng từng tiếng (Hát Nói Mụ Ác, Điệu Vỉa Hắt Hủi)',
        description: 'Mẫu người mẹ chồng cay độc bậc nhất trong kịch bản sân khấu Việt Nam. Cậy giàu sang khinh rẻ kẻ khó, độc đoán mù quáng, trực tiếp đẩy nàng dâu hiền vào bi kịch oan khiên ngập tràn nước mắt.'
      },
      {
        typeName: 'Mụ Quán (Thị Dân Lọc Lõi)',
        role: 'Mụ Quán Rượu (Quan Âm Thị Kính)',
        vocal: 'Đon đả, lắt léo, nhịp điệu nhanh nhảu mời chào tính toán',
        description: 'Chủ quán rượu ven đường thiên lý. Vừa đon đả chào khách vừa tính toán chặt chẽ từng đồng tiền bát gạo, mắt đảo như rang lạc nhưng giàu màu sắc trào lộng đời thường.'
      },
      {
        typeName: 'Mụ Mối / Mụ Giảo Hoạt',
        role: 'Mụ Mối (Kim Nham)',
        vocal: 'Ngọt ngào đường mật lừa phỉnh, biến hóa khôn lường',
        description: 'Chuyên nghề mối lái chắp nối tình tiền vụ lợi, đưa người nhẹ dạ cả tin vào cạm bẫy để trục lợi kiếm chác.'
      }
    ],
    conventions: [
      {
        title: 'Dáng Đi Xăm Xăm & Thế Đứng Chống Nạnh',
        description: 'Chân bước dồn dập, gót nện mạnh chan chát xuống chiếu; hai tay chống hông hoặc xỉa xói ngón trỏ vào mặt đối phương thị uy đè bẹp.'
      },
      {
        title: 'Cái Bĩu Môi & Cặp Mắt Quét Xếch Ngược',
        description: 'Khóe môi trề dài khinh miệt; ánh mắt sắc lẹm đảo quanh quét từ đầu đến chân đối thủ nhằm tìm chỗ sơ hở để đay nghiến chì chiết.'
      },
      {
        title: 'Khẩu Khí Đay Nghiến Giọng The Thé',
        description: 'Âm vực cao gắt gỏng, nói như tát nước vào mặt, nhả từng từ buốt giá khiến người đối thoại không thể mở lời thanh minh.'
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Hát Nói Mụ Ác',
        emotionalTone: 'Gay gắt, bức bối, dồn dập nghẹt thở',
        context: 'Sùng Bà nổi trận lôi đình khi thấy Thị Kính cầm dao tỉa râu cho Thiện Sĩ.'
      },
      {
        name: 'Làn điệu Mụ Quán Mời Rượu',
        emotionalTone: 'Lả lơi, rộn rã, ẩn chứa thói láu cá con buôn',
        context: 'Mụ Quán chèo kéo khách làng chơi dừng chân uống rượu và kể chuyện thế sự đường xa.'
      }
    ],
    iconicScenes: [
      {
        title: 'Sùng Bà Đuổi Thị Kính',
        play: 'Quan Âm Thị Kính',
        description: 'Đỉnh cao của sự bất công tàn bạo phong kiến, gây nên sự phẫn nộ tột độ cho khán giả trước nỗi oan khuất của nàng dâu hiền thục.'
      },
      {
        title: 'Mụ Quán Đòi Nợ Khách Say',
        play: 'Quan Âm Thị Kính',
        description: 'Màn hài kịch đời thường sống động phơi bày tính cách thực dụng và sự sắc sảo của tầng lớp tiểu thương buôn bán dọc đường thiên lý.'
      }
    ],
    philosophy: 'Nhân vật Mụ phơi bày bản chất tàn độc của chế độ gia trưởng phụ quyền và lối sống kim tiền thực dụng, là chiếc đòn bẩy làm bừng sáng lòng vị tha và phẩm giá cao đẹp của người lương thiện.',
    badge: 'Tuyến Đối Kháng'
  }
]

interface CharactersGalleryProps {
  currentPath?: string
  onNavigate?: (path: string) => void
}

export const CharactersGallery: React.FC<CharactersGalleryProps> = ({
  currentPath,
  onNavigate
}) => {
  const pathId = currentPath?.split('/').pop()
  const foundChar = CHARACTERS_DATA.find(c => c.id === pathId) || null
  const [selectedChar, setSelectedChar] = useState<CharacterArchetype | null>(foundChar)

  useEffect(() => {
    const pId = currentPath?.split('/').pop()
    const found = CHARACTERS_DATA.find(c => c.id === pId)
    setSelectedChar(found || null)
  }, [currentPath])

  const handleSelect = (char: CharacterArchetype) => {
    setSelectedChar(char)
    if (onNavigate) {
      onNavigate(`/kham-pha/san-khau/nhan-vat/${char.id}`)
    }
  }

  const handleBack = () => {
    setSelectedChar(null)
    if (onNavigate) {
      onNavigate('/kham-pha/san-khau/nhan-vat')
    }
  }

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget
    if (target.src.endsWith('.jpg')) {
      target.src = target.src.replace(/\.jpg$/, '.png')
    } else if (target.src.endsWith('.png')) {
      target.src = target.src.replace(/\.png$/, '.webp')
    }
  }

  // GIAO DIỆN CHI TIẾT 1 NHÂN VẬT — PHONG CÁCH CHUYÊN KHẢO BẢO TÀNG SỐ
  if (selectedChar) {
    return (
      <div className="text-left animate-in fade-in duration-300 space-y-12 sm:space-y-16">
        {/* Thanh điều hướng quay lại */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Quay lại năm vai mẫu sân khấu</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            {selectedChar.badge}
          </span>
        </div>

        {/* Giới thiệu nhân vật — Bố cục cân đối, gọn gàng, không chiếm trọn màn hình */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center border-b border-stone-800/60 pb-8">
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                {selectedChar.category}
              </span>
              <span className="text-stone-600">&bull;</span>
              <span className="text-xs font-mono text-stone-400">{selectedChar.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {selectedChar.fullName}
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-2xl leading-relaxed">
              {selectedChar.tagline}
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="aspect-[4/3] max-h-56 rounded-2xl overflow-hidden shadow-xl border border-stone-800/80 bg-stone-900">
              <img
                src={selectedChar.image}
                alt={selectedChar.fullName}
                onError={handleImageFallback}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </header>

        {/* Trích dẫn câu thoại kinh điển */}
        <section className="py-8 border-y border-stone-800/60 max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-amber-200/95 leading-relaxed">
            &ldquo;{selectedChar.famousQuote}&rdquo;
          </p>
          <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">
            — {selectedChar.quoteContext}
          </span>
        </section>

        {/* PHẦN 1: TỔNG QUAN NGHỆ THUẬT & VỊ THẾ DÂN GIAN */}
        <section className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            I. Hồn Cốt Dân Gian
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Vị Thế Của Vai Diễn Trong Tâm Thức Sân Đình
          </h2>
          <div className="space-y-4 text-stone-300 font-serif font-light text-base sm:text-lg leading-relaxed pt-2">
            {selectedChar.overview.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        {/* PHẦN 2: CÁC DẠNG THỨC PHÂN VAI ĐẶC TRƯNG */}
        <section className="space-y-6 pt-6 border-t border-stone-800/60">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
              II. Phân Hóa Mẫu Hình
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mt-1">
              Các Dạng Thức Phân Vai Kinh Điển
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2">
            {selectedChar.subtypes.map((sub, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex items-baseline justify-between border-b border-stone-800/50 pb-2">
                  <h3 className="text-xl font-serif font-bold text-amber-300">
                    {sub.typeName}
                  </h3>
                  <span className="text-xs font-mono text-stone-500">Mẫu hình {idx + 1}</span>
                </div>
                <p className="text-xs text-amber-200/90 font-serif italic">
                  Điển hình: {sub.role}
                </p>
                <p className="text-sm text-stone-300 font-serif font-light leading-relaxed">
                  {sub.description}
                </p>
                <div className="text-xs text-stone-400 font-light pt-1">
                  <span className="text-stone-500 font-mono uppercase text-[10px] block mb-0.5">Đặc trưng diễn xướng:</span>
                  {sub.vocal}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PHẦN 3: KHẨU QUYẾT VŨ ĐẠO & QUY CHUẨN ƯỚC LỆ */}
        <section className="space-y-6 pt-6 border-t border-stone-800/60">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
              III. Vũ Đạo & Thần Thái
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mt-1">
              Quy Chuẩn Ước Lệ Hình Thể
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
            {selectedChar.conventions.map((conv, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-xs font-mono text-amber-500/80 block">
                  0{idx + 1}. QUY ƯỚC
                </span>
                <h4 className="text-lg font-serif font-bold text-white">
                  {conv.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed">
                  {conv.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PHẦN 4: HỆ THỐNG LÀN ĐIỆU RUỘT & TRÍCH ĐOẠN KINH ĐIỂN */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-6 border-t border-stone-800/60">
          {/* Cột trái: Làn điệu ruột */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                IV. Âm Nhạc & Hát Xướng
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Làn Điệu Đặc Trưng
              </h3>
            </div>

            <div className="space-y-5">
              {selectedChar.signatureMelodies.map((m, idx) => (
                <div key={idx} className="space-y-1.5 pb-4 border-b border-stone-800/40 last:border-0">
                  <h4 className="text-base font-serif font-bold text-amber-300">
                    {m.name}
                  </h4>
                  <p className="text-xs text-stone-400 font-serif italic">
                    Sắc thái: {m.emotionalTone}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {m.context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải: Trích đoạn kinh điển */}
          <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-stone-800/60 lg:pl-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                V. Trích Đoạn Để Đời
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Màn Diễn Kinh Điển
              </h3>
            </div>

            <div className="space-y-5">
              {selectedChar.iconicScenes.map((scene, idx) => (
                <div key={idx} className="space-y-1.5 pb-4 border-b border-stone-800/40 last:border-0">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-base font-serif font-bold text-white">
                      {scene.title}
                    </h4>
                    <span className="text-xs font-mono text-amber-400/90">{scene.play}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {scene.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHẦN 5: TRIẾT LÝ NHÂN SINH & SỨC SỐNG ĐƯƠNG ĐẠI */}
        <section className="pt-8 border-t border-stone-800/60 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            VI. Triết Lý Nhân Sinh
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Giá Trị Tư Tưởng Để Lại Cho Đời Sau
          </h3>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed max-w-4xl">
            {selectedChar.philosophy}
          </p>
        </section>
      </div>
    )
  }

  // GIAO DIỆN DANH SÁCH 5 NHÂN VẬT — MỞ THOÁNG, KHÔNG DÁN BADGE
  return (
    <div className="space-y-8 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-stone-800/40">
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Năm Mẫu Hình Nhân Vật Sân Khấu
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Chọn một mẫu hình để khám phá vũ đạo, phong cách diễn xướng và câu thoại mẫu
          </p>
        </div>
        <span className="text-xs text-amber-500/80 font-mono">05 Vai Mẫu</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CHARACTERS_DATA.map((char, idx) => (
          <div
            key={char.id}
            onClick={() => handleSelect(char)}
            className="group cursor-pointer space-y-3"
          >
            {/* Ảnh Thực Tế */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-900 relative">
              <img
                src={char.image}
                alt={char.name}
                onError={handleImageFallback}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 text-3xl font-mono font-black text-white/20 select-none">
                0{idx + 1}
              </div>
            </div>

            {/* Thông tin nhân vật: Tên và vai mẫu tiêu biểu */}
            <div className="space-y-1">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                {char.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-serif font-light">
                {char.category} &bull; {char.representative}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
