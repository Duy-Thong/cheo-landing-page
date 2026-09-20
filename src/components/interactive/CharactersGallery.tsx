import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Sparkles, Volume2, Square, X, BookOpen } from 'lucide-react'
import { cheoAudio } from '../../utils/cheoAudioSynthesizer'

export const CHEO_ARCHIVE_PLACEHOLDER = '/images/cheo_dinh_lang.jpg'

export interface CharacterSubtype {
  id: string
  typeName: string
  role: string
  vocal: string
  description: string
  image?: string
  visualTrait: string // Nét nhận diện thần thái tức thì
  psychology: string // Chiều sâu tâm lý & thân phận
  costume: string // Đặc trưng tạo hình & Y phục
  actingStyle: string // Lối diễn & Vũ đạo thần thái
  iconicQuote?: {
    line: string
    context: string
  }
  audioMelody?: {
    name: string
    instrument: 'dan-nhi' | 'dan-nguyet' | 'sao-truc' | 'trong-de' | 'thanh-la-mo'
    instrumentName: string
    emotion: string
  }
}

export interface StageConvention {
  title: string
  description: string
  image: string
  isPlaceholder?: boolean
}

export interface SignatureMelody {
  name: string
  emotionalTone: string
  context: string
  instrument: 'dan-nhi' | 'dan-nguyet' | 'sao-truc' | 'trong-de' | 'thanh-la-mo'
  instrumentName: string
  narrativeText: string
  image?: string
}

export interface IconicScene {
  title: string
  play: string
  description: string
  image: string
  dialogue?: string
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
}

interface CharacterExtraMeta {
  subImage1: string
  subCaption1: string
  panoramicQuote: {
    text: string
    author: string
  }
  epilogue: {
    poem: string
    source: string
  }
}

const CHARACTER_EXTRA_META: Record<string, CharacterExtraMeta> = {
  he: {
    subImage1: '/images/costume_ao_ba_ba_he.jpg',
    subCaption1: 'Manh áo cộc vá chằng đụp và cây gậy tre — Dấu ấn mộc mạc của chú Hề sân đình.',
    panoramicQuote: {
      text: 'Hề Chèo là đặc quyền vô song của người bình dân dưới mái đình xưa: được cười nhạo sự giả dối của cường hào phong kiến, mang lại sự hả hê và niềm tin công lý cho dân nghèo.',
      author: 'NSND Mạnh Tuấn — Bậc thầy Hề Chèo Bắc Bộ'
    },
    epilogue: {
      poem: 'Trống chèo rung một tiếng vang\nCười cho tan hết oán than cõi trần.',
      source: 'Ca dao đồng bằng châu thổ sông Hồng'
    }
  },
  dao: {
    subImage1: '/images/costume_ao_tu_than.jpg',
    subCaption1: 'Áo tứ thân mớ ba mớ bảy và nón quai thao — Hồn quê Kinh Bắc đoan trang.',
    panoramicQuote: {
      text: 'Người nữ trong Chèo gánh cả giang sơn và nỗi đau thời thế trên đôi vai gầy, nhưng chưa bao giờ đánh mất tấm lòng nhân hậu và khát vọng tự do.',
      author: 'NSND Hoa Tâm — Cây đại thụ sân khấu Chèo cổ'
    },
    epilogue: {
      poem: 'Hỡi cô thắt dải lưng xanh\nCó nghe tiếng trống chèo quanh mái đình.',
      source: 'Hát ví dân gian Bắc Bộ'
    }
  },
  kep: {
    subImage1: '/images/costume_ao_ngu_than.jpg',
    subCaption1: 'Áo ngũ thân the đen và khăn xếp — Cốt cách phong nhã của bậc quân tử.',
    panoramicQuote: {
      text: 'Kép Chèo không chỉ là đấng trượng phu nho nhã, mà là hiện thân của đạo nghĩa thủy chung, lấy chữ Nhân và chữ Lễ làm gốc lập thân.',
      author: 'GS. NSND Trần Bảng'
    },
    epilogue: {
      poem: 'Trai tráng vì nghĩa quên mình\nGìn vàng giữ ngọc trọn tình tri âm.',
      source: 'Tích trò Lưu Bình Dương Lễ'
    }
  },
  lao: {
    subImage1: '/images/test_actor_tonkin.jpg',
    subCaption1: 'Cụ già làng Chèo cổ — Pho tư liệu sống lưu giữ ký ức Chèo Bắc Bộ.',
    panoramicQuote: {
      text: 'Lão Chèo say mà tỉnh, tỉnh mà say — mượn chén rượu cay để nói lời ngay thẳng giữa một xã hội đầy rẫy bất công và dối lừa.',
      author: 'Nghệ nhân Dân gian Làng Khuốc'
    },
    epilogue: {
      poem: 'Trời đất mênh mông một chữ tình\nĐục trong soi tỏ dưới sân đình.',
      source: 'Ca dao cổ truyền Bắc Bộ'
    }
  },
  mu: {
    subImage1: '/images/cheo_costume.jpg',
    subCaption1: 'Sắc phục nhung đen sắc sảo của tuyến nhân vật đối kháng phong kiến.',
    panoramicQuote: {
      text: 'Nhân vật Mụ là chiếc đòn bẩy nghệ thuật ghê gớm — sự tàn độc của định kiến phong kiến càng dữ dội bao nhiêu thì phẩm giá người phụ nữ càng ngời sáng bấy nhiêu.',
      author: 'PGS. TS Nguyễn Thị Minh Thái'
    },
    epilogue: {
      poem: 'Thiện ác đáo đầu chung hữu báo\nĐạo trời soi xét chẳng sai ngoa.',
      source: 'Triết lý nhân quả dân gian Việt Nam'
    }
  }
}

