// ==========================================
// IELTS VOCAB DATA
// ==========================================
// Cập nhật từ vựng ở file này, không cần động vào index.html

const VOCAB_DATA = {
    reading: {
        1: {
            inclass: {
                "Acknowledge": { ipa: "/əkˈnɒl.ɪdʒ/", meaning: "Thừa nhận, công nhận", paraphrase: "Accept or admit the existence or truth of something", type: "verb" },
                "Aggregate": { ipa: "/ˈæɡ.rɪ.ɡət/", meaning: "Tổng hợp, kết hợp", paraphrase: "A whole formed by combining several elements", type: "noun/verb" },
                "Allocate": { ipa: "/ˈæl.ə.keɪt/", meaning: "Phân bổ", paraphrase: "Distribute resources or duties for a particular purpose", type: "verb" },
                "Ambiguous": { ipa: "/æmˈbɪɡ.ju.əs/", meaning: "Mơ hồ, lưỡng nghĩa", paraphrase: "Open to more than one interpretation", type: "adjective" },
                "Amend": { ipa: "/əˈmend/", meaning: "Sửa đổi, cải thiện", paraphrase: "Make minor changes to make it fairer or more accurate", type: "verb" },
                "Analogy": { ipa: "/əˈnæl.ə.dʒi/", meaning: "Sự tương tự", paraphrase: "A comparison between two things for explanation", type: "noun" },
                "Arbitrary": { ipa: "/ˈɑː.bɪ.trər.i/", meaning: "Tùy tiện, độc đoán", paraphrase: "Based on random choice rather than reason", type: "adjective" },
                "Assemble": { ipa: "/əˈsem.bəl/", meaning: "Tập hợp, lắp ráp", paraphrase: "Gather together in one place for a common purpose", type: "verb" },
                "Attain": { ipa: "/əˈteɪn/", meaning: "Đạt được", paraphrase: "Succeed in achieving something that one desires", type: "verb" },
                "Attribute": { ipa: "/əˈtrɪb.juːt/", meaning: "Thuộc tính, quy cho", paraphrase: "Regard something as being caused by", type: "noun/verb" },
                "Bias": { ipa: "/ˈbaɪ.əs/", meaning: "Thành kiến, thiên vị", paraphrase: "Prejudice in favor of or against one thing", type: "noun" },
                "Bulk": { ipa: "/bʌlk/", meaning: "Phần lớn, số lượng lớn", paraphrase: "The mass or magnitude of something large", type: "noun" },
                "Coherent": { ipa: "/kəʊˈhɪə.rənt/", meaning: "Mạch lạc, chặt chẽ", paraphrase: "Logical and consistent", type: "adjective" },
                "Coincide": { ipa: "/ˌkəʊ.ɪnˈsaɪd/", meaning: "Trùng hợp", paraphrase: "Occur at or during the same time", type: "verb" },
                "Commodity": { ipa: "/kəˈmɒd.ə.ti/", meaning: "Hàng hóa", paraphrase: "A raw material or primary agricultural product", type: "noun" },
                "Compatible": { ipa: "/kəmˈpæt.ə.bəl/", meaning: "Tương thích", paraphrase: "Able to exist or occur together without conflict", type: "adjective" },
                "Compile": { ipa: "/kəmˈpaɪl/", meaning: "Biên soạn, thu thập", paraphrase: "Produce by assembling information from other sources", type: "verb" },
                "Complement": { ipa: "/ˈkɒm.plɪ.ment/", meaning: "Bổ sung", paraphrase: "A thing that completes or brings to perfection", type: "noun/verb" },
                "Conceive": { ipa: "/kənˈsiːv/", meaning: "Hình thành trong đầu", paraphrase: "Form or devise a plan or idea in the mind", type: "verb" },
                "Concurrent": { ipa: "/kənˈkʌr.ənt/", meaning: "Đồng thời", paraphrase: "Existing, happening, or done at the same time", type: "adjective" }
            },
            homework: {}
        },
        2: { inclass: {}, homework: {} },
        3: { inclass: {}, homework: {} },
        4: { inclass: {}, homework: {} },
        5: { inclass: {}, homework: {} },
        6: { inclass: {}, homework: {} },
        7: { inclass: {}, homework: {} }
    },
    listening: {
        1: { inclass: {}, homework: {} },
        2: { inclass: {}, homework: {} },
        3: { inclass: {}, homework: {} },
        4: { inclass: {}, homework: {} },
        5: { inclass: {}, homework: {} },
        6: { 
            inclass: {},
            homework: {
                "Straightforward": { ipa: "/ˌstreɪtˈfɔː.wəd/", meaning: "Thẳng thắn, dễ hiểu", paraphrase: "Easy to understand or simple", type: "adjective" },
                "Collate": { ipa: "/kəˈleɪt/", meaning: "Thu thập và sắp xếp", paraphrase: "Collect and arrange in proper order", type: "verb" },
                "Exhibit": { ipa: "/ɪɡˈzɪb.ɪt/", meaning: "Trưng bày", paraphrase: "Display or show publicly", type: "verb" },
                "Get sth out of the way": { ipa: "/ɡet aʊt əv ðə weɪ/", meaning: "Xử lý xong cái gì đó", paraphrase: "Complete or deal with something so it's no longer a concern", type: "phrase" },
                "Order of importance": { ipa: "/ˈɔː.dər əv ɪmˈpɔː.təns/", meaning: "Thứ tự ưu tiên", paraphrase: "Sequence based on how important things are", type: "phrase" },
                "First-hand experience": { ipa: "/ˌfɜːst ˈhænd ɪkˈspɪə.ri.əns/", meaning: "Kinh nghiệm thực tế", paraphrase: "Direct personal experience, not from others", type: "phrase" },
                "Background reading": { ipa: "/ˈbæk.ɡraʊnd ˈriː.dɪŋ/", meaning: "Đọc kiến thức nền", paraphrase: "Reading to gain foundational knowledge on a topic", type: "phrase" },
                "Settle in": { ipa: "/ˈset.əl ɪn/", meaning: "Làm quen, ổn định", paraphrase: "Become comfortable in a new situation", type: "phrasal verb" },
                "Make sense": { ipa: "/meɪk sens/", meaning: "Có lí, hợp lý", paraphrase: "Be logical or understandable", type: "phrase" },
                "Legible": { ipa: "/ˈledʒ.ə.bəl/", meaning: "Chữ rõ ràng, dễ đọc", paraphrase: "Clear enough to read", type: "adjective" },
                "Jot down": { ipa: "/dʒɒt daʊn/", meaning: "Ghi chép nhanh", paraphrase: "Write something quickly", type: "phrasal verb" },
                "Laboratory": { ipa: "/ləˈbɒr.ə.tər.i/", meaning: "Phòng thí nghiệm", paraphrase: "Room for scientific experiments and research", type: "noun" },
                "Theory": { ipa: "/ˈθɪə.ri/", meaning: "Lý thuyết, học thuyết", paraphrase: "Set of principles explaining something", type: "noun" },
                "Abide by": { ipa: "/əˈbaɪd baɪ/", meaning: "Tuân theo, chấp hành", paraphrase: "Follow or obey rules", type: "phrasal verb" },
                "Procedures": { ipa: "/prəˈsiː.dʒərz/", meaning: "Quy trình, thủ tục", paraphrase: "Established way of doing something", type: "noun" },
                "Safety glasses": { ipa: "/ˈseɪf.ti ɡlæs.ɪz/", meaning: "Kính bảo hộ", paraphrase: "Protective eyewear for safety", type: "noun" },
                "Goggles": { ipa: "/ˈɡɒɡ.əlz/", meaning: "Kính bảo hộ (ôm sát mặt)", paraphrase: "Close-fitting protective glasses", type: "noun" },
                "Hazard": { ipa: "/ˈhæz.əd/", meaning: "Mối nguy hiểm", paraphrase: "Source of danger", type: "noun" },
                "Trainers": { ipa: "/ˈtreɪ.nərz/", meaning: "Giày thể thao", paraphrase: "Athletic or sports shoes", type: "noun" },
                "Thorough": { ipa: "/ˈθʌr.ə/", meaning: "Kỹ lưỡng, tỉ mỉ", paraphrase: "Complete and careful", type: "adjective" }
            }
        },
        7: { inclass: {}, homework: {} },
        8: { inclass: {}, homework: {} }
    }
};
