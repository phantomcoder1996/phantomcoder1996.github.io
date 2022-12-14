/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [

  {
    title: "Unsupervised Fine-Tuning Data Selection for ASR Using Self-Supervised Speech Models",
    url: "https://arxiv.org/abs/2212.01661",
    authors:
      "Reem Gody, David Harwath",
    conferences:
      "Submitted to ICASSP 2023",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/test-other.png",
    citation: {
      vancouver:
        "Gody R, Harwath D. Unsupervised Fine-Tuning Data Selection for ASR Using Self-Supervised Speech Models. arXiv preprint arXiv:2212.01661. 2022 Dec 3.",
    },
    abstract:
      "Self-supervised learning (SSL) has been able to leverage unlabeled data to boost the performance of automatic speech recognition (ASR) models when we have access to only a small amount of transcribed speech data. However, this raises the question of which subset of the available unlabeled data should be selected for transcription. Our work investigates different unsupervised data selection techniques for fine-tuning the HuBERT model under a limited transcription budget. We investigate the impact of speaker diversity, gender bias, and topic diversity on the downstream ASR performance. We also devise two novel techniques for unsupervised data selection: pre-training loss based data selection and the perplexity of byte pair encoded clustered units (PBPE) and we show how these techniques compare to pure random data selection. Finally, we analyze the correlations between the inherent characteristics of the selected fine-tuning subsets as well as how these characteristics correlate with the resultant word error rate. We demonstrate the importance of token diversity, speaker diversity, and topic diversity in achieving the best performance in terms of WER.",
    absbox: "absPopup1",
  },
  {
    title: "AnimaChaotic: AI-based Automatic Conversion of Children’s Stories to Animated 3D Videos",
    url:"https://www.scitepress.org/Papers/2022/108151/108151.pdf",
    authors:
      "Reem Abdel-Salam, Reem Gody, Mariam Maher, Hagar Hosny and Ahmed S. Kaseb",
    conferences:
      "Proceedings of the 14th International Conference on Agents and Artificial Intelligence",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/AC.png",
    citation: {
      vancouver:
        "Abdel-Salam R, Gody R, Maher M, Hosny H, Kaseb AS. AnimaChaotic: AI-based Automatic Conversion of Children's Stories to Animated 3D Videos. InICAART (2) 2022 (pp. 226-235).",
    },
    abstract:
      "Stories are an effective and entertaining way of teaching children about real-life experiences in an engaging way. Although many children’s stories are supplemented with graphical illustrations, having animated 3D video illustrations can effectively boost the learning process, especially for visual learners. However, produc- ing animated 3D videos is a hard, expensive, and time-consuming process, so there is a need to automate this process. In this paper, we introduce AnimaChaotic, a story visualization system designed to automatically convert children’s short stories to animated 3D videos by leveraging Artificial Intelligence (AI) and computer graphics. Our Natural Language Processing (NLP) pipeline extracts visualizable information from the story such as actors and actions. Then, our object positioning algorithm determines the initial positions of the ob- jects in the scene. Finally, the system animates the scene using different techniques including AI behaviors. A quantitative analysis of our system demonstrates a high precision and recall in extracting visualizable in- formation. It also shows that our system outperforms existing solutions in terms of static scene generation. A qualitative analysis of the system shows that its output is visually acceptable and outperforms similar solutions.",
    absbox: "absPopup1",
  },

  // {
  //   title: "A Call for More Rigor in Unsupervised Cross-lingual Learning",
  //   authors:
  //     "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup2",
  //   image: "assets/images/research-page/crossLingual.png",
  //   citation: {
  //     vancouver:
  //       "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 2",
  //   absbox: "absPopup2",
  // },

  // {
  //   title:
  //     "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
  //   authors: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup3",
  //   image: "assets/images/research-page/wordRepresentation.png",
  //   citation: {
  //     vancouver:
  //       "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 3",
  //   absbox: "absPopup3",
  // },

  // {
  //   title:
  //     "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
  //   authors:
  //     "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup4",
  //   image: "assets/images/research-page/dialogueState.png",
  //   citation: {
  //     vancouver:
  //       "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 4",
  //   absbox: "absPopup4",
  // },

  // {
  //   title: "Dual Super-Resolution Learning for Semantic Segmentation",
  //   authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup5",
  //   image: "assets/images/research-page/semanticSegmentation.png",
  //   citation: {
  //     vancouver:
  //       "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 5",
  //   absbox: "absPopup5",
  // },

  // {
  //   title: "Deep Unfolding Network for Image Super-Resolution",
  //   authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup6",
  //   image: "assets/images/research-page/deepNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 6",
  //   absbox: "absPopup6",
  // },

  // {
  //   title:
  //     "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
  //   authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup7",
  //   image: "assets/images/research-page/imageDecomposition.png",
  //   citation: {
  //     vancouver:
  //       "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 7",
  //   absbox: "absPopup7",
  // },
  // {
  //   title:
  //     "Forward and Backward Information Retention for Accurate Binary Neural Networks",
  //   authors:
  //     "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup8",
  //   image: "assets/images/research-page/neuralNetworks.jpg",
  //   citation: {
  //     vancouver:
  //       "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 8",
  //   absbox: "absPopup8",
  // },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      url,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${url}" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