export const CHARACTERS_DATA: CharacterArchetype[] = [
  {
    id: 'dao',
    name: 'Đào',
    fullName: 'Đào — Mẫu Hình Người Nữ Trong Chiếu Chèo Sân Đình',
    category: 'Hình Mẫu Nữ Chuẩn Mực',
    image: '/images/char_dao.png',
    representative: 'Thị Kính • Thị Mầu • Xúy Vân • Châu Long',
    tagline: 'Từ đức hạnh nhẫn nhục của Thị Kính đến khát vọng giải phóng bản ngã của Thị Mầu và bi kịch giằng xé của Xúy Vân.',
    famousQuote: 'Thầy như táo rụng sân đình, em như gái dở đi rình của chua... Nước trong leo lẻo con cá đớp mồi, chẳng giấu gì tôi đây ra mắt làng nước!',
    quoteContext: 'Thị Mầu ghẹo chú Tiểu Thiện Sĩ trong trích đoạn Thị Mầu Lên Chùa, vở Quan Âm Thị Kính',
    overview: [
      'Trong nghệ thuật Chèo cổ, hình tượng người phụ nữ chiếm vị trí trung tâm thiêng liêng và đa tầng bậc nhất. Khác với nhiều loại hình kịch hát phương Đông vốn thường tôn vinh đấng quân vương hay võ tướng lừng lẫy, chiếu Chèo châu thổ sông Hồng lại dành trọn sự cảm thương sâu sắc và ngòi bút tinh tế nhất cho thân phận người phụ nữ Việt Nam.',
      'Người nữ trong Chèo vừa là hiện thân của đức hy sinh, lòng tiết hạnh kiên trinh trước định kiến phong kiến hà khắc, vừa là ngọn lửa bản năng cháy bỏng, khát khao phá bỏ xiềng xích lễ giáo để đòi quyền tự do yêu đương và khẳng định bản ngã.'
    ],
    subtypes: [
      {
        id: 'dao-thuong',
        typeName: 'Đào Thương',
        role: 'Thị Kính, Châu Long, Trinh Thục',
        vocal: 'Giọng hát nghẹn ngào, nỉ non, âm sắc trầm đượm nước mắt (Sử Rầu, Ru Kệ, Hát Cách)',
        description: 'Mẫu phụ nữ hiền thục, đoan trang, chịu thương chịu khó. Gặp nhiều oan trái bất công nhưng luôn lấy chữ Nhẫn và lòng trắc ẩn để hóa giải hận thù, giữ vẹn tấm lòng trong sạch.',
        image: '/images/char_dao_thuong.jpg',
        visualTrait: 'Áo tứ thân mộc mạc nền nã, nón quai thao thắt quai nhung, nét mặt u hoài nén giọt lệ sầu.',
        psychology: 'Hiện thân thiêng liêng cho đức hy sinh, lòng kiên trinh và sự cam chịu của người phụ nữ Việt Nam trước định kiến phong kiến hà khắc. Dù chịu oan khiên tột cùng, Thị Kính vẫn dùng chữ Nhẫn và từ bi để hóa giải thù hận, giữ vẹn tấm lòng trinh bạch.',
        costume: 'Áo tứ thân màu nâu trầm hoặc đen mộc, yếm trắng kín đáo, đầu vấn khăn đen, nón quai thao lớn buông sợi thao đen trang trọng.',
        actingStyle: 'Bước đi chữ đinh nhẹ nhàng không nghe tiếng động trên manh chiếu; ngón tay búp sen khép e ấp; ánh mắt cụp xuống giấu nỗi đau thầm kín.',
        iconicQuote: {
          line: 'Trời cao thấu tỏ lòng con, dù chết vẫn giữ tấm lòng trong sạch như gương!',
          context: 'Thị Kính chịu hàm oan bế con Thị Mầu trước cổng chùa'
        },
        audioMelody: {
          name: 'Làn điệu Sử Rầu',
          instrument: 'dan-nhi',
          instrumentName: 'Đàn Nhị',
          emotion: 'Nghẹn ngào, nỉ non, đẫm nước mắt'
        }
      },
      {
        id: 'dao-lang',
        typeName: 'Đào Lẳng',
        role: 'Thị Mầu, Đào Huế',
        vocal: 'Giọng hát tươi vui, nhịp phách rộn ràng, nẩy hạt lúng liếng (Cấm Giá, Đò Đưa, Hề Mồi)',
        description: 'Mẫu người phụ nữ đa tình, sắc sảo, dám sống thật với khát khao bản năng. Nụ cười đong đưa và ánh mắt lúng liếng phá tan không gian trang nghiêm của lễ giáo phong kiến.',
        image: '/images/char_dao_lang.jpg',
        visualTrait: 'Yếm thắm tươi rói, dải thắt lưng xanh buông lơi, ánh mắt lúng liếng đong đưa thách thức lề thói.',
        psychology: 'Khát vọng giải phóng bản năng mãnh liệt nhất trong văn học dân gian. Thị Mầu không cam chịu cuộc đời khuôn phép mà chủ động đi tìm hạnh phúc tình yêu, bất chấp búa rìu định kiến hà khắc của làng xã phong kiến.',
        costume: 'Áo tứ thân mớ ba mớ bảy mở vạt khoe yếm điều thêu hoa đào, dải yếm lụa hồng, dải thắt lưng xanh biếc bay bổng theo từng bước nhún nhảy.',
        actingStyle: 'Ánh mắt liếc có đuôi sắc sảo; chiếc quạt lụa biến hóa lúc che nửa miệng cười duyên, lúc phẩy nhẹ khêu gợi; bước chân sáo nhún nhảy rộn ràng.',
        iconicQuote: {
          line: 'Thầy như táo rụng sân đình, em như gái dở đi rình của chua!',
          context: 'Thị Mầu trêu ghẹo chú Tiểu Thiện Sĩ trong Thị Mầu Lên Chùa'
        },
        audioMelody: {
          name: 'Làn điệu Cấm Giá',
          instrument: 'dan-nguyet',
          instrumentName: 'Đàn Nguyệt',
          emotion: 'Lả lơi, rộn rã, nẩy hạt đong đưa'
        }
      },
      {
        id: 'dao-dien',
        typeName: 'Đào Điên / Đào Cuồng',
        role: 'Xúy Vân (Kim Nham)',
        vocal: 'Biến ảo khôn lường giữa tiếng cười sặc sụa và tiếng nấc u uất (Con Gà Rừng, Quá Giang, Xuôi Ngược Con Vịt)',
        description: 'Đỉnh cao bi kịch tâm lý sân khấu. Người phụ nữ vì bế tắc trước hôn nhân sắp đặt mà phải giả dại để tìm đường giải thoát, dẫn đến bi kịch giằng xé giữa điên loạn và nỗi đau tỉnh thức.',
        image: '/images/char_dao_dien.jpg',
        visualTrait: 'Mái tóc xõa buông lơi, dải yếm xộc xệch, đôi mắt khi ngơ ngác vô hồn khi bừng sáng ngọn lửa bi phẫn.',
        psychology: 'Bi kịch hiện sinh kinh điển của sân khấu truyền thống: không phải điên thật mà là sự cùng quẫn giả điên để tìm đường sống, nhưng lại rơi vào hố sâu phụ bạc của Trần Phương dẫn đến cái kết điên dại thật sự.',
        costume: 'Áo the tơ tả, dải thắt lưng buông lệch, mái tóc nửa búi nửa xõa phủ bờ vai, tay cầm chiếc quạt nan rách hoặc cành hoa dại vẩn vơ.',
        actingStyle: 'Đối lập tột cùng giữa điên và tỉnh: điệu múa dệt cửi quay cuồng, vừa cười ha hả sặc sụa đã lập tức nấc nghẹn ôm mặt khóc than; bước chân giật lùi đảo chiếu xuất thần.',
        iconicQuote: {
          line: 'Tôi là con gái nhà lành, lấy phải chồng nghèo nên phải giả dại qua ngày... Gió trăng ơi hỡi gió trăng!',
          context: 'Xúy Vân độc thoại giằng xé trong Xúy Vân Giả Dại'
        },
        audioMelody: {
          name: 'Làn điệu Con Gà Rừng',
          instrument: 'sao-truc',
          instrumentName: 'Sáo Trúc',
          emotion: 'Bất định, hỗn loạn, xót xa cay đắng'
        }
      },
      {
        id: 'dao-chien',
        typeName: 'Đào Chiến / Đào Võ',
        role: 'Trần Quốc Toản, Hai Bà Trưng, Triệu Trinh Nương',
        vocal: 'Khí sắc sang sảng, âm vang hào sảng (Hát Vỉa Võ, Hát Dặm)',
        description: 'Hình tượng nữ tướng quật cường xông pha trận mạc cứu nước, vũ đạo dứt khoát uy dũng nhưng vẫn giữ được nét thanh thoát của nữ nhi.',
        image: '/images/char_dao_chien.jpg',
        visualTrait: 'Khăn trùm đầu quấn chặt oai nghiêm, giáp bào gọn gàng, tay cầm kiếm sáng quắc mà khí chất vẫn đoan trang.',
        psychology: 'Khắc họa tinh thần quật cường chống ngoại xâm của phụ nữ Việt Nam, dung hòa giữa chí lớn non sông và vẻ đẹp đoan trang thanh cao.',
        costume: 'Áo giáp võ tướng gọn ghẽ thêu chỉ kim tuyến, dải đai lưng chiến bào màu đỏ thắm, bao cổ tay và hài da chắc chắn.',
        actingStyle: 'Vũ đạo dứt khoát rầm rộ theo nhịp trống lệnh; thế đứng tấn chữ Đinh dũng mãnh; động tác múa kiếm uyển chuyển mà sắc bén.',
        iconicQuote: {
          line: 'Đền nợ nước, trả thù nhà, quyết quét sạch quân xâm lăng khỏi cõi trời Nam!',
          context: 'Hai Bà Trưng tế cờ xuất quân bên dòng sông Hát'
        },
        audioMelody: {
          name: 'Hát Vỉa Võ dũng liệt',
          instrument: 'trong-de',
          instrumentName: 'Trống Đế',
          emotion: 'Hào sảng, sục sôi, dũng khí ngập tràn'
        }
      }
    ],
    conventions: [
      {
        title: 'Thế Đứng Chữ Đinh & Bước Chân Lướt Nhẹ',
        description: 'Chân trước thẳng, chân sau hơi chếch 45 độ, hai đầu gối chùng nhẹ nhàng tạo nên đường cong thon thả nâng đỡ tà áo tứ thân. Bước đi như lướt trên mặt chiếu, không nghe tiếng động.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Vũ Đạo Quạt Chèo Ước Lệ',
        description: 'Chiếc quạt nan lụa biến hóa thành ngôn ngữ biểu cảm: xòe quạt che nửa mặt e ấp thẹn thùng, gập quạt gõ lòng bàn tay toan tính băn khoăn, mở phắt vung cao rung nhẹ ở cao trào cảm xúc.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Ánh Mắt Có Đuôi & Ngón Tay Búp Sen',
        description: 'Mắt liếc có đuôi kín đáo mà duyên dáng; các ngón tay khép nhẹ, ngón trỏ và ngón cái uốn cong hình cánh sen e ấp vuốt nhẹ dải yếm lụa hồng đào.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Sử Rầu',
        emotionalTone: 'Ai oán, nghẹn ngào, nỉ non nuốt lệ',
        context: 'Diễn tả nỗi oan khuất khôn cùng của Thị Kính khi bị đuổi khỏi nhà chồng mà không thể thanh minh.',
        instrument: 'dan-nhi',
        instrumentName: 'Đàn Nhị',
        narrativeText: 'Tiếng đàn nhị nỉ non như từng đường cứa vào tâm can khi Thị Kính chịu hàm oan dứt áo xuất gia. Hát Sử Rầu là tiếng khóc nuốt ngược vào trong lồng ngực, từng nhịp nấc nghẹn làm lay động nỗi cảm thương sâu sắc trước thân phận người phụ nữ xưa.',
        image: '/images/char_dao.png'
      },
      {
        name: 'Làn điệu Cấm Giá',
        emotionalTone: 'Rộn rã, lả lơi, nhịp phách đảo liên hồi',
        context: 'Thị Mầu buông lời trêu ghẹo chú Tiểu Thiện Sĩ giữa chốn thiền môn thanh tịnh.',
        instrument: 'dan-nguyet',
        instrumentName: 'Đàn Nguyệt',
        narrativeText: 'Tiếng đàn nguyệt lách cách ròn tan cùng nhịp phách đảo liên hồi nâng đỡ bước chân Thị Mầu lên chùa. Điệu hát lúng liếng, tươi vui như một lời thách thức đầy kiêu hãnh của khát khao tự do trước sự mục ruỗng của lễ giáo phong kiến.',
        image: '/images/play_quan_am_thi_kinh.jpg'
      },
      {
        name: 'Làn điệu Con Gà Rừng',
        emotionalTone: 'Bất định, hỗn loạn, xót xa cay đắng',
        context: 'Xúy Vân độc thoại giằng xé giữa ước vọng tự do và vực thẳm cô đơn bế tắc của số phận.',
        instrument: 'sao-truc',
        instrumentName: 'Sáo Trúc',
        narrativeText: 'Đỉnh cao bi kịch nội tâm của Xúy Vân giữa tiếng sáo trúc chới với lúc bổng lúc trầm. Tiếng hát giằng xé giữa tiếng cười chua chát và tiếng nấc thảng thốt, cất lên khát vọng tự do của cánh chim bị giam cầm trong chiếc lồng đạo đức giả.',
        image: '/images/play_kim_nham.jpg'
      }
    ],
    iconicScenes: [
      {
        title: 'Thị Mầu Lên Chùa',
        play: 'Quan Âm Thị Kính',
        description: 'Màn đối chất nghệ thuật kinh điển giữa sắc dục trần thế căng tràn nhựa sống và sự tĩnh lặng vô vi chốn Phật đường.',
        image: '/images/play_quan_am_thi_kinh.jpg',
        dialogue: 'Thầy như táo rụng sân đình, em như gái dở đi rình của chua...'
      },
      {
        title: 'Xúy Vân Giả Dại',
        play: 'Kim Nham',
        description: 'Kiệt tác độc diễn nội tâm và vũ đạo múa quạt xuất thần bậc nhất của nền sân khấu kịch hát dân tộc Việt Nam.',
        image: '/images/play_kim_nham.jpg',
        dialogue: 'Gà rừng ăn lẫn với công, đắng cay chẳng muốn lại mong ngọt ngào...'
      }
    ],
    philosophy: 'Người nữ trong Chèo là tiếng nói bênh vực nhân phẩm, tôn vinh khát vọng tình yêu tự do và niềm cảm thương vô hạn của người nông dân Bắc Bộ dành cho thân phận người phụ nữ chịu nhiều thiệt thòi trong xã hội cũ.'
  },
  {
    id: 'kep',
    name: 'Kép',
    fullName: 'Kép — Mẫu Hình Đấng Nam Nhi Quân Tử',
    category: 'Hình Mẫu Nam Chuẩn Mực',
    image: '/images/char_kep.png',
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
        id: 'kep-van',
        typeName: 'Kép Văn (Thư Sinh Chuẩn Mực)',
        role: 'Lưu Bình, Thiện Sĩ, Trương Viên',
        vocal: 'Đĩnh đạc, ấm áp, âm vang thanh thoát (Hát Quân Tử, Hát Sa Lệch Kép)',
        description: 'Hình ảnh nho sĩ áo dài khăn xếp, đêm ngày miệt mài bên án thư đèn sách, một lòng giữ trọn đạo hiếu với mẹ cha và tình nghĩa son sắt với tri kỷ.',
        image: '/images/char_kep.png',
        visualTrait: 'Áo the ngũ thân đen mộc, khăn xếp tề chỉnh, phong thái ung dung nho nhã thanh bạch.',
        psychology: 'Hiện thân mẫu mực của kẻ sĩ Bắc Hà: xem trọng đạo hiếu và nghĩa tình tri kỷ cao hơn tính mạng bản thân; nhẫn nại vượt qua thử thách để thành tài giúp ích cho đời.',
        costume: 'Áo dài ngũ thân the thâm, quần trắng ống rộng, đầu đội khăn xếp ngay ngắn, tay cầm quạt ngà hoặc cuốn thư.',
        actingStyle: 'Tướng đi chữ Bát khoan thai đĩnh đạc; cử chỉ tay áo the vung nhẹ khi ngâm vịnh; ánh mắt nhìn thẳng sáng ngời chí lớn.',
        iconicQuote: {
          line: 'Chí làm trai dặm nghìn tang bồng, nguyện đem đèn sách đền nợ nước ơn vua!',
          context: 'Lưu Bình giã bạn lên đường ứng thí trong Lưu Bình Dương Lễ'
        },
        audioMelody: {
          name: 'Làn điệu Quân Tử Khát',
          instrument: 'dan-nguyet',
          instrumentName: 'Đàn Nguyệt',
          emotion: 'Đĩnh đạc, cao quý, chí khí quang minh'
        }
      },
      {
        id: 'kep-vo',
        typeName: 'Kép Võ / Kép Chiến',
        role: 'Võ quan, tướng lĩnh sa trường',
        vocal: 'Hùng tráng, dứt khoát, âm vực rộng mở (Hát Vỉa Võ, Hát Bóp)',
        description: 'Tướng lĩnh tài ba xông pha trận mạc bảo vệ biên cương bờ cõi, động tác dứt khoát mạnh mẽ, vũ đạo sử dụng thương kiếm điêu luyện.',
        image: '/images/test_actor_tonkin.jpg',
        visualTrait: 'Giáp bào đính phù hiệu, bước chân dũng mãnh, thế kiếm tung hoành rợp bóng cờ lau.',
        psychology: 'Đấng trượng phu xả thân vì xã tắc, không màng hiểm nguy nơi sa trường gió bụi, đặt an nguy của nhân dân lên trên quyền lợi cá nhân.',
        costume: 'Áo giáp chiến đính vảy rồng, mũ kim khôi, đai lưng ngọc, tay cầm trường thương hoặc trường kiếm.',
        actingStyle: 'Vũ đạo thương đao dứt khoát theo tiếng thanh la và nhịp trống trận; khẩu khí sang sảng lẫm liệt.',
        iconicQuote: {
          line: 'Dẫu da ngựa bọc thây nơi chiến địa, quyết không lùi một bước trước quân thù!',
          context: 'Võ tướng đốc thúc binh sĩ giữ yên ải địa'
        },
        audioMelody: {
          name: 'Hát Vỉa Chiến hào sảng',
          instrument: 'trong-de',
          instrumentName: 'Trống Đế',
          emotion: 'Hùng tráng, dồn dập, khí thế ngút trời'
        }
      },
      {
        id: 'kep-ac',
        typeName: 'Kép Phản Diện / Kép Nền',
        role: 'Tuần Ty, Trịnh Ân',
        vocal: 'Kẻ cả, ngạo mạn, trơn tuột giả dối',
        description: 'Tầng lớp quan lại tham ô hám sắc hoặc kẻ bạc tình vong ân bội nghĩa, làm nổi bật đức tính kiên trinh của các nhân vật chính diện.',
        image: '/images/test_quan_am.jpg',
        visualTrait: 'Áo gấm lòe loẹt, ria mép chuốt cong, nụ cười nham hiểm và dáng đi khệnh khạng.',
        psychology: 'Đại diện cho mặt trái tha hóa của giai cấp thống trị phong kiến: hám sắc, tham vàng bỏ ngãi; là đòn bẩy kịch tính làm sáng ngời nhân phẩm người lương thiện.',
        costume: 'Áo lụa gấm màu sắc rực rỡ phô trương, túi gấm thêu đeo trễ, quạt lông phe phẩy tự đắc.',
        actingStyle: 'Cái cười khẩy xấc xược, giọng điệu trơn tru ngọt nhạt nhưng ác hiểm, bước chân huênh hoang kẻ cả.',
        iconicQuote: {
          line: 'Có tiền mua tiên cũng được, huống chi một ả thuyền quyên nghèo hèn!',
          context: 'Tuần Ty buông lời trêu ghẹo sàm sỡ chốn đình quán'
        },
        audioMelody: {
          name: 'Làn điệu Hát Nói Quan Ty',
          instrument: 'thanh-la-mo',
          instrumentName: 'Thanh La & Mõ',
          emotion: 'Kẻ cả, ngạo mạn, mỉa mai'
        }
      }
    ],
    conventions: [
      {
        title: 'Tướng Đi Chữ Bát Khoan Thai',
        description: 'Hai bàn chân mở hình chữ Bát, bước đi khoan thai đĩnh đạc, hai tay chắp sau lưng hoặc một tay nâng vạt áo the thể hiện phong thái thanh tao của đấng nam nhi có học.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Thế Tay Vung Áo & Trỏ Ngón Chỉ Trăng',
        description: 'Tay áo the vung nhẹ dứt khoát khi cất tiếng ngâm thơ; ngón tay trỏ hướng thẳng lên cao gợi mở chí lớn bao trùm trời đất.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Khẩu Khí Trầm Ấm Dõng Dạc',
        description: 'Phát âm tròn vành rõ chữ, nhịp điệu từ tốn ung dung, không hấp tấp vội vàng, thể hiện nội lực tu dưỡng và sự tự chủ sâu sắc.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Quân Tử Khát',
        emotionalTone: 'Đĩnh đạc, cao quý, chí khí hào hùng',
        context: 'Lưu Bình giãi bày ước vọng công danh và quyết tâm vượt qua gian nan đèn sách.',
        instrument: 'dan-nguyet',
        instrumentName: 'Đàn Nguyệt',
        narrativeText: 'Âm sắc đàn nguyệt khoan thai đĩnh đạc cất lên như bóng tùng bách giữa phong ba. Điệu hát là tiếng lòng của bậc trượng phu nuôi chí lớn lập thân đền nợ nước, trọn đời gìn giữ chữ Nhân và chữ Nghĩa.',
        image: '/images/char_kep.png'
      },
      {
        name: 'Làn điệu Tình Thư Nhị Độ',
        emotionalTone: 'Trữ tình, tha thiết, thắm đượm nghĩa tình',
        context: 'Lời giã bạn ngậm ngùi nhưng trọn vẹn niềm tin son sắt vào ngày tương phùng vinh quy.',
        instrument: 'dan-nhi',
        instrumentName: 'Đàn Nhị',
        narrativeText: 'Tiếng nhị vuốt nhẹ tha thiết trong giờ phút giã bạn lên đường lai kinh ứng thí. Khúc hát bùi ngùi lưu luyến nhưng trọn vẹn niềm tin son sắt, dặn lòng vượt qua ngàn dặm quan san đợi ngày tương phùng vinh quy.',
        image: '/images/play_luu_binh_duong_le.jpg'
      },
      {
        name: 'Hát Vỉa Võ Sa Trường',
        emotionalTone: 'Hùng tráng, dồn dập, dũng khí ngút trời',
        context: 'Võ tướng đốc thúc binh sĩ xông pha trận mạc bảo vệ biên cương bờ cõi.',
        instrument: 'trong-de',
        instrumentName: 'Trống Đế',
        narrativeText: 'Từng tiếng trống đế đanh thép giục giã mô phỏng bước chân hành quân thần tốc của võ tướng xông pha trận mạc, biến manh chiếu chèo thành chiến trường oai hùng xả thân vì non sông bờ cõi.',
        image: CHEO_ARCHIVE_PLACEHOLDER
      }
    ],
    iconicScenes: [
      {
        title: 'Lưu Bình Gặp Nàng Châu Long',
        play: 'Lưu Bình Dương Lễ',
        description: 'Khúc ca ca ngợi đức hy sinh vô bờ bến và sự tương kính như tân giữa đấng quân tử và người thục nữ Kinh Bắc.',
        image: '/images/play_luu_binh_duong_le.jpg',
        dialogue: 'Chí làm trai dặm nghìn tang bồng bảng lảng, quyết dốc lòng vàng đền nợ nước ơn vua!'
      },
      {
        title: 'Thiện Sĩ Nghi Oan Thị Kính',
        play: 'Quan Âm Thị Kính',
        description: 'Bước ngoặt bi kịch của sự hồ đồ định kiến, để lại bài học đau xót muôn đời về sự tỉnh táo và lòng thấu hiểu trong hôn nhân.',
        image: '/images/play_quan_am_thi_kinh.jpg',
        dialogue: 'Nửa đêm cầm dao kề cổ, dạ này ai thấu cho chăng!'
      }
    ],
    philosophy: 'Nhân vật Kép gửi gắm ước mơ của người dân về người trí thức có tâm có đức, sống trọn tình trọn nghĩa, là chỗ dựa vững chãi cho gia đình và xã tắc.'
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
        id: 'he-gay',
        typeName: 'Hề Gậy (Cu Sứt, Hề Theo Thầy)',
        role: 'Cu Sứt, Hề theo quan huyện',
        vocal: 'Lối hát nói tưng tửng, dồn dập, gắt nhịp bất ngờ (Hề Gậy Nhảy Chân Sáo)',
        description: 'Người hầu đi theo thầy cai hoặc quan chức. Bề ngoài giả bộ ngô nghê ngớ ngẩn nhưng bên trong cực kỳ láu lỉnh, chuyên dùng phép chơi chữ dân gian để xỏ xiên và bóc trần thói hợm hĩnh của chủ.',
        image: '/images/char_he.jpg',
        visualTrait: 'Cây gậy tre cầm tay, manh áo chắp vá, nụ cười ngây ngô giả vờ nhưng xỏ xiên sâu cay.',
        psychology: 'Kẻ cùng đinh nghèo khó dùng sự tinh quái và nghệ thuật chơi chữ để chế giễu quan tham, thầy cai bóc lột; vũ khí phản kháng sắc bén của tầng lớp bị áp bức dưới mái đình xưa.',
        costume: 'Áo cánh nâu vá chằng đụp nhiều mẩu vải, quần xắn ống cao ống thấp, tay lăm lăm cây gậy tre biến hóa.',
        actingStyle: 'Dáng đi ziczac uốn lượn, chân nhảy sáo gập ghềnh theo nhịp trống đế; ngồi thụp rồi xoay phắt 180 độ; gậy tre lúc làm ngựa phi, lúc làm đòn gánh.',
        iconicQuote: {
          line: 'Thầy ăn hết nạc thì để con gặm xương, đời thuở nhà ai măng cụt lại bảo là tre già bao giờ!',
          context: 'Cu Sứt xỏ xiên Thầy Cai bóc lột trong trích đoạn Cu Sứt Xỏ Thầy'
        },
        audioMelody: {
          name: 'Nhịp Hề Gậy gõ mõ',
          instrument: 'trong-de',
          instrumentName: 'Trống Đế',
          emotion: 'Tưng tửng, dồn dập, gắt nhịp bất ngờ'
        }
      },
      {
        id: 'he-moi',
        typeName: 'Hề Mồi (Hề Đơm Rơm)',
        role: 'Hề Mồi Làng Khuốc, Hề Bói Quẻ',
        vocal: 'Nhí nhảnh, đảo phách rộn rã, tiếng cười bật ra tự nhiên (Làn điệu Hề Mồi, Hề Đơm Rơm)',
        description: 'Tay cầm đóm rơm bùi nhùi le lói, miệng liến thoắng rổn rảng. Chuyên châm chọc thói mê tín dị đoan, thầy bói rởm và phường trọc phú bần tiện nơi thôn dã.',
        image: '/images/cheo_dinh_lang.jpg',
        visualTrait: 'Tay cầm đóm rơm le lói sáng, quạt nan rách phành phạch, bước chân sáo đảo phách rộn ràng.',
        psychology: 'Linh hồn hội hè của nông thôn đồng bằng Bắc Bộ: đem tiếng cười sảng khoái xua tan nhọc nhằn đồng áng, vạch trần trò bịp bợm bói toán ma mãnh.',
        costume: 'Áo tứ thân nam may ngắn buộc vạt, mặt vẽ phấn trắng quanh khóe mắt miệng, đóm rơm bện bùi nhùi le lói khói hương.',
        actingStyle: 'Múa đóm rơm lượn vòng rực rỡ; mắt đảo liên hồi; ứng khẩu đối đáp tức thì với người xem quanh manh chiếu.',
        iconicQuote: {
          line: 'Đóm rơm le lói sáng rực sân đình, cười một trận cho sáng mắt trần gian!',
          context: 'Hề Mồi múa đóm mở hội làng'
        },
        audioMelody: {
          name: 'Làn điệu Hề Mồi rộn rã',
          instrument: 'dan-nguyet',
          instrumentName: 'Đàn Nguyệt',
          emotion: 'Nhí nhảnh, đảo phách rộn ràng'
        }
      },
      {
        id: 'he-ao-ngan',
        typeName: 'Hề Áo Ngắn (Hề Bần Nông)',
        role: 'Kẻ tôi tớ, người ở cùng khổ',
        vocal: 'Mộc mạc, đậm chất ca dao dân ca đồng ruộng',
        description: 'Mặc manh áo cộc rách vá chằng đụp, quần xắn cao khập khiễng. Đại diện cho tiếng nói bất khuất và niềm tin yêu cuộc đời của giai cấp nông dân cùng đinh.',
        image: '/images/costume_ao_ba_ba_he.jpg',
        visualTrait: 'Manh áo cộc rách nát sờn vai, chân đất mộc mạc, tiếng cười hào sảng lạc quan yêu đời.',
        psychology: 'Biểu tượng cho sức sống kiên cường và lòng yêu đời bất diệt của người cày đồng châu thổ sông Hồng; nghèo tiền bạc nhưng giàu nhân nghĩa và trí thông minh.',
        costume: 'Áo cánh cộc màu nâu đất rách sờn, thắt lưng thừng gai, chân đất, nón mê rách vành.',
        actingStyle: 'Động tác lao động ước lệ tài tình (cày ruộng, tát nước, đuổi muỗi); miệng cười tươi rói ngửa mặt nhìn trời.',
        iconicQuote: {
          line: 'Một ngày cày ruộng mười ngày lo, mà bụng vẫn vui hơn lũ quan to ăn cướp!',
          context: 'Hề áo ngắn cày ruộng đối đáp cùng phú ông'
        },
        audioMelody: {
          name: 'Hề Ca đồng quê',
          instrument: 'sao-truc',
          instrumentName: 'Sáo Trúc',
          emotion: 'Mộc mạc, trong trẻo, hồn nhiên'
        }
      }
    ],
    conventions: [
      {
        title: 'Bước Chân Sáo & Dáng Đi Ziczac',
        description: 'Chân nhảy nhót nhún nhảy theo nhịp trống đế, đầu lắc lư ngộ nghĩnh, lưng uốn lượn biến hóa tức thì, có thể ngồi thụp hay xoay phắt 180 độ chỉ trong chớp mắt.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Cây Gậy Tre Biến Hóa & Quạt Rách',
        description: 'Gậy tre khi biến thành ngựa thần phi nước đại, lúc hóa thành đòn gánh hay thước đo lòng dạ quan trên; quạt nan rách dùng để che miệng khi thì thầm nói xấu chủ.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Nghệ Thuật Ứng Khẩu Cùng Khán Giả',
        description: 'Không bị câu thúc cứng nhắc vào kịch bản, Hề tự do ứng biến theo không khí hội làng, biến người xem thành nhân vật đồng sáng tạo tiếng cười.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Hề Mồi',
        emotionalTone: 'Tươi vui rộn rã, phách đảo giòn tan',
        context: 'Hề ra mắt dân làng, làm nóng không gian chiếu chèo bằng những câu đố mẹo hóm hỉnh.',
        instrument: 'dan-nguyet',
        instrumentName: 'Đàn Nguyệt & Thanh La',
        narrativeText: 'Đóm rơm le lói sáng rực sân đình hòa cùng tiếng đàn nguyệt và thanh la rộn rã. Điệu hát nhí nhảnh xua tan nhọc nhằn đồng áng, lấy tiếng cười sảng khoái để giễu cợt thói trọc phú bần tiện nơi thôn dã.',
        image: '/images/char_he.jpg'
      },
      {
        name: 'Làn điệu Hề Gậy',
        emotionalTone: 'Tưng tửng, châm biếm sâu cay, nhịp dồn dập',
        context: 'Màn đối đáp lột trần thói dốt nát và tham lam vô đáy của quan huyện thầy đồ.',
        instrument: 'trong-de',
        instrumentName: 'Trống Đế',
        narrativeText: 'Nhịp trống đế gắt từng hồi theo bước chân sáo tưng tửng của Cu Sứt. Điệu hát chơi chữ láu lỉnh như đòn roi châm biếm sâu cay giáng thẳng vào thói tham nhũng, dốt nát của quan thầy phong kiến.',
        image: CHEO_ARCHIVE_PLACEHOLDER
      },
      {
        name: 'Hề Ca Đồng Quê',
        emotionalTone: 'Mộc mạc, trong trẻo, hồn nhiên',
        context: 'Người bần nông cất tiếng hát lạc quan trên cánh đồng lúa nước.',
        instrument: 'sao-truc',
        instrumentName: 'Sáo Trúc',
        narrativeText: 'Tiếng sáo trúc trong trẻo nâng đỡ câu hát mộc mạc của người bần nông áo nâu cộc. Dù chịu cơ hàn áp bức, tiếng hát vẫn hồn nhiên lạc quan, giữ trọn sự trong sạch của lương tâm giữa cõi đời đục.',
        image: CHEO_ARCHIVE_PLACEHOLDER
      }
    ],
    iconicScenes: [
      {
        title: 'Cu Sứt Xỏ Thầy Cai',
        play: 'Kim Nham',
        description: 'Màn đối đáp thượng thừa biến quan thầy phong kiến uy nghiêm thành trò cười chế giễu của toàn bộ dân làng quanh sân đình.',
        image: '/images/play_kim_nham.jpg',
        dialogue: 'Thầy ăn hết nạc thì để con gặm xương, đời thuở nhà ai măng cụt lại bảo tre già!'
      },
      {
        title: 'Hề Mồi Bói Quẻ Giễu Đời',
        play: 'Tích Chèo Cổ Bắc Bộ',
        description: 'Cơn bão tiếng cười đả kích kịch liệt tệ mê tín dị đoan và thói đạo đức giả của phường buôn thần bán thánh.',
        image: '/images/cheo_dinh_lang.jpg',
        dialogue: 'Số cô có mẹ có cha, mẹ cô đàn bà cha cô đàn ông...'
      }
    ],
    philosophy: 'Tiếng cười Hề Chèo là vũ khí tự vệ văn hóa của người bình dân, lấy sự hóm hỉnh để giải tỏa u uất, giữ vững tinh thần lạc quan yêu đời vượt lên gian khó cơ hàn.'
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
        id: 'lao-truong',
        typeName: 'Lão Trượng (Mãng Ông, Lão Tiều)',
        role: 'Mãng Ông, Trương Mẫu',
        vocal: 'Trầm buồn, đứt đoạn, run rẩy xót xa (Sa Lệch Lão, Trần Tình)',
        description: 'Người cha già hiền lương chất phác, đại diện cho gia đình bần hàn nhưng thanh bạch. Tình yêu con vô bờ bến thể hiện qua những giọt nước mắt nghẹn ngào trước cường quyền oan nghiệt.',
        image: '/images/char_lao.jpg',
        visualTrait: 'Râu tóc bạc phơ, lưng còng chống gậy trúc, đôi mắt từ bi thấm đẫm đức hy sinh.',
        psychology: 'Cội nguồn của đạo hiếu và gia phong Kinh Bắc; người cha nghèo gánh chịu bất công xã hội để chở che cho giọt máu đoan trang của mình.',
        costume: 'Áo the dài màu nâu mộc mạc hoặc vải thô tối màu, râu cước trắng muốt, tay chống gậy trúc uốn cong.',
        actingStyle: 'Bước đi run rẩy chậm rãi của tuổi già; tiếng thở dài ngậm ngùi buông xuống từng nhịp gõ; bàn tay run rẩy gạt nước mắt.',
        iconicQuote: {
          line: 'Con ơi! Oan khổ thấu tận trời xanh, bia miệng ngàn năm còn nhớ người trong sạch!',
          context: 'Mãng Ông khóc tiễn Thị Kính trong Quan Âm Thị Kính'
        },
        audioMelody: {
          name: 'Làn điệu Sa Lệch Lão',
          instrument: 'dan-nhi',
          instrumentName: 'Đàn Nhị',
          emotion: 'U buồn, chậm rãi, day dứt khôn nguôi'
        }
      },
      {
        id: 'lao-say',
        typeName: 'Lão Say Làng Khuốc (Trí Giả Ẩn Dật)',
        role: 'Lão say làng Khuốc (Thái Bình)',
        vocal: 'Phóng khoáng, tự do, nhịp ngắt bất thường (Lão Say Ngâm Gió)',
        description: 'Điển hình kiệt xuất của nghệ thuật Chèo dân gian. Say rượu mà tâm cực tỉnh, thân xiêu ngả mà mắt thấu tỏ tim đen kẻ ác, mượn men cay để cười cợt thế sự đảo điên.',
        image: '/images/test_trum_thinh.jpg',
        visualTrait: 'Tay ôm quả bầu rượu khô, bước đi ngật ngưỡng nghiêng ngả, mắt cười ngạo nghễ nhân gian.',
        psychology: 'Mượn chén men cay để nói lời tỉnh táo nhất giữa xã hội đen bạc; tiếng cười khinh bạc danh lợi phù hoa của bậc ẩn giả dân gian.',
        costume: 'Áo the cũ buông lơi vạt áo, tóc rối phong trần, quả bầu rượu gốm hoặc bầu khô đeo lủng lẳng bên sườn.',
        actingStyle: 'Nghệ thuật diễn say xuất thần: người nghiêng ngả như chực ngã nhưng bàn chân bám manh chiếu vững vàng; vừa ngửa mặt đối ẩm vừa ngâm thơ xuất thần.',
        iconicQuote: {
          line: 'Say cho đất nghiêng trời ngả, say để thấy rõ lòng người tráo trở đen bạc!',
          context: 'Lão say độc thoại giễu đời dưới đêm trăng tàn'
        },
        audioMelody: {
          name: 'Làn điệu Lão Say Ngâm Gió',
          instrument: 'sao-truc',
          instrumentName: 'Sáo Trúc',
          emotion: 'Ngật ngưỡng, ngạo nghễ, phóng khoáng'
        }
      }
    ],
    conventions: [
      {
        title: 'Dáng Còng Chữ C & Bước Đi Ngập Ngừng',
        description: 'Lưng gập vòm về phía trước, hai chân run rẩy chậm chạp, gối chùng, tay chống gậy trúc hoặc chắp sau thắt lưng thể hiện sức nặng vô hình của năm tháng tuổi tác.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Động Tác Vuốt Chòm Râu Bạc',
        description: 'Ba chòm râu bạc dài được vuốt nhẹ nhàng theo từng nhịp thở dài suy ngẫm; đầu khẽ rung khi xúc động nghẹn ngào.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Khẩu Khí Trầm Đục & Thở Dài Ngậm Ngùi',
        description: 'Giọng nói trầm ấm nhưng đượm buồn, lời ca trĩu nặng ưu tư chắt lọc từ cả một đời nếm trải cay đắng nhân gian.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Sa Lệch Lão',
        emotionalTone: 'U buồn, chậm rãi, day dứt khôn nguôi',
        context: 'Mãng Ông than thở về số kiếp hẩm hiu nghèo hèn khiến con gái phải chịu án oan khiên.',
        instrument: 'dan-nhi',
        instrumentName: 'Đàn Nhị',
        narrativeText: 'Tiếng đàn nhị trầm đục vuốt chậm như giọt nước mắt lăn trên gò má nhăn nheo của Mãng Ông. Trước cường quyền tàn nhẫn, người cha nghèo chỉ biết ôm con mà khóc, nuốt trọn nỗi oan khiên vào lòng đất mẹ bao dung.',
        image: '/images/char_lao.jpg'
      },
      {
        name: 'Làn điệu Lão Say Ngâm Gió',
        emotionalTone: 'Ngật ngưỡng, ngạo nghễ, phóng khoáng',
        context: 'Lão say làng Khuốc đối ẩm cùng trăng tàn, cười nhạo sự phù du của danh lợi hư ảo.',
        instrument: 'sao-truc',
        instrumentName: 'Sáo Trúc',
        narrativeText: 'Dưới bóng trăng tàn đình làng, tiếng sáo trúc ngạo nghễ ngắt quãng theo bước chân ngật ngưỡng. Lão say mượn men rượu để cười cợt thế sự đen bạc, say để giữ cho tâm hồn được tự do thanh sạch giữa dòng đời đảo điên.',
        image: '/images/test_trum_thinh.jpg'
      }
    ],
    iconicScenes: [
      {
        title: 'Mãng Ông Khóc Con',
        play: 'Quan Âm Thị Kính',
        description: 'Giọt nước mắt bất lực và vòng tay ấm áp của người cha nghèo trước sự nhục mạ tàn nhẫn của gia đình thông gia phú hào Sùng Bà.',
        image: '/images/play_quan_am_thi_kinh.jpg',
        dialogue: 'Con ơi! Oan khổ thấu tận trời xanh, bia miệng ngàn năm còn nhớ người trong sạch!'
      },
      {
        title: 'Lão Say Làng Khuốc Giễu Đời',
        play: 'Trích đoạn Chèo Cổ Thái Bình',
        description: 'Màn trình diễn đỉnh cao mượn hơi men vạch trần thói đời đen bạc bằng những câu thơ ngâm phóng khoáng giữa đêm trăng.',
        image: '/images/test_trum_thinh.jpg',
        dialogue: 'Say cho đất nghiêng trời ngả, say để thấy rõ lòng người tráo trở!'
      }
    ],
    philosophy: 'Nhân vật Lão neo giữ sân khấu Chèo với cội nguồn đạo hiếu gia đình, là lời nhắc nhở người xem về lòng biết ơn thế hệ đi trước và triết lý sống an nhiên, thanh sạch giữa nhân thế hỗn tạp.'
  },
  {
    id: 'mu',
    name: 'Mụ',
    fullName: 'Mụ — Tuyến Tính Cách Đối Kháng & Xung Đột Xã Hội',
    category: 'Hình Mẫu Tuyến Phản Diện',
    image: '/images/char_mu.jpg',
    representative: 'Sùng Bà • Mụ Quán • Mụ Cám',
    tagline: 'Tuyến tính cách đối kháng sắc sảo tạo nên cao trào kịch tính, lột trần sự nghiệt ngã và định kiến hà khắc của lễ giáo cũ.',
    famousQuote: 'Nhà tao nề nếp gia phong, con chim phượng hoàng đậu trên cành quế chứ loài quạ đen tầm thường đâu dám bén mảng! Giết chồng thì đền mạng, chối cãi đường nào hả con kia!',
    quoteContext: 'Sùng Bà kết tội oan Thị Kính giết chồng trong trích đoạn Đuổi Thị Kính, vở Quan Âm Thị Kính',
    overview: [
      'Nếu chiếu Chèo chỉ toàn những người lương thiện cam chịu thì sân khấu sẽ thiếu đi kịch tính xung đột gay gắt. Nhân vật Mụ xuất hiện như một sức mạnh đối kháng dữ dội, đại diện cho mặt trái đen tối của xã hội phong kiến: thói gia trưởng tàn nhẫn, sự cay nghiệt định kiến và thói thực dụng kim tiền.',
      'Dưới ngòi bút tài tình của các tác giả dân gian, vai Mụ không chỉ đơn thuần là sự độc ác vô cớ mà còn mang tính điển hình sâu sắc, là chiếc đòn bẩy kịch bản đẩy số phận các nhân vật chính diện đến tận cùng thử thách để từ đó tỏa sáng phẩm giá cao thượng.'
    ],
    subtypes: [
      {
        id: 'mu-ac',
        typeName: 'Mụ Ác (Sùng Bà)',
        role: 'Sùng Bà, Dì ghẻ',
        vocal: 'The thé, the thé chói tai, nhả chữ đanh thép cay độc (Hát Nói Mụ Ác, Tát Nước)',
        description: 'Bà mẹ chồng giàu có hà khắc, cậy quyền cậy thế khinh rẻ người nghèo. Lời nói như dao cứa, cử chỉ nghiệt ngã bức hại con dâu đến bước đường cùng.',
        image: '/images/char_mu.jpg',
        visualTrait: 'Áo gấm nâu bóng, tay chống nạnh cằm hếch cao, ánh mắt sắc lẹm trừng trừng đay nghiến.',
        psychology: 'Hiện thân sắc lạnh của chế độ gia trưởng phong kiến hà khắc và sự tàn bạo của tầng lớp phú hào; nguồn cơn tạo nên bi kịch nghiệt ngã thử thách phẩm giá con người.',
        costume: 'Áo dài lụa bóng màu nâu cánh gián hoặc gấm tối, trâm cài tóc nhọn, tay đeo vòng bạc phô trương của cải.',
        actingStyle: 'Bước chân xăm xăm dồn dập áp chế; cái bĩu môi dài khinh miệt; giọng nói the thé nhả từng từ buốt giá như dao cứa.',
        iconicQuote: {
          line: 'Nhà tao nề nếp gia phong, con chim phượng hoàng đậu trên cành quế chứ loài quạ đen tầm thường đâu dám bén mảng!',
          context: 'Sùng Bà đay nghiến đuổi Thị Kính trong Quan Âm Thị Kính'
        },
        audioMelody: {
          name: 'Làn điệu Hát Nói Mụ Ác',
          instrument: 'thanh-la-mo',
          instrumentName: 'Thanh La & Mõ',
          emotion: 'Gay gắt, bức bối, dồn dập nghẹt thở'
        }
      },
      {
        id: 'mu-quan',
        typeName: 'Mụ Quán / Mụ Lẳng Tuổi Già',
        role: 'Mụ Quán (Quan Âm Thị Kính)',
        vocal: 'Lả lơi, đưa đẩy lúng liếng nhưng sành sỏi lọc lõi (Làn điệu Mụ Quán)',
        description: 'Bà chủ quán rượu ven đường thiên lý, vừa hám tiền vừa thích đưa chuyện châm chọc, là nơi diễn ra các màn hài kịch sinh hoạt thôn quê.',
        image: '/images/test_quan_am.jpg',
        visualTrait: 'Váy đụp đen, áo cánh nâu buông vạt, nụ cười đon đả đưa chuyện miệng nhai trầu đỏ thắm.',
        psychology: 'Mẫu phụ nữ tiểu thương sắc sảo đường đời, sống thực tế, vừa tinh quái vừa đem lại không khí sinh hoạt đời thường sống động cho vở diễn.',
        costume: 'Áo cánh nâu buông vạt, thắt lưng xanh lơ, bao vải đựng tiền giắt cạp váy, cơi trầu têm cánh phượng.',
        actingStyle: 'Cử chỉ đon đả mời chào xởi lởi; cái liếc mắt lọc lõi đếm tiền; lối ăn nói đong đưa nhưng rất tỉnh táo không ai lừa được.',
        iconicQuote: {
          line: 'Rượu vào lời ra, tiền trao cháo múc, đời thuở nhà ai uống không rồi cắp nón ra về!',
          context: 'Mụ Quán đòi tiền khách say ven đường thiên lý'
        },
        audioMelody: {
          name: 'Làn điệu Mụ Quán Mời Rượu',
          instrument: 'dan-nguyet',
          instrumentName: 'Đàn Nguyệt',
          emotion: 'Lả lơi, rộn rã, sành sỏi lọc lõi'
        }
      }
    ],
    conventions: [
      {
        title: 'Tướng Đi Xăm Xăm & Tay Chống Nạnh',
        description: 'Bước chân nhanh xăm xăm dồn dập, hai tay chống nạnh hếch cằm lên trời, ngực ưỡn về phía trước áp chế tinh thần đối phương.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Cái Bĩu Môi Dài & Ánh Mắt Liếc Xéo',
        description: 'Khóe môi trề dài khinh miệt; ánh mắt sắc lẹm đảo quanh quét từ đầu đến chân đối thủ nhằm tìm chỗ sơ hở để đay nghiến chì chiết.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      },
      {
        title: 'Khẩu Khí Đay Nghiến Giọng The Thé',
        description: 'Âm vực cao gắt gỏng, nói như tát nước vào mặt, nhả từng từ buốt giá khiến người đối thoại không thể mở lời thanh minh.',
        image: CHEO_ARCHIVE_PLACEHOLDER,
        isPlaceholder: true
      }
    ],
    signatureMelodies: [
      {
        name: 'Làn điệu Hát Nói Mụ Ác',
        emotionalTone: 'Gay gắt, bức bối, dồn dập nghẹt thở',
        context: 'Sùng Bà nổi trận lôi đình khi thấy Thị Kính cầm dao tỉa râu cho Thiện Sĩ.',
        instrument: 'thanh-la-mo',
        instrumentName: 'Thanh La & Mõ',
        narrativeText: 'Tiếng thanh la đanh thép cùng giọng hát nói the thé nhả chữ sắc lẹm của Sùng Bà đẩy kịch tính lên cao trào. Mỗi lời thóa mạ là nhát búa của chế độ gia trưởng hà khắc chà đạp lên phẩm giá người lương thiện.',
        image: '/images/char_mu.jpg'
      },
      {
        name: 'Làn điệu Mụ Quán Mời Rượu',
        emotionalTone: 'Lả lơi, đon đả, sành sỏi đường đời',
        context: 'Mụ Quán chèo kéo khách làng chơi dừng chân uống rượu và kể chuyện thế sự đường xa.',
        instrument: 'dan-nguyet',
        instrumentName: 'Đàn Nguyệt',
        narrativeText: 'Tiếng đàn nguyệt lúng liếng đưa đẩy khúc hát mời chào khách say ven đường thiên lý. Lối ăn nói đon đả sành sỏi mang hơi thở sinh hoạt đời thường mộc mạc và chân thực vào không gian vở diễn.',
        image: CHEO_ARCHIVE_PLACEHOLDER
      }
    ],
    iconicScenes: [
      {
        title: 'Sùng Bà Đuổi Thị Kính',
        play: 'Quan Âm Thị Kính',
        description: 'Đỉnh cao của sự bất công tàn bạo phong kiến, gây nên sự phẫn nộ tột độ cho khán giả trước nỗi oan khuất của nàng dâu hiền thục.',
        image: '/images/test_quan_am.jpg',
        dialogue: 'Nhà tao con phượng hoàng đậu cành quế, chứ loài quạ đen tầm thường đâu dám bén mảng!'
      },
      {
        title: 'Mụ Quán Đòi Nợ Khách Say',
        play: 'Quan Âm Thị Kính',
        description: 'Màn hài kịch đời thường sống động phơi bày tính cách thực dụng và sự sắc sảo của tầng lớp tiểu thương buôn bán dọc đường thiên lý.',
        image: '/images/play_quan_am_thi_kinh.jpg',
        dialogue: 'Rượu vào lời ra, tiền trao cháo múc, đời nào có chuyện uống không rồi về!'
      }
    ],
    philosophy: 'Nhân vật Mụ phơi bày bản chất tàn độc của chế độ gia trưởng phụ quyền và lối sống kim tiền thực dụng, là chiếc đòn bẩy làm bừng sáng lòng vị tha và phẩm giá cao đẹp của người lương thiện.'
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
  const [playingMelody, setPlayingMelody] = useState<string | null>(null)
  const [activeSubtype, setActiveSubtype] = useState<CharacterSubtype | null>(null)
  const [playingSubtypeAudio, setPlayingSubtypeAudio] = useState<string | null>(null)

  useEffect(() => {
    const pId = currentPath?.split('/').pop()
    const found = CHARACTERS_DATA.find(c => c.id === pId)
    setSelectedChar(found || null)
    cheoAudio.stopAll()
    setPlayingMelody(null)
    setActiveSubtype(null)
    setPlayingSubtypeAudio(null)
  }, [currentPath])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeSubtype) {
        handleCloseSubtypeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSubtype, playingSubtypeAudio])

  const handleCloseSubtypeModal = () => {
    if (playingSubtypeAudio) {
      cheoAudio.stopAll()
      setPlayingSubtypeAudio(null)
    }
    setActiveSubtype(null)
  }

  const handleToggleSubtypeAudio = (sub: CharacterSubtype) => {
    if (!sub.audioMelody) return
    if (playingSubtypeAudio === sub.id) {
      cheoAudio.stopAll()
      setPlayingSubtypeAudio(null)
      return
    }
    cheoAudio.stopAll()
    setPlayingMelody(null)
    setPlayingSubtypeAudio(sub.id)
    cheoAudio.playInstrument(sub.audioMelody.instrument, () => {
      setPlayingSubtypeAudio(null)
    })
  }

  const handleNextSubtype = () => {
    if (!selectedChar || !activeSubtype) return
    const currentIndex = selectedChar.subtypes.findIndex(s => s.id === activeSubtype.id)
    const nextIndex = (currentIndex + 1) % selectedChar.subtypes.length
    if (playingSubtypeAudio) {
      cheoAudio.stopAll()
      setPlayingSubtypeAudio(null)
    }
    setActiveSubtype(selectedChar.subtypes[nextIndex])
  }

  const handlePrevSubtype = () => {
    if (!selectedChar || !activeSubtype) return
    const currentIndex = selectedChar.subtypes.findIndex(s => s.id === activeSubtype.id)
    const prevIndex = (currentIndex - 1 + selectedChar.subtypes.length) % selectedChar.subtypes.length
    if (playingSubtypeAudio) {
      cheoAudio.stopAll()
      setPlayingSubtypeAudio(null)
    }
    setActiveSubtype(selectedChar.subtypes[prevIndex])
  }

  const handleSelect = (char: CharacterArchetype) => {
    setSelectedChar(char)
    cheoAudio.stopAll()
    setPlayingMelody(null)
    setActiveSubtype(null)
    setPlayingSubtypeAudio(null)
    if (onNavigate) {
      onNavigate(`/kham-pha/san-khau/nhan-vat/${char.id}`)
    }
  }

  const handleBack = () => {
    setSelectedChar(null)
    cheoAudio.stopAll()
    setPlayingMelody(null)
    setActiveSubtype(null)
    setPlayingSubtypeAudio(null)
    if (onNavigate) {
      onNavigate('/kham-pha/san-khau/nhan-vat')
    }
  }

  const handleToggleMelody = (m: SignatureMelody) => {
    if (playingMelody === m.name) {
      cheoAudio.stopAll()
      setPlayingMelody(null)
      return
    }
    cheoAudio.stopAll()
    setPlayingMelody(m.name)
    cheoAudio.playInstrument(m.instrument, () => {
      setPlayingMelody(null)
    })
  }

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget
    if (target.src.endsWith('.jpg')) {
      target.src = target.src.replace(/\.jpg$/, '.png')
    } else if (target.src.endsWith('.png')) {
      target.src = target.src.replace(/\.png$/, '.webp')
    }
  }

  // =========================================================================
  // GIAO DIỆN CHI TIẾT 1 NHÂN VẬT — PHONG CÁCH TRIỂN LÃM ĐA CỘT RỘNG MỞ (1620px)
  // =========================================================================
  if (selectedChar) {
    const meta = CHARACTER_EXTRA_META[selectedChar.id] || CHARACTER_EXTRA_META['he']
    const otherChars = CHARACTERS_DATA.filter(c => c.id !== selectedChar.id)

    return (
      <div className="text-left w-full space-y-16 sm:space-y-24">
        {/* Nút quay lại tinh tế */}
        <div>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-400/90 hover:text-amber-300 font-serif transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại không gian Năm Mẫu Nhân Vật Chèo</span>
          </button>
        </div>

        {/* 1. SPLIT-SCREEN HERO BANNER (12 CỘT RỘNG MỞ) */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-18 items-center pb-12 border-b border-stone-800/60">
          {/* Cột trái (7 cột): Tiêu đề H1, Mô tả dẫn nhập, Đoạn văn tự sự Drop-Cap */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-serif font-bold text-stone-100 tracking-tight leading-[1.12]">
              {selectedChar.fullName}
            </h1>

            <p className="text-lg sm:text-xl 2xl:text-2xl text-amber-200/90 font-serif font-light leading-relaxed">
              {selectedChar.tagline}
            </p>

            <div className="space-y-4 text-base sm:text-lg 2xl:text-xl text-stone-300 font-serif font-light leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
                {selectedChar.overview[0]}
              </p>
              {selectedChar.overview[1] && (
                <p>{selectedChar.overview[1]}</p>
              )}
            </div>
          </div>

          {/* Cột phải (5 cột): Ảnh nhân vật khổ lớn tỉ lệ vàng, viền mộc */}
          <div className="lg:col-span-5 relative group">
            <div className="relative w-full rounded-3xl overflow-hidden border border-stone-800 shadow-2xl aspect-[4/3] 2xl:aspect-[16/11] bg-stone-900">
              <img
                src={selectedChar.image}
                alt={selectedChar.fullName}
                onError={handleImageFallback}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 inset-x-4 p-4 bg-stone-950/75 backdrop-blur-md rounded-2xl border border-stone-800/80">
                <p className="text-xs sm:text-sm font-serif text-amber-300/90 font-medium">
                  {selectedChar.category}
                </p>
                <p className="text-xs font-serif text-stone-300 mt-0.5 italic">
                  Điển hình: {selectedChar.representative}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* 2. DÒNG CHẢY TỰ SỰ SO LE — HỒI I: BỐI CẢNH & PHÂN HÓA VAI MẪU */}
        <section className="space-y-12">
          {/* Dẫn nhập tự sự 2 cột so le */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-18 items-center">
            {/* Ảnh tư liệu bên trái (5 cột) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-3xl overflow-hidden border border-stone-800 shadow-2xl aspect-[4/3] 2xl:aspect-[16/11] bg-stone-900">
                <img
                  src={meta.subImage1}
                  alt={selectedChar.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-3.5 bg-stone-950/75 backdrop-blur-md rounded-2xl border border-stone-800/80">
                  <p className="text-xs sm:text-sm font-serif text-stone-300 italic">
                    {meta.subCaption1}
                  </p>
                </div>
              </div>
            </div>

            {/* Bài viết tự sự phân vai bên phải (7 cột) */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-serif font-bold text-white tracking-tight leading-snug">
                Phân Hóa Mẫu Hình &amp; Biến Thể Vai Diễn
              </h2>

              <p className="text-base sm:text-lg 2xl:text-xl text-stone-300 font-serif font-light leading-relaxed">
                Trên manh chiếu chèo cổ truyền, mỗi vai mẫu không đóng khung đơn điệu mà phân nhánh thành các dạng thức đa dạng, phản ánh muôn mặt nhân tình thế thái của làng quê Bắc Bộ:
              </p>

              <p className="text-sm sm:text-base text-stone-400 font-serif font-light leading-relaxed">
                Quy luật &ldquo;Mẫu nhưng không khuôn&rdquo; cho phép nghệ nhân tự do thăng hoa dựa trên khung mẫu ước lệ ngàn đời. Bấm vào từng vai mẫu dưới đây để chiêm ngưỡng chi tiết tạo hình y phục, ngón diễn xuất thần và nghe thử làn điệu đặc trưng:
              </p>
            </div>
          </div>

          {/* LƯỚI THẺ TRỰC QUAN CÁC BIẾN THỂ VAI MẪU — CÓ ẢNH TƯ LIỆU & NÚT MỞ MODAL CHI TIẾT */}
          <div className={`grid grid-cols-1 ${selectedChar.subtypes.length === 4
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : selectedChar.subtypes.length === 2
                ? 'md:grid-cols-2'
                : 'sm:grid-cols-2 lg:grid-cols-3'
            } gap-6 2xl:gap-8`}>
            {selectedChar.subtypes.map((sub, idx) => (
              <div
                key={sub.id || idx}
                onClick={() => setActiveSubtype(sub)}
                className="rounded-3xl overflow-hidden bg-[#16120f] border border-stone-800/80 hover:border-amber-600/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between group cursor-pointer"
              >
                {/* Header ảnh minh họa trực quan */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-950">
                  <img
                    src={sub.image || CHEO_ARCHIVE_PLACEHOLDER}
                    alt={sub.typeName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16120f] via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                      {sub.typeName}
                    </h3>
                    <p className="text-xs text-stone-400 font-serif italic">
                      Tiêu biểu: {sub.role}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed pt-1">
                      {sub.visualTrait}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm font-serif text-amber-400 group-hover:text-amber-300 font-medium">
                    <span className="italic">Chiêm ngưỡng vai mẫu</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC CALLOUT BAND) */}
        <div className="w-full my-16 sm:my-20 2xl:my-24 rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-stone-800/80 p-10 sm:p-14 2xl:p-16 text-center space-y-4 shadow-2xl">
          <Sparkles className="w-7 h-7 text-amber-400/80 mx-auto mb-1" />
          <p className="text-xl sm:text-2xl 2xl:text-3xl font-serif italic text-amber-100/90 font-light leading-relaxed max-w-4xl mx-auto">
            &ldquo;{meta.panoramicQuote.text}&rdquo;
          </p>
          <p className="text-xs sm:text-sm font-serif text-amber-400/90 font-medium pt-1">
            — {meta.panoramicQuote.author} —
          </p>
        </div>

        {/* 4. KHẨU QUYẾT VŨ ĐẠO ƯỚC LỆ & HÌNH THỂ SÂN KHẤU — BỐ CỤC PHÒNG TRANH MỞ */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-serif font-bold text-white tracking-tight">
              Khẩu Quyết Vũ Đạo &amp; Ước Lệ Hình Thể
            </h2>
            <p className="text-base sm:text-lg text-stone-300 font-serif font-light mt-2 max-w-4xl leading-relaxed">
              Chiếu chèo xưa không có phông màn rực rỡ hay đạo cụ cầu kỳ. Toàn bộ không gian sông sâu núi cao và mọi cung bậc cảm xúc hỉ nộ ái ố đều được kiến tạo từ chính thân thể và khẩu quyết của người diễn viên. Từng bước chân lướt chữ Đinh, thế đứng uyển chuyển, cái liếc mắt có đuôi hay ngón tay búp sen đều là chuẩn mực tạo hình biểu cảm được đúc kết qua nhiều thế hệ nghệ nhân tiền bối:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-10">
            {selectedChar.conventions.map((conv, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-stone-800/80 shadow-xl bg-stone-950">
                  <img
                    src={conv.image}
                    alt={conv.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16120f]/80 via-transparent to-transparent" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-amber-200 group-hover:text-amber-100 transition-colors">
                    {conv.title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                    {conv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. HỒI KÝ ÂM SẮC & LÀN ĐIỆU RUỘT — DÒNG CHẢY TỰ SỰ SO LE (SPLIT-SCREEN ALTERNATING) */}
        <section className="space-y-16 pt-10 border-t border-stone-800/60">
          <div>
            <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-serif font-bold text-white tracking-tight">
              Hồi Ký Âm Sắc &amp; Làn Điệu Ruột
            </h2>
            <p className="text-base sm:text-lg 2xl:text-xl text-stone-300 font-serif font-light mt-3 max-w-4xl leading-relaxed">
              Trong nghệ thuật Chèo, hát là nói, nói là hát. Mỗi làn điệu không đơn thuần là một quy chuẩn âm luật, mà là tiếng khóc, tiếng cười, là dòng máu chảy trong số phận nhân vật. Nhạc cụ truyền thống không chỉ đệm cho lời ca, mà như một nhân vật thứ hai vô hình cùng đối thoại, cùng nuốt nước mắt với kiếp đoạn trường:
            </p>
          </div>

          <div className="space-y-20 2xl:space-y-24">
            {selectedChar.signatureMelodies.map((m, idx) => {
              const isPlaying = playingMelody === m.name
              const isEven = idx % 2 === 0

              // Khung thẩm âm nghệ thuật (Artistic Acoustic Panel)
              const AcousticPanel = (
                <div className="space-y-4">
                  <div className="relative aspect-[16/11] 2xl:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-950 group">
                    <img
                      src={m.image || CHEO_ARCHIVE_PLACEHOLDER}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-transparent to-transparent" />

                    {/* Acoustic Status & Instrument Overlay */}
                    <div className="absolute bottom-4 inset-x-4 p-4 bg-stone-950/85 backdrop-blur-md rounded-2xl border border-stone-800/90 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs sm:text-sm font-serif text-amber-300 font-medium">
                          Nhạc cụ chủ xướng: {m.instrumentName}
                        </p>
                        <p className="text-xs text-stone-400 font-serif italic mt-0.5">
                          Cung bậc: {m.emotionalTone}
                        </p>
                      </div>

                      {/* Equalizer Waveform Bars */}
                      <div className="flex items-end gap-1 h-5 px-2" aria-hidden="true">
                        <span className={`w-1 rounded-full bg-amber-400 transition-all duration-300 ${isPlaying ? 'h-5 animate-pulse' : 'h-1.5 opacity-40'}`} />
                        <span className={`w-1 rounded-full bg-amber-400 transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse delay-75' : 'h-2 opacity-40'}`} />
                        <span className={`w-1 rounded-full bg-amber-400 transition-all duration-300 ${isPlaying ? 'h-6 animate-pulse delay-150' : 'h-3 opacity-40'}`} />
                        <span className={`w-1 rounded-full bg-amber-400 transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse delay-100' : 'h-2 opacity-40'}`} />
                        <span className={`w-1 rounded-full bg-amber-400 transition-all duration-300 ${isPlaying ? 'h-5 animate-pulse delay-200' : 'h-1.5 opacity-40'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Nút lắng nghe âm sắc thanh nhã */}
                  <button
                    onClick={() => handleToggleMelody(m)}
                    className={`w-full py-3 px-5 rounded-2xl font-serif text-xs sm:text-sm font-medium flex items-center justify-center gap-3 transition-all cursor-pointer ${isPlaying
                        ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/30'
                        : 'bg-stone-900/80 hover:bg-stone-850 text-amber-300 border border-stone-700/80 hover:border-amber-600/50'
                      }`}
                  >
                    {isPlaying ? (
                      <>
                        <Square className="w-4 h-4 fill-current" />
                        <span>Dừng phát âm sắc</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-amber-400" />
                        <span>Lắng nghe âm sắc {m.instrumentName} — {m.name}</span>
                      </>
                    )}
                  </button>
                </div>
              )

              // Bài ký tự sự súc tích (Storytelling Passage) — Tinh giản, không nhồi nhét chữ
              const StorytellingPassage = (
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-serif font-bold text-white tracking-tight">
                    {m.name}
                  </h3>

                  <p className="text-base sm:text-lg 2xl:text-xl text-stone-300 font-serif font-light leading-relaxed">
                    {m.narrativeText}
                  </p>
                </div>
              )

              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-18 items-center"
                >
                  {isEven ? (
                    <>
                      <div className="lg:col-span-5">{AcousticPanel}</div>
                      <div className="lg:col-span-7">{StorytellingPassage}</div>
                    </>
                  ) : (
                    <>
                      <div className="lg:col-span-7 order-2 lg:order-1">{StorytellingPassage}</div>
                      <div className="lg:col-span-5 order-1 lg:order-2">{AcousticPanel}</div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* 6. KIỆT TÁC TRÍCH ĐOẠN — CÓ ẢNH SÂN KHẤU & LỜI THOẠI MẪU MỰC */}
        <section className="space-y-8 pt-6 border-t border-stone-800/60">
          <div>
            <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-serif font-bold text-white tracking-tight">
              Kiệt Tác Trích Đoạn Sân Khấu
            </h2>
            <p className="text-base sm:text-lg text-stone-300 font-serif font-light mt-2 max-w-3xl leading-relaxed">
              Các màn diễn xuất thần in sâu vào ký ức bao thế hệ khán giả Chèo:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {selectedChar.iconicScenes.map((scene, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-stone-900/40 border border-stone-800/80 hover:border-amber-700/50 transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-950">
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                    <div>
                      <span className="text-xs font-serif text-amber-400 block mb-1">
                        Vở diễn: {scene.play}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                        {scene.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-stone-300 font-serif font-light leading-relaxed">
                    {scene.description}
                  </p>

                  {scene.dialogue && (
                    <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/70">
                      <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 leading-relaxed">
                        Thoại mẫu mực: &ldquo;{scene.dialogue}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. LƯỚI KHÁM PHÁ TIẾP NỐI (4 MẪU NHÂN VẬT CÒN LẠI) */}
        <section className="pt-8 border-t border-stone-800/60 space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Khám Phá Các Mẫu Hình Nhân Vật Khác
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light mt-1">
              Chiêm ngưỡng các vai mẫu kinh điển khác trên chiếu Chèo truyền thống
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherChars.map((char) => (
              <div
                key={char.id}
                onClick={() => handleSelect(char)}
                className="group relative rounded-2xl overflow-hidden bg-[#16120f] border border-stone-800/80 hover:border-amber-600/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src={char.image}
                    alt={char.name}
                    onError={handleImageFallback}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16120f] via-transparent to-transparent" />
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    Vai {char.name}
                  </h4>
                  <p className="text-xs text-stone-400 font-serif font-light line-clamp-2">
                    {char.tagline}
                  </p>
                  <div className="pt-3 border-t border-stone-800/60 flex items-center justify-between text-xs text-amber-500/80 group-hover:text-amber-300 font-medium">
                    <span className="font-serif italic">Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. LỜI KẾT THI VỊ (POETIC EPILOGUE) */}
        <footer className="pt-8 pb-4 text-center">
          <div className="max-w-2xl mx-auto py-4 text-stone-400 font-serif text-sm">
            <p className="italic text-amber-200/80 leading-relaxed whitespace-pre-line">
              {meta.epilogue.poem}
            </p>
            <p className="text-xs text-stone-500 mt-2 uppercase tracking-wider">
              — {meta.epilogue.source} —
            </p>
          </div>
        </footer>

        {/* 9. MODAL CHI TIẾT BIẾN THỂ VAI MẪU (SUBTYPE DETAIL MODAL) */}
        {activeSubtype && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
            {/* Backdrop click dismiss */}
            <div
              className="absolute inset-0"
              onClick={handleCloseSubtypeModal}
            />

            {/* Modal Dialog Content */}
            <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#14100e] border border-stone-700 shadow-2xl p-6 sm:p-10 space-y-8 z-10 text-stone-200">
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-6 border-b border-stone-800/80 gap-4">
                <div className="space-y-1.5">
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                    {activeSubtype.typeName}
                  </h2>
                  <p className="text-sm sm:text-base font-serif italic text-amber-200/90">
                    Vai diễn tiêu biểu: {activeSubtype.role}
                  </p>
                </div>

                <button
                  onClick={handleCloseSubtypeModal}
                  className="p-2.5 rounded-xl bg-stone-900 border border-stone-700 hover:border-amber-500 text-stone-400 hover:text-white transition-all cursor-pointer"
                  title="Đóng (Phím Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Split Screen 2 cột */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Cột trái (5 cột): Ảnh tư liệu + Nghe âm sắc Procedural Synthesizer */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-stone-800 shadow-xl bg-stone-950">
                    <img
                      src={activeSubtype.image || CHEO_ARCHIVE_PLACEHOLDER}
                      alt={activeSubtype.typeName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16120f]/80 via-transparent to-transparent" />
                  </div>

                  {/* Nút nghe thử làn điệu ruột */}
                  {activeSubtype.audioMelody && (
                    <div className="space-y-2">
                      <button
                        onClick={() => handleToggleSubtypeAudio(activeSubtype)}
                        className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-serif font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${playingSubtypeAudio === activeSubtype.id
                            ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/30'
                            : 'bg-stone-800/80 hover:bg-stone-750 text-amber-300 border border-stone-700'
                          }`}
                      >
                        {playingSubtypeAudio === activeSubtype.id ? (
                          <>
                            <Square className="w-3.5 h-3.5 fill-current" />
                            <span>Dừng phát âm sắc</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                            <span>Nghe thử {activeSubtype.audioMelody.name} ({activeSubtype.audioMelody.instrumentName})</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Thần thái nhận diện tức thì */}
                  <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800/80">
                    <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 leading-relaxed">
                      &ldquo;{activeSubtype.visualTrait}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Cột phải (7 cột): Chiều sâu tâm lý, Y phục, Lối diễn, Thoại mẫu mực */}
                <div className="lg:col-span-7 space-y-6">
                  {/* 1. Chiều sâu tâm lý */}
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>Chiều Sâu Tâm Lý &amp; Thân Phận</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed">
                      {activeSubtype.psychology}
                    </p>
                  </div>

                  {/* 2. Tạo hình y phục */}
                  <div className="space-y-2 pt-4 border-t border-stone-800/60">
                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-300">
                      Tạo Hình Y Phục &amp; Ước Lệ
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed">
                      {activeSubtype.costume}
                    </p>
                  </div>

                  {/* 3. Lối diễn & Vũ đạo */}
                  <div className="space-y-2 pt-4 border-t border-stone-800/60">
                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-300">
                      Lối Diễn &amp; Khẩu Quyết Vũ Đạo
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed">
                      {activeSubtype.actingStyle}
                    </p>
                  </div>

                  {/* 4. Trích đoạn đối thoại bất hủ (nếu có) */}
                  {activeSubtype.iconicQuote && (
                    <div className="p-4 rounded-2xl bg-stone-900/50 border border-stone-800/80 space-y-1">
                      <p className="text-xs sm:text-sm font-serif italic text-amber-100/90 leading-relaxed">
                        &ldquo;{activeSubtype.iconicQuote.line}&rdquo;
                      </p>
                      <p className="text-xs font-serif text-amber-400/80">
                        — {activeSubtype.iconicQuote.context} —
                      </p>
                    </div>
                  )}

                  {/* 5. Làn điệu hát xướng */}
                  <div className="pt-2 text-xs text-stone-400 font-serif">
                    <span className="text-amber-400 font-medium">Làn điệu hát xướng: </span>
                    {activeSubtype.vocal}
                  </div>
                </div>
              </div>

              {/* Modal Footer: Chuyển vai mẫu trước/sau + Nút đóng */}
              <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrevSubtype}
                    className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-xs font-serif text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Vai trước</span>
                  </button>
                  <button
                    onClick={handleNextSubtype}
                    className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-xs font-serif text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Vai tiếp theo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleCloseSubtypeModal}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-xs sm:text-sm font-serif font-medium text-amber-300 transition-all cursor-pointer"
                >
                  Khép lại cửa sổ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // =========================================================================
  // GIAO DIỆN DANH SÁCH 5 NHÂN VẬT — MỞ THOÁNG TOÀN CẢNH (1620px)
  // =========================================================================
  return (
    <div className="space-y-12 sm:space-y-16 text-left w-full animate-in fade-in duration-300">
      {/* ── 1. CINEMA OVERLAY HERO BANNER (100VW FULL VIEWPORT WIDTH & COMPACT HEIGHT) ── */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 overflow-hidden shadow-2xl border-b border-stone-800 bg-stone-950 h-[280px] sm:h-[340px] lg:h-[380px] flex items-end group mb-12 sm:mb-16">
        <img
          src="/images/kham-pha/san-khau/nhan_vat_hero.jpg"
          alt="Năm Mẫu Hình Nhân Vật Sân Khấu Chèo"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 space-y-2.5">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
            Năm Mẫu Hình Nhân Vật Sân Khấu
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-serif font-light leading-relaxed drop-shadow max-w-4xl">
            <span className="float-left text-3xl sm:text-4xl font-serif font-bold text-amber-400 leading-none pr-2.5 pt-0.5">Đ</span>
            ào, Kép, Hề, Lão, Mụ — Hệ thống năm mẫu nhân vật ước lệ chuẩn mực của kịch hát Chèo cổ truyền, khắc họa toàn diện thế thái nhân tình và đạo lý ứng xử dưới mái đình làng Bắc Bộ.
          </p>
        </div>
      </section>

      {/* ── 2. LƯỚI THẺ NHÂN VẬT 5 CỘT ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-stone-800/60 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Năm Tuyến Vai Mẫu Mực
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 2xl:gap-8">
        {CHARACTERS_DATA.map((char) => (
          <div
            key={char.id}
            onClick={() => handleSelect(char)}
            className="group relative rounded-3xl overflow-hidden bg-[#16120f] border border-stone-800/80 hover:border-amber-600/50 transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-stone-900 relative">
              <img
                src={char.image}
                alt={char.name}
                onError={handleImageFallback}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16120f] via-[#16120f]/30 to-transparent" />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-serif text-amber-500/90 font-medium">
                  {char.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  Vai {char.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-serif font-light leading-relaxed line-clamp-3">
                  {char.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs text-amber-400/80 group-hover:text-amber-300 font-medium">
                <span className="font-serif italic">Khám phá vai mẫu</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
