const tarotMeanings = {
  "The Fool": {
    "upright": {
      "love": "Tình yêu tự do, không ràng buộc bởi bất kỳ quy tắc hay khuôn khổ nào. Bạn có thể gặp gỡ một người hoàn toàn bất ngờ, như một cơn gió thoảng mang theo hương vị mới lạ của cuộc sống. Mối quan hệ này đầy ắp sự hồn nhiên, phiêu lưu và không sợ hãi trước tương lai.",
      "career": "Cơ hội nghề nghiệp mới mẻ đang mở ra trước mắt bạn. Dù có phần mạo hiểm, nhưng năng lượng tích cực và sự táo bạo sẽ dẫn bạn đến những thành công bất ngờ. Hãy sẵn sàng bước vào một hành trình mà bạn chưa từng biết trước.",
      "finance": "Bạn đang ở giai đoạn sẵn sàng thử nghiệm với tiền bạc – có thể là đầu tư mới, thay đổi chiến lược tài chính. Tuy nhiên, sự liều lĩnh cần đi đôi với sự tỉnh táo để tránh những rủi ro không đáng có.",
      "health": "Sức khỏe tổng thể tốt, tràn đầy năng lượng sống. Nhưng hãy cẩn thận với những tai nạn nhỏ do sự bất cẩn, thiếu tập trung – đặc biệt khi di chuyển hoặc làm việc với máy móc.",
      "general": "Hãy tin vào bản thân mình, dù con đường phía trước còn mơ hồ. Bước đi với trái tim rộng mở, như một đứa trẻ bắt đầu chuyến phiêu lưu đầu đời. Mọi thứ đều có thể xảy ra – và đó chính là vẻ đẹp của cuộc sống."
    },
    "reversed": {
      "love": "Mối quan hệ thiếu ổn định, dễ bị ảnh hưởng bởi cảm xúc nhất thời. Có thể một trong hai người đang hành xử thiếu trách nhiệm, né tránh cam kết hoặc không nghiêm túc với tình cảm.",
      "career": "Công việc đang ở trạng thái bất định, dễ đưa ra quyết định sai lầm vì thiếu thông tin hoặc do dự. Hãy dừng lại, không nên vội vàng ký kết hay thay đổi lớn vào lúc này.",
      "finance": "Chi tiêu vượt quá khả năng, đầu tư mù quáng hoặc không có kế hoạch rõ ràng. Đây là lúc cần kiềm chế ham muốn và nhìn nhận lại tình hình tài chính một cách thực tế.",
      "health": "Dễ gặp tai nạn do bất cẩn, hoặc các vấn đề tâm lý như lo âu, căng thẳng do thiếu kiểm soát cảm xúc. Hãy chú ý đến giấc ngủ và sức khỏe tinh thần.",
      "general": "Đây là giai đoạn cần tạm dừng, nhìn nhận lại hướng đi. Đừng để sự bốc đồng hay do dự làm bạn lạc lối. Hãy dành thời gian suy ngẫm, lập kế hoạch trước khi hành động."
    }
  },
  "The Magician": {
    "upright": {
      "love": "Bạn sở hữu sức hút mạnh mẽ, khả năng giao tiếp tuyệt vời và sự tự tin trong tình yêu. Mối quan hệ hiện tại hoặc sắp tới sẽ được xây dựng trên nền tảng trò chuyện cởi mở, thấu hiểu và cùng nhau sáng tạo tương lai.",
      "career": "Bạn là người làm chủ công việc – mọi kỹ năng, ý tưởng và nguồn lực đều nằm trong tay bạn. Đây là thời điểm lý tưởng để khởi xướng dự án mới, thể hiện tài năng và biến ý tưởng thành hiện thực.",
      "finance": "Khả năng quản lý tài chính xuất sắc, biết cách tận dụng cơ hội để gia tăng thu nhập. Sự nhạy bén và sáng tạo sẽ giúp bạn tìm ra những hướng đi tài chính thông minh.",
      "health": "Sức khỏe ổn định nhờ vào lối sống có kiểm soát, biết cân bằng giữa làm việc và nghỉ ngơi. Năng lượng dồi dào, tinh thần minh mẫn.",
      "general": "Bạn chính là người kiến tạo số phận của mình. Mọi công cụ cần thiết đã có sẵn – chỉ cần bạn biết cách sử dụng chúng một cách khôn ngoan và quyết đoán."
    },
    "reversed": {
      "love": "Có sự lừa dối, thiếu trung thực hoặc giao tiếp không chân thành trong mối quan hệ. Một trong hai người có thể đang che giấu điều gì đó, hoặc dùng lời nói để thao túng cảm xúc.",
      "career": "Kỹ năng bị sử dụng sai mục đích, hoặc bạn đang bị người khác lợi dụng vì tài năng của mình. Có thể bạn đang tự đánh giá thấp bản thân hoặc bị phân tâm bởi những điều không quan trọng.",
      "finance": "Nguy cơ bị lừa đảo, ký kết hợp đồng không minh bạch, hoặc quản lý tiền bạc một cách thiếu trách nhiệm. Hãy kiểm tra kỹ mọi giấy tờ và tránh tin tưởng mù quáng.",
      "health": "Sức khỏe suy giảm do mất cân bằng – có thể là làm việc quá sức, căng thẳng kéo dài hoặc lối sống không lành mạnh. Cơ thể và tâm trí đang mất kết nối.",
      "general": "Năng lượng mạnh mẽ bên trong bạn đang bị lãng phí hoặc sử dụng sai cách. Hãy nhìn nhận lại mục tiêu, tránh thao túng bản thân bằng những ảo tưởng không thực tế."
    }
  },
  "The High Priestess": {
    "upright": {
      "love": "Tình yêu sâu lắng, huyền bí, vượt qua lý trí. Bạn có thể đang yêu một cách không cần lời giải thích, chỉ đơn giản là cảm nhận được sự kết nối tâm hồn. Mối quan hệ này cần sự kiên nhẫn và tin tưởng vào trực giác.",
      "career": "Trực giác của bạn đang ở đỉnh cao – hãy tin vào những linh cảm trong công việc. Đừng vội vàng hành động theo logic thông thường, hãy lắng nghe tiếng nói bên trong.",
      "finance": "Không nên công khai kế hoạch tài chính. Hãy giữ bí mật về thu nhập, đầu tư hoặc các dự định lớn. Sự im lặng sẽ bảo vệ bạn khỏi những rủi ro không đáng có.",
      "health": "Sức khỏe tốt nếu bạn biết lắng nghe cơ thể. Những dấu hiệu nhỏ nhất – cơn đau thoáng qua, cảm giác mệt mỏi – đều là thông điệp quan trọng từ cơ thể.",
      "general": "Đây là giai đoạn của sự tĩnh lặng và quan sát. Đừng vội phán xét, đừng vội hành động. Mọi câu trả lời đang nằm trong chính bạn – chỉ cần bạn chịu lắng nghe."
    },
    "reversed": {
      "love": "Có điều gì đó đang bị che giấu trong mối quan hệ – bí mật, sự không trung thực hoặc cảm xúc bị kìm nén. Cả hai có thể đang không thực sự hiểu nhau.",
      "career": "Công việc thiếu minh bạch, thông tin bị giấu giếm hoặc bạn đang tự nghi ngờ khả năng của mình. Đừng để sự thiếu chắc chắn làm bạn chùn bước.",
      "finance": "Cẩn thận với các tài liệu tài chính không rõ ràng, hợp đồng mập mờ hoặc thông tin bị bóp méo. Có thể có sự gian lận hoặc hiểu lầm nghiêm trọng.",
      "health": "Có những triệu chứng tiềm ẩn mà bạn chưa nhận ra. Đừng chủ quan – hãy đi kiểm tra sức khỏe toàn diện để phát hiện sớm vấn đề.",
      "general": "Bạn đang bỏ qua trực giác của mình hoặc bị cuốn theo những gì bề ngoài. Hãy dừng lại, nhìn sâu hơn vào bản chất của mọi việc."
    }
  },
  "The Empress": {
    "upright": {
      "love": "Tình yêu ấm áp, nuôi dưỡng, đầy sự chăm sóc và sẻ chia. Mối quan hệ này có thể dẫn đến hôn nhân, mang thai hoặc xây dựng một gia đình hạnh phúc. Năng lượng nữ tính mạnh mẽ, dịu dàng và sáng tạo.",
      "career": "Công việc liên quan đến nghệ thuật, sáng tạo, chăm sóc người khác hoặc làm đẹp sẽ phát triển mạnh mẽ. Bạn đang ở giai đoạn “nở hoa” về mặt chuyên môn.",
      "finance": "Thu nhập ổn định và có xu hướng tăng trưởng nhờ vào các khoản đầu tư dài hạn. Bạn biết cách làm cho tiền sinh sôi một cách tự nhiên và bền vững.",
      "health": "Sức khỏe tuyệt vời, đặc biệt tốt cho phụ nữ. Năng lượng sinh sản dồi dào, cơ thể tràn đầy sức sống, phù hợp để mang thai hoặc chăm sóc sức khỏe sinh sản.",
      "general": "Đây là thời kỳ sung túc, dư dả và tràn đầy tình yêu thương. Hãy lan tỏa năng lượng tích cực này đến những người xung quanh – bạn đang là nguồn cảm hứng cho người khác."
    },
    "reversed": {
      "love": "Tình cảm trở nên nhạt nhẽo, lạnh lùng hoặc thiếu sự kết nối về mặt cảm xúc. Có thể một trong hai người đang quá phụ thuộc hoặc không còn nỗ lực để vun đắp.",
      "career": "Sáng tạo bị tắc nghẽn, công việc không phát triển như mong đợi. Bạn có thể cảm thấy bị kìm hãm, áp lực hoặc không được công nhận tài năng.",
      "finance": "Chi tiêu quá mức, đặc biệt liên quan đến gia đình, con cái hoặc nhu cầu cá nhân. Có thể gặp khó khăn trong việc kiểm soát ngân sách.",
      "health": "Vấn đề về nội tiết tố, kinh nguyệt không đều, hoặc khó khăn trong việc thụ thai. Cần chú ý chăm sóc sức khỏe phụ khoa và cân bằng cảm xúc.",
      "general": "Bạn đang hy sinh quá nhiều cho người khác mà quên mất bản nặng bản thân. Hãy học cách yêu thương và chăm sóc chính mình trước khi chăm sóc người khác."
    }
  },
  "The Emperor": {
    "upright": {
      "love": "Mối quan hệ ổn định, có nền tảng vững chắc nhưng có thể thiếu sự lãng mạn hoặc cảm xúc bộc phát. Người ấy mang lại cảm giác an toàn, đáng tin cậy và có trách nhiệm.",
      "career": "Bạn đang ở vị thế lãnh đạo, có khả năng kiểm soát và tổ chức công việc một cách xuất sắc. Thành công trong các môi trường có cấu trúc rõ ràng, doanh nghiệp lớn hoặc vị trí quản lý.",
      "finance": "Quản lý tài chính chặt chẽ, có kế hoạch dài hạn rõ ràng. Bạn biết cách xây dựng sự giàu có bền vững thông qua kỷ luật và chiến lược.",
      "health": "Sức khỏe tốt nhờ vào lối sống có quy củ, tập luyện đều đặn và chế độ ăn uống khoa học. Cơ thể mạnh mẽ, ít ốm vặt.",
      "general": "Đây là lúc bạn cần thể hiện sự cứng rắn, nguyên tắc và trách nhiệm. Hãy đứng vững trong vai trò lãnh đạo của mình – dù là trong gia đình, công việc hay cuộc sống."
    },
    "reversed": {
      "love": "Mối quan hệ bị kiểm soát quá mức, một người áp đặt ý chí lên người kia. Có thể thiếu sự ấm áp, giao tiếp trở nên cứng nhắc hoặc lạnh lùng.",
      "career": "Bạn đang bị kìm kẹp bởi quyền lực từ cấp trên, hoặc chính bạn đang trở nên độc đoán, không linh hoạt. Công việc thiếu tự do sáng tạo.",
      "finance": "Khó khăn tài chính do bám víu vào các mô hình cũ, không chịu thay đổi. Có thể gặp rủi ro vì sự bảo thủ hoặc thiếu linh hoạt.",
      "health": "Căng thẳng mãn tính do áp lực công việc, trách nhiệm quá nặng hoặc do tự đặt ra tiêu chuẩn quá cao. Cần học cách thư giãn.",
      "general": "Bạn đang quá kiểm soát hoặc bị kiểm soát. Hãy học cách buông bỏ, linh hoạt hơn và chấp nhận rằng không phải mọi thứ đều cần phải hoàn hảo."
    }
  },
  "The Hierophant": {
    "upright": {
      "love": "Mối quan hệ nghiêm túc, có sự tham gia của truyền thống, gia đình hoặc tôn giáo. Có thể là hôn nhân được sắp xếp, hoặc tình yêu phát triển từ sự tôn trọng lẫn nhau theo các giá trị chung.",
      "career": "Công việc trong môi trường truyền thống, có hệ thống rõ ràng – như giáo dục, y tế, chính phủ, tôn giáo hoặc các tổ chức lớn. Bạn sẽ thành công nhờ tuân thủ quy tắc và học hỏi từ người đi trước.",
      "finance": "Thu nhập ổn định từ công việc lâu dài, có hệ thống. Không có nhiều biến động, nhưng cũng không có đột phá lớn. An toàn là ưu tiên hàng đầu.",
      "health": "Nên tuân thủ lời khuyên của bác sĩ, chuyên gia hoặc các phương pháp điều trị đã được chứng minh. Tránh tự ý thử nghiệm các cách chữa trị chưa rõ ràng.",
      "general": "Hãy tôn trọng kiến thức truyền thống, học hỏi từ người có kinh nghiệm. Đây là lúc xây dựng nền tảng vững chắc cho tương lai thông qua sự kỷ luật và niềm tin vào hệ thống."
    },
    "reversed": {
      "love": "Mối quan hệ bị gò bó bởi kỳ vọng của gia đình, xã hội hoặc truyền thống. Một hoặc cả hai người cảm thấy ngột ngạt, muốn phá vỡ quy tắc nhưng chưa dám.",
      "career": "Bạn chán ghét sự cứng nhắc của môi trường làm việc hiện tại. Sáng tạo bị kìm hãm, cảm thấy bị gò bó bởi quy định và thủ tục.",
      "finance": "Muốn tự do tài chính nhưng vẫn bị ràng buộc bởi các nghĩa vụ cũ, hợp đồng dài hạn hoặc tư duy bảo thủ. Cần thay đổi tư duy để mở ra cơ hội mới.",
      "health": "Việc điều trị không hiệu quả vì không lắng nghe cơ thể hoặc tin vào những thông tin sai lệch. Có thể đang chống lại lời khuyên y tế chính thống.",
      "general": "Bạn đang muốn phá vỡ quy tắc – và điều đó có thể tốt – nhưng đừng quên giữ lại những giá trị cốt lõi. Hãy đổi mới một cách có trách nhiệm."
    }
  },
  "The Lovers": {
    "upright": {
      "love": "Tình yêu sâu đậm, có sự gắn kết về cả thể xác lẫn tâm hồn. Đây có thể là mối quan hệ định mệnh, dẫn đến hôn nhân hoặc cam kết lâu dài. Cả hai cùng nhau tạo nên sự hài hòa hoàn hảo.",
      "career": "Sự hợp tác ăn ý với đồng nghiệp, đối tác. Các quyết định quan trọng trong sự nghiệp sẽ được đưa ra dựa trên sự cân bằng giữa lý trí và cảm xúc.",
      "finance": "Cơ hội tài chính đến từ sự hợp tác, liên doanh hoặc đầu tư chung. Nếu biết lắng nghe và tôn trọng nhau, kết quả sẽ rất tích cực.",
      "health": "Sức khỏe tinh thần tốt nhờ tình yêu và sự cân bằng trong cuộc sống. Cơ thể và tâm trí đang ở trạng thái hòa hợp.",
      "general": "Bạn đang đứng trước một ngã rẽ quan trọng. Hãy lắng nghe cả trái tim và lý trí. Lựa chọn của bạn hôm nay sẽ định hình tương lai lâu dài."
    },
    "reversed": {
      "love": "Mối quan hệ gặp xung đột, thiếu trung thực hoặc một trong hai người đang do dự về cam kết. Có thể có sự không chung thủy hoặc hiểu lầm nghiêm trọng.",
      "career": "Bất đồng với đồng nghiệp, đối tác hoặc đưa ra quyết định sai lầm vì bị cảm xúc chi phối. Công việc có nguy cơ bị ảnh hưởng bởi mâu thuẫn nội bộ.",
      "finance": "Đầu tư chung thất bại, mất lòng tin trong các giao dịch tài chính. Có thể gặp rủi ro do thiếu sự thống nhất hoặc thông tin không đầy đủ.",
      "health": "Căng thẳng tâm lý do vấn đề tình cảm, ảnh hưởng đến sức khỏe thể chất. Có thể gặp các vấn đề về tim mạch hoặc hệ thần kinh.",
      "general": "Bạn đang bị giằng xé giữa nhiều lựa chọn. Hãy cẩn thận với quyết định vội vã hoặc bị cảm xúc dẫn dắt. Tìm lại sự cân bằng trước khi hành động."
    }
  },
  "The Chariot": {
    "upright": {
      "love": "Mối quan hệ tiến triển nhanh chóng, đầy năng lượng và định hướng rõ ràng. Cả hai cùng nhau vượt qua khó khăn, hướng tới mục tiêu chung với sự quyết tâm mạnh mẽ.",
      "career": "Thành công lớn nhờ vào sự kiên trì, tập trung và khả năng kiểm soát tình huống. Bạn đang lái con tàu sự nghiệp của mình với tốc độ cao và chính xác.",
      "finance": "Tài chính đang được thúc đẩy mạnh mẽ – có thể là tăng lương, thưởng lớn hoặc dự án đầu tư thành công. Bạn biết cách kiểm soát rủi ro và tiến lên phía trước.",
      "health": "Sức khỏe tốt nhờ vào lối sống kỷ luật, tập luyện đều đặn và tinh thần chiến đấu mạnh mẽ. Cơ thể đang ở trạng thái tối ưu.",
      "general": "Dù có trở ngại nào phía trước, hãy giữ vững tay lái. Với ý chí và sự tập trung, bạn sẽ vượt qua mọi thử thách và về đích chiến thắng."
    },
    "reversed": {
      "love": "Mối quan hệ mất cân bằng – một người tiến, một người lùi. Có thể có sự thiếu đồng thuận về hướng đi chung, dẫn đến xung đột hoặc xa cách.",
      "career": "Công việc bị đình trệ, thiếu định hướng hoặc mất kiểm soát. Bạn có thể đang đi quá nhanh mà không có kế hoạch rõ ràng, dẫn đến sai lầm.",
      "finance": "Tài chính gặp trở ngại – chi tiêu mất kiểm soát, đầu tư thất bại hoặc gặp phải trở lực bất ngờ. Cần dừng lại để đánh giá lại.",
      "health": "Mệt mỏi, kiệt sức do làm việc quá sức hoặc thiếu nghỉ ngơi. Có thể gặp tai nạn nhỏ khi di chuyển do thiếu tập trung.",
      "general": "Bạn đang mất kiểm soát hướng đi của mình. Hãy dừng lại, hít thở sâu và xác định lại mục tiêu trước khi tiếp tục lao về phía trước."
    }
  },
  "Strength": {
    "upright": {
      "love": "Tình yêu dựa trên sự kiên nhẫn, thấu hiểu và lòng bao dung. Bạn có khả năng xoa dịu đối phương, chữa lành vết thương và xây dựng mối quan hệ bền vững bằng sức mạnh nội tâm.",
      "career": "Bạn đang đối mặt với thử thách lớn nhưng xử lý chúng một cách bình tĩnh và khéo léo. Sức mạnh không nằm ở sự hung hăng, mà ở sự kiên định và nhân từ.",
      "finance": "Quản lý tài chính bằng sự kiên nhẫn và lý trí. Bạn biết chờ đợi thời cơ, không vội vàng và luôn giữ được sự kiểm soát ngay cả trong lúc khó khăn.",
      "health": "Sức khỏe tốt nhờ vào sự chăm sóc đều đặn, chế độ ăn uống hợp lý và tinh thần lạc quan. Cơ thể và tâm trí đang ở trạng thái hòa hợp.",
      "general": "Sức mạnh thực sự không nằm ở cơ bắp, mà ở trái tim kiên cường. Hãy dùng lòng bao dung để chế ngự nỗi sợ hãi và vượt qua mọi trở ngại."
    },
    "reversed": {
      "love": "Thiếu kiên nhẫn, dễ nổi nóng hoặc không kiểm soát được cảm xúc trong mối quan hệ. Có thể một trong hai người đang cảm thấy bất lực hoặc yếu đuối về mặt tinh thần.",
      "career": "Mất động lực, dễ bỏ cuộc trước khó khăn hoặc để cảm xúc tiêu cực chi phối công việc. Bạn đang cần lấy lại sự tự tin và sức mạnh nội tâm.",
      "finance": "Quản lý tài chính yếu kém do thiếu kỷ luật hoặc để cảm xúc chi phối. Có thể chi tiêu theo cảm xúc hoặc bỏ lỡ cơ hội vì do dự.",
      "health": "Sức khỏe suy giảm do căng thẳng kéo dài, lo âu hoặc kiệt sức về tinh thần. Cần nghỉ ngơi và chăm sóc bản thân nhiều hơn.",
      "general": "Bạn đang nghi ngờ sức mạnh của chính mình. Hãy nhớ rằng: ngay cả con sư tử hung dữ cũng có thể được thuần phục bằng tình yêu và sự kiên nhẫn."
    }
  },
  "The Hermit": {
    "upright": {
      "love": "Bạn cần thời gian riêng để suy ngẫm về mối quan hệ hiện tại. Sự cô đơn tạm thời sẽ giúp bạn hiểu rõ hơn về mong muốn thực sự của trái tim mình.",
      "career": "Công việc đòi hỏi sự tập trung cao độ, nghiên cứu sâu hoặc làm việc độc lập. Đây là giai đoạn học hỏi, tích lũy kinh nghiệm và hoàn thiện bản thân.",
      "finance": "Lập kế hoạch tài chính cẩn thận, tiết kiệm và tránh chi tiêu không cần thiết. Sự khôn ngoan nằm ở việc biết chờ đợi và chuẩn bị cho tương lai.",
      "health": "Cần nghỉ ngơi, thiền định và chăm sóc sức khỏe tinh thần. Tránh tiếp xúc quá nhiều với đám đông – hãy dành thời gian cho chính mình.",
      "general": "Ánh sáng của ngọn đèn trong tay bạn chính là trí tuệ nội tại. Hãy bước vào sự tĩnh lặng để tìm ra câu trả lời mà thế giới ồn ào không thể cho bạn."
    },
    "reversed": {
      "love": "Cô đơn kéo dài, né tránh giao tiếp hoặc sợ hãi việc mở lòng. Có thể bạn đang tự cô lập mình khỏi người khác vì sợ bị tổn thương.",
      "career": "Công việc bị trì hoãn do thiếu động lực hoặc quá tập trung vào chi tiết nhỏ nhặt. Bạn có thể đang tự giới hạn bản thân trong vùng an toàn.",
      "finance": "Kế hoạch tài chính thiếu tầm nhìn, chi tiêu bốc đồng hoặc không dám đầu tư vì sợ rủi ro. Cần mở rộng tư duy và chấp nhận thay đổi.",
      "health": "Trầm cảm, lo âu hoặc căng thẳng tích tụ do thiếu kết nối xã hội. Cơ thể đang gửi tín hiệu cần được chăm sóc nhiều hơn.",
      "general": "Bạn đang trốn tránh thế giới bên ngoài quá lâu. Hãy bước ra khỏi hang động của mình, đón nhận ánh sáng và kết nối trở lại với cuộc sống."
    }
  },
  "Wheel of Fortune": {
    "upright": {
      "love": "Mối quan hệ đang trải qua một giai đoạn thay đổi tích cực – có thể là từ bạn bè thành người yêu, từ xa cách đến gần gũi hơn, hoặc một bước ngoặt lớn trong tình cảm.",
      "career": "Cơ hội thăng tiến bất ngờ, thay đổi công việc hoặc gặp được dự án quan trọng. Vòng xoay may mắn đang nghiêng về phía bạn – hãy sẵn sàng đón nhận.",
      "finance": "Thu nhập tăng đột biến, trúng thưởng, nhận thừa kế hoặc đầu tư sinh lời tốt. Đây là giai đoạn tài lộc dồi dào nếu bạn biết nắm bắt thời cơ.",
      "health": "Sức khỏe được cải thiện rõ rệt, đặc biệt nếu bạn từng gặp vấn đề trước đó. Cơ thể đang hồi phục và tràn đầy năng lượng.",
      "general": "Cuộc sống là một vòng quay – và hiện tại, bánh xe đang xoay theo hướng có lợi cho bạn. Hãy tận hưởng, nhưng cũng đừng quên chuẩn bị cho những thay đổi tiếp theo."
    },
    "reversed": {
      "love": "Mối quan hệ gặp sóng gió do những thay đổi ngoài ý muốn – chia tay, xa cách hoặc xung đột bất ngờ. May mắn trong tình yêu đang tạm thời quay lưng.",
      "career": "Mất việc, dự án thất bại hoặc gặp phải trở ngại lớn trong công việc. Vòng xoay đang đi xuống – nhưng đây chỉ là tạm thời.",
      "finance": "Tài chính gặp khó khăn – mất tiền, đầu tư thất bại hoặc chi phí bất ngờ tăng cao. Cần giữ bình tĩnh và lập kế hoạch ứng phó.",
      "health": "Sức khỏe suy giảm, dễ gặp tai nạn hoặc bệnh tật bất ngờ. Hãy chú ý an toàn và chăm sóc cơ thể cẩn thận hơn.",
      "general": "Dù hiện tại khó khăn, hãy nhớ rằng bánh xe luôn quay. Giai đoạn đen tối này sẽ qua đi – quan trọng là bạn học được gì từ nó."
    }
  },
  "Justice": {
    "upright": {
      "love": "Mối quan hệ công bằng, minh bạch và dựa trên sự tôn trọng lẫn nhau. Mọi quyết định trong tình cảm đều được cân nhắc kỹ lưỡng, không thiên vị.",
      "career": "Công việc liên quan đến pháp lý, công lý, tư vấn hoặc các vị trí đòi hỏi sự công tâm. Bạn sẽ nhận được phần thưởng xứng đáng với công sức bỏ ra.",
      "finance": "Quản lý tài chính rõ ràng, hợp lý và tuân thủ pháp luật. Có thể nhận được tiền bồi thường, hoàn thuế hoặc giải quyết thành công các vấn đề tài chính pháp lý.",
      "health": "Sức khỏe cân bằng, điều trị đúng phương pháp và có kết quả tốt. Cơ thể đang ở trạng thái hài hòa.",
      "general": "Mọi hành động đều có hậu quả. Hãy sống và làm việc với sự trung thực, trách nhiệm – và bạn sẽ nhận lại sự công bằng từ vũ trụ."
    },
    "reversed": {
      "love": "Mối quan hệ bất công – một người cho đi nhiều hơn nhận lại, hoặc có sự lừa dối, thao túng. Cần làm rõ trách nhiệm của từng người.",
      "career": "Bị đối xử bất công tại nơi làm việc, quyết định sai lệch hoặc gặp rắc rối pháp lý. Hãy thu thập bằng chứng và bảo vệ quyền lợi của mình.",
      "finance": "Giao dịch tài chính không minh bạch, hợp đồng có vấn đề hoặc bị lừa đảo. Cần kiểm tra kỹ lưỡng mọi giấy tờ trước khi ký kết.",
      "health": "Sức khỏe mất cân bằng – có thể do căng thẳng từ các vấn đề pháp lý hoặc cảm giác bị đối xử bất công. Cần thư giãn và tìm lại sự bình yên.",
      "general": "Sự thật đang bị che giấu hoặc bạn đang né tránh trách nhiệm. Hãy đối diện với hậu quả của hành động过去 và sửa chữa những gì có thể."
    }
  },
  "The Hanged Man": {
    "upright": {
      "love": "Mối quan hệ đang ở giai đoạn “treo lơ lửng” – cần kiên nhẫn chờ đợi hoặc nhìn nhận vấn đề từ một góc độ hoàn toàn mới. Sự hy sinh tạm thời sẽ mang lại hiểu biết sâu sắc hơn.",
      "career": "Công việc tạm thời đình trệ, nhưng đây là cơ hội để bạn suy ngẫm, thay đổi chiến lược hoặc học hỏi từ sai lầm. Đôi khi, dừng lại chính là cách tiến lên.",
      "finance": "Không nên đầu tư hay chi tiêu lớn vào lúc này. Hãy chờ đợi, quan sát và để mọi thứ tự nhiên rõ ràng hơn.",
      "health": "Cần nghỉ ngơi, thiền định và chăm sóc cơ thể một cách nhẹ nhàng. Đừng ép buộc bản thân – hãy để mọi thứ diễn ra tự nhiên.",
      "general": "Cuộc sống đang yêu cầu bạn thay đổi góc nhìn. Hãy buông bỏ cái tôi, chấp nhận sự bất lực tạm thời – và bạn sẽ thấy ánh sáng ở cuối đường hầm."
    },
    "reversed": {
      "love": "Mối quan hệ bế tắc do một hoặc cả hai người không chịu thay đổi quan điểm. Có thể đang níu kéo một điều đã hết ý nghĩa.",
      "career": "Công việc bị đình trệ kéo dài do sự cứng đầu hoặc không chịu thích nghi. Bạn đang tự làm khó mình bằng cách bám víu vào cách làm cũ.",
      "finance": "Tài chính gặp khó khăn do quyết định sai lầm trong quá khứ. Cần cắt lỗ, buông bỏ và tìm hướng đi mới.",
      "health": "Căng thẳng kéo dài do không chịu nghỉ ngơi hoặc không chấp nhận tình trạng hiện tại. Cơ thể đang kêu cứu – hãy lắng nghe.",
      "general": "Bạn đang chống lại dòng chảy của cuộc sống. Hãy học cách buông bỏ, chấp nhận sự thay đổi – dù ban đầu điều đó có vẻ đau đớn."
    }
  },
  "Death": {
    "upright": {
      "love": "Một giai đoạn tình cảm cũ kết thúc để nhường chỗ cho điều mới mẻ hơn. Có thể là chia tay, ly hôn hoặc một sự chuyển đổi sâu sắc trong mối quan hệ hiện tại.",
      "career": "Thay đổi công việc, nghỉ việc hoặc kết thúc một dự án lớn. Dù đau đớn ban đầu, nhưng đây là bước ngoặt cần thiết để bạn phát triển.",
      "finance": "Kết thúc một nguồn thu nhập cũ, xóa bỏ nợ nần hoặc thay đổi hoàn toàn chiến lược tài chính. Cái chết của cái cũ sẽ mở ra cơ hội mới.",
      "health": "Hồi phục sau bệnh tật, thay đổi lối sống hoặc cai nghiện thành công. Cơ thể đang tái sinh từ tro tàn.",
      "general": "Mọi thứ cũ kỹ đang chết đi để nhường chỗ cho sự tái sinh. Đừng sợ hãi sự kết thúc – vì đó chính là khởi đầu của một chương mới tươi sáng hơn."
    },
    "reversed": {
      "love": "Sợ hãi việc chia tay hoặc thay đổi, dù mối quan hệ đã trở nên độc hại. Bạn đang níu kéo một điều không còn phù hợp.",
      "career": "Bám víu vào công việc cũ dù biết nó không còn tương lai. Sợ hãi thay đổi khiến bạn bỏ lỡ cơ hội phát triển.",
      "finance": "Kháng cự lại việc thay đổi chiến lược tài chính, dẫn đến thua lỗ kéo dài. Cần dũng cảm cắt lỗ và bắt đầu lại.",
      "health": "Bệnh tật kéo dài do không chịu thay đổi lối sống. Cơ thể đang cảnh báo – nhưng bạn vẫn phớt lờ.",
      "general": "Bạn đang sống trong quá khứ, từ chối sự thay đổi cần thiết. Hãy buông bỏ nỗi sợ – và để cái chết làm công việc của nó: dọn đường cho sự sống mới."
    }
  },
  "Temperance": {
    "upright": {
      "love": "Mối quan hệ hài hòa, cân bằng và biết dung hòa sự khác biệt. Cả hai cùng nhau tạo nên một dòng chảy êm đềm, bổ trợ lẫn nhau về mọi mặt.",
      "career": "Công việc diễn ra suôn sẻ nhờ khả năng phối hợp, kiên nhẫn và biết điều chỉnh nhịp độ. Bạn đang ở trạng thái làm việc hiệu quả nhất.",
      "finance": "Quản lý tài chính hợp lý – biết tiết kiệm, biết chi tiêu và biết đầu tư đúng lúc. Sự cân bằng mang lại sự ổn định lâu dài.",
      "health": "Sức khỏe tốt nhờ lối sống điều độ, ăn uống khoa học và biết cân bằng giữa làm việc và nghỉ ngơi. Cơ thể đang ở trạng thái lý tưởng.",
      "general": "Cuộc sống như một dòng sông êm đềm – không quá nhanh, không quá chậm. Hãy giữ sự cân bằng này trong mọi khía cạnh của cuộc sống."
    },
    "reversed": {
      "love": "Mối quan hệ mất cân bằng – một người cho đi quá nhiều, một người nhận quá nhiều. Có thể có xung đột do thiếu sự dung hòa.",
      "career": "Công việc rối loạn do thiếu tổ chức, làm việc quá sức hoặc không biết ưu tiên. Bạn đang mất kiểm soát nhịp độ cuộc sống.",
      "finance": "Chi tiêu mất kiểm soát, đầu tư không hợp lý hoặc để cảm xúc chi phối quyết định tài chính. Cần lấy lại sự tỉnh táo.",
      "health": "Sức khỏe suy giảm do lối sống thiếu điều độ – ăn uống thất thường, thiếu ngủ hoặc làm việc quá sức. Cơ thể đang mất cân bằng.",
      "general": "Bạn đang sống trong sự cực đoan – quá nhiều hoặc quá ít. Hãy tìm lại điểm trung dung, điều chỉnh nhịp sống để lấy lại sự hài hòa."
    }
  },
  "The Devil": {
    "upright": {
      "love": "Mối quan hệ độc hại, đầy dục vọng, ghen tuông hoặc sự phụ thuộc không lành mạnh. Một hoặc cả hai người đang bị trói buộc bởi nỗi sợ, thói quen hoặc ham muốn thể xác.",
      "career": "Công việc khiến bạn cảm thấy bị mắc kẹt – lương cao nhưng áp lực lớn, môi trường độc hại hoặc công việc trái với đạo đức cá nhân.",
      "finance": "Nợ nần chồng chất, chi tiêu vì ham muốn vật chất hoặc nghiện ngập cờ bạc, mua sắm. Bạn đang bị tiền bạc kiểm soát thay vì ngược lại.",
      "health": "Vấn đề sức khỏe do thói quen xấu – nghiện rượu, thuốc lá, đồ ăn nhanh hoặc căng thẳng kéo dài. Cơ thể đang bị “xích” bởi chính bạn.",
      "general": "Bạn đang bị trói buộc bởi chính những xiềng xích do mình tạo ra. Nhận thức được vấn đề là bước đầu tiên – bước tiếp theo là dũng cảm cắt đứt chúng."
    },
    "reversed": {
      "love": "Bắt đầu thoát khỏi mối quan hệ độc hại, lấy lại quyền kiểm soát cảm xúc hoặc nhận ra giá trị bản thân. Con đường tự do đang mở ra.",
      "career": "Nghỉ việc độc hại, từ chối môi trường làm việc áp lực hoặc tìm được công việc phù hợp hơn với giá trị cá nhân. Bạn đang lấy lại tự do.",
      "finance": "Trả hết nợ, cắt giảm chi tiêu không cần thiết hoặc cai nghiện mua sắm. Bạn đang học cách làm chủ tiền bạc thay vì bị nó làm chủ.",
      "health": "Cai nghiện thành công, thay đổi lối sống lành mạnh hơn hoặc chữa lành các vết thương tâm lý sâu sắc. Cơ thể đang được giải phóng.",
      "general": "Giai đoạn giác ngộ và giải thoát. Xiềng xích đã được tháo gỡ – giờ là lúc bạn bước đi trên con đường của chính mình, không còn bị ràng buộc."
    }
  },
  "The Tower": {
    "upright": {
      "love": "Mối quan hệ tan vỡ đột ngột – chia tay, ly hôn hoặc một sự thật đau đớn bị phơi bày. Dù đau đớn, nhưng đây là sự sụp đổ cần thiết để xây dựng lại từ đầu.",
      "career": "Mất việc, công ty phá sản, dự án thất bại thảm hại hoặc một sự kiện bất ngờ làm đảo lộn toàn bộ sự nghiệp. Cũ kỹ phải sụp đổ để nhường chỗ cho cái mới.",
      "finance": "Mất mát tài chính nghiêm trọng – phá sản, đầu tư thất bại hoặc tài sản bị tịch thu. Nhưng sau cơn bão, bạn sẽ học được cách quản lý tốt hơn.",
      "health": "Tai nạn, đột quỵ, phẫu thuật khẩn cấp hoặc một cú sốc lớn về sức khỏe. Cơ thể đang trải qua sự thay đổi mạnh mẽ.",
      "general": "Tất cả những gì không vững chắc sẽ sụp đổ. Dù đau đớn, nhưng sự phá hủy này là cần thiết để bạn xây dựng lại một nền móng chắc chắn hơn."
    },
    "reversed": {
      "love": "Mối quan hệ đang trong giai đoạn khủng hoảng nhưng cả hai vẫn cố níu kéo. Có thể đang sống trong sự giả tạo để tránh đối mặt với sự thật.",
      "career": "Công việc vẫn tồn tại nhưng đầy bất ổn, căng thẳng và không bền vững. Bạn đang trì hoãn việc thay đổi cần thiết.",
      "finance": "Vẫn đang gánh chịu hậu quả của khủng hoảng tài chính trước đó. Nợ nần, thua lỗ vẫn đeo bám vì chưa dám đối mặt và giải quyết triệt để.",
      "health": "Sức khỏe yếu nhưng chưa được điều trị đúng cách, hoặc đang sống trong nỗi sợ hãi về bệnh tật. Cần đối diện để chữa lành.",
      "general": "Bạn đang cố gắng giữ lại một tòa tháp đã mục nát. Hãy dũng cảm để nó sụp đổ hoàn toàn – chỉ khi đó bạn mới có thể xây lại từ tro tàn."
    }
  },
  "The Star": {
    "upright": {
      "love": "Tình yêu trong sáng, đầy hy vọng và cảm hứng. Mối quan hệ này mang lại niềm tin vào tương lai, chữa lành những vết thương cũ và mở ra một chương mới đẹp đẽ.",
      "career": "Cơ hội nghề nghiệp tuyệt vời đang đến – phỏng vấn thành công, dự án được công nhận hoặc một hướng đi mới đầy triển vọng. Bạn đang tỏa sáng.",
      "finance": "Tài chính bắt đầu hồi phục sau giai đoạn khó khăn. Có thể nhận được sự giúp đỡ bất ngờ, khoản đầu tư sinh lời hoặc cơ hội kiếm tiền mới.",
      "health": "Sức khỏe được cải thiện rõ rệt, tinh thần lạc quan và cơ thể tràn đầy năng lượng. Bạn đang ở giai đoạn chữa lành toàn diện.",
      "general": "Sau cơn bão là bầu trời trong xanh. Ngôi sao hy vọng đang tỏa sáng trên đầu bạn – hãy tin vào tương lai và bước đi với niềm tin mãnh liệt."
    },
    "reversed": {
      "love": "Mối quan hệ gặp khó khăn về niềm tin, một hoặc cả hai người đang mất hy vọng. Có thể đang níu kéo một điều đã không còn ý nghĩa.",
      "career": "Mất động lực, cảm thấy công việc không còn ý nghĩa hoặc bỏ lỡ cơ hội quan trọng vì thiếu tự tin. Ngôi sao của bạn đang bị mây che khuất.",
      "finance": "Tài chính vẫn chưa ổn định, dễ bị cám dỗ bởi các khoản đầu tư rủi ro hoặc chi tiêu không cần thiết. Cần kiên nhẫn hơn.",
      "health": "Sức khỏe yếu, dễ mệt mỏi hoặc tinh thần xuống dốc. Bạn đang cần được tiếp thêm năng lượng và niềm tin.",
      "general": "Dù bóng tối đang bao trùm, hãy nhớ rằng các vì sao vẫn ở đó. Đừng từ bỏ hy vọng – ánh sáng sẽ trở lại nếu bạn kiên trì tìm kiếm."
    }
  },
  "The Moon": {
    "upright": {
      "love": "Mối quan hệ đầy bí ẩn, cảm xúc lên xuống thất thường và khó nắm bắt. Có thể có sự hiểu lầm, ảo tưởng hoặc một người đang che giấu điều gì đó.",
      "career": "Công việc không rõ ràng – thông tin mập mờ, dự án bí mật hoặc bạn đang làm việc trong môi trường đầy cạnh tranh ngầm. Hãy cẩn thận với mọi quyết định.",
      "finance": "Rủi ro tài chính cao do thiếu thông tin hoặc bị lừa dối. Không nên đầu tư lớn hoặc tin vào những lời hứa hẹn không có cơ sở.",
      "health": "Sức khỏe tinh thần bất ổn – lo âu, mất ngủ, ác mộng. Có thể có các triệu chứng không rõ nguyên nhân. Cần nghỉ ngơi và tìm sự hỗ trợ.",
      "general": "Bạn đang đi trong bóng tối, nơi mọi thứ đều mờ ảo. Đừng tin vào những gì mắt thấy – hãy lắng nghe trực giác và chờ đợi ánh sáng mặt trời."
    },
    "reversed": {
      "love": "Sự thật trong mối quan hệ dần được hé lộ. Những hiểu lầm được giải quyết, bí mật được làm sáng tỏ. Mối quan hệ đang tiến đến sự rõ ràng hơn.",
      "career": "Công việc bắt đầu rõ ràng hơn – thông tin được công khai, dự án được định hướng lại. Bạn đang thoát khỏi sự mơ hồ.",
      "finance": "Tình hình tài chính được cải thiện nhờ thông tin chính xác hơn. Các rủi ro tiềm ẩn được phát hiện và xử lý kịp thời.",
      "health": "Sức khỏe tinh thần được cải thiện, giấc ngủ ngon hơn, lo âu giảm bớt. Bạn đang tìm lại sự bình yên nội tại.",
      "general": "Bóng tối đang tan dần, sự thật đang lộ diện. Hãy tin vào trực giác của mình – bạn sắp bước ra khỏi màn sương mù để thấy rõ con đường phía trước."
    }
  },
  "The Sun": {
    "upright": {
      "love": "Tình yêu rực rỡ, vui vẻ và tràn đầy năng lượng tích cực. Mối quan hệ này mang lại hạnh phúc, tiếng cười và cảm giác được sống trọn vẹn từng ngày.",
      "career": "Công việc thuận lợi, được công nhận, thăng tiến nhanh chóng. Bạn đang ở đỉnh cao sự nghiệp, mọi thứ đều diễn ra suôn sẻ và đầy triển vọng.",
      "finance": "Tài chính dồi dào, thu nhập ổn định và có nhiều cơ hội gia tăng tài sản. Bạn đang ở giai đoạn “hái quả” sau bao nỗ lực.",
      "health": "Sức khỏe tuyệt vời, tràn đầy sức sống và năng lượng. Cơ thể và tâm trí đều ở trạng thái tốt nhất.",
      "general": "Cuộc sống đang ngập tràn ánh nắng. Hãy tận hưởng từng khoảnh khắc, lan tỏa niềm vui và biết ơn vì những điều tốt đẹp đang đến với bạn."
    },
    "reversed": {
      "love": "Mối quan hệ gặp khó khăn tạm thời – cãi vã, hiểu lầm hoặc thiếu sự kết nối. Ánh nắng bị mây che khuất, nhưng không phải mãi mãi.",
      "career": "Công việc gặp trở ngại nhỏ, bị trì hoãn hoặc thiếu sự công nhận. Bạn đang cảm thấy chán nản dù mọi thứ vẫn ổn về cơ bản.",
      "finance": "Tài chính vẫn tốt nhưng có chút bất ổn – chi phí tăng hoặc thu nhập bị chậm trễ. Cần kiên nhẫn chờ đợi.",
      "health": "Sức khỏe giảm sút tạm thời do mệt mỏi, thiếu ngủ hoặc tinh thần xuống dốc. Hãy nghỉ ngơi và lấy lại năng lượng.",
      "general": "Ánh nắng vẫn ở đó – chỉ là bị mây che khuất một chút. Đừng để những khó khăn nhỏ làm bạn mất niềm tin vào cuộc sống."
    }
  },
  "Judgement": {
    "upright": {
      "love": "Mối quan hệ bước vào giai đoạn mới – cam kết lâu dài, làm lành sau xung đột hoặc quyết định chung sống. Đây là lời kêu gọi từ trái tim để tiến tới một cấp độ sâu sắc hơn.",
      "career": "Cơ hội thăng tiến lớn, thay đổi công việc theo hướng tốt hơn hoặc được đánh giá cao về năng lực. Bạn đang được “gọi tên” để tỏa sáng.",
      "finance": "Tài chính được cải thiện nhờ quyết định đúng đắn – trả nợ, đầu tư sinh lời hoặc nhận được khoản tiền lớn từ quá khứ.",
      "health": "Hồi phục hoàn toàn sau bệnh tật, thay đổi lối sống lành mạnh hoặc đạt được mục tiêu sức khỏe. Cơ thể đang tái sinh.",
      "general": "Tiếng kèn thiên thần đang vang lên – báo hiệu sự thức tỉnh, phán xét và tái sinh. Hãy lắng nghe tiếng gọi bên trong và dũng cảm bước vào phiên bản tốt hơn của chính mình."
    },
    "reversed": {
      "love": "Do dự trong việc cam kết, né tránh trách nhiệm hoặc không thể tha thứ cho quá khứ. Mối quan hệ đang bị kẹt ở ngã ba đường.",
      "career": "Bỏ lỡ cơ hội thăng tiến do thiếu quyết đoán, tự nghi ngờ hoặc sợ thay đổi. Bạn đang tự cản trở sự phát triển của chính mình.",
      "finance": "Vấn đề tài chính kéo dài do không dám đối mặt hoặc đưa ra quyết định sai lầm. Cần nhìn nhận lại và hành động dứt khoát.",
      "health": "Sức khỏe không cải thiện do không thay đổi lối sống hoặc không tuân thủ điều trị. Bạn đang tự làm chậm quá trình hồi phục.",
      "general": "Bạn đang bỏ qua tiếng gọi của số phận. Hãy dừng lại, nhìn nhận lại cuộc đời mình và dũng cảm đưa ra những quyết định cần thiết để tiến lên."
    }
  },
  "The World": {
    "upright": {
      "love": "Mối quan hệ đạt đến sự viên mãn – hôn nhân hạnh phúc, sự gắn kết sâu sắc hoặc hoàn thành một hành trình tình cảm dài. Bạn đã tìm thấy “người bạn đời” thực sự.",
      "career": "Hoàn thành dự án lớn, đạt được mục tiêu sự nghiệp hoặc kết thúc một giai đoạn quan trọng với thành công rực rỡ. Bạn đang đứng trên đỉnh cao.",
      "finance": "Tài chính ổn định, tự do tài chính hoặc hoàn thành nghĩa vụ tài chính lớn (trả hết nợ, mua nhà, v.v.). Bạn đã đạt được sự an toàn lâu dài.",
      "health": "Sức khỏe ở trạng thái tốt nhất – cân bằng, mạnh mẽ và tràn đầy sức sống. Cơ thể và tâm trí đều ở trạng thái hoàn hảo.",
      "general": "Một chu kỳ lớn đã khép lại – và bạn đã hoàn thành nó một cách xuất sắc. Hãy tận hưởng thành quả, ăn mừng chiến thắng và sẵn sàng cho hành trình mới phía trước."
    },
    "reversed": {
      "love": "Mối quan hệ gần đạt đến đích nhưng bị trì hoãn – chưa kết hôn, chưa dọn về chung hoặc còn một bước nữa mới viên mãn. Cần kiên nhẫn hoàn thành nốt.",
      "career": "Công việc gần hoàn thành nhưng thiếu một chi tiết cuối cùng, hoặc bạn đang chần chừ không dám kết thúc. Hãy đẩy nhanh tiến độ để về đích.",
      "finance": "Tài chính ổn nhưng chưa đạt được tự do hoàn toàn – vẫn còn nợ, vẫn còn nghĩa cử hoặc chưa dám đầu tư lớn. Cần một bước cuối cùng để giải phóng.",
      "health": "Sức khỏe tốt nhưng chưa đạt 100% – vẫn còn thói quen xấu cần bỏ, hoặc cần duy trì đều đặn hơn. Đừng dừng lại khi gần đến đích.",
      "general": "Bạn đang ở rất gần với sự hoàn thành – nhưng vẫn còn một chút việc cần làm. Đừng bỏ cuộc giữa chừng. Hãy hoàn thành hành trình để bước vào chương mới."
    }
  }
};

export default tarotMeanings;