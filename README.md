# spaceapps_challenge2024

### Problem: 
In Mexico, 18.7 million hectares of land are harvested annually, with 75% of these fields relying on rainfed cultivation [1]. Around 95% of food is grown in soil, a non-renewable resource that takes nearly 1,000 years to form, and 64% of Mexico’s soil is already showing signs of degradation. Of this, 38% is caused by agricultural activities [2]. Soil erosion and degradation lead to a significant reduction in agricultural performance, cutting yields by up to 50% [3].
A key issue contributing to soil degradation is the widespread use of linear furrow patterns in farming, which accelerates soil erosion due to runoff and ecological damage. Alternative practices, such as the Keyline system, exist but are underutilized due to their complexity [1].
The Keyline system is a low-cost ploughing design that adapts to the natural topography of the land, leveraging gravity to slow and redirect water runoff. This reduces erosion and redistributes water from valleys, where erosion is most severe, to ridges [4]. When implemented, Keyline systems can improve rainfed cultivation by 125%, optimize water distribution, reduce soil erosion, and prevent pest infestations compared to traditional methods [5].
Despite its benefits, the Keyline system remains underused due to misinformation, high implementation costs—approximately $100,000 for a topographic survey in Mexico [6]—and the need to hire external companies for design services. These factors create barriers in terms of cost, complexity, and waiting time for analysis results before implementation can begin.

### Proposed Solution: 
To address these challenges, we propose a decision support system that simplifies the process of designing Keyline layouts for rainfed agriculture. By leveraging NASA's topographic data, the system integrates image processing, an algorithm to automatically determine Keylines, and a user-friendly interface to deliver results directly to farmers.

The system will utilize topographic data to cover areas of around 5.9 hectares, which is the average size of active agricultural units in Mexico [7]. Since the raw satellite data lacks the precision required for effective Keyline design, an image processing stage will be implemented to improve the quality of the .tif files, enhancing the input data by 200%.
Following this, the system's algorithm will analyze aerial topographic data to generate accurate contour lines. It will identify valleys, ridges, key points, and finally, the Keylines themselves [8].
To ensure accessibility for farmers, the output will be displayed via an intuitive graphical interface that integrates the Google Maps API. This allows users to select their area of interest, calculate the Keyline design, and view the proposed routes directly on the map. These routes will guide the machinery needed to implement the Keyline system in the field.

### Impact:
This approach significantly improves water management efficiency in rainfed agriculture, contributing to sustainable land use practices by reducing soil erosion, decreasing pest infestations, and enhancing water retention. The solution is both comprehensive and cost-effective, empowering farmers to address critical water and soil challenges while boosting agricultural productivity and resilience to environmental stress.
By simplifying the Keyline design process and reducing the costs and technical barriers associated with traditional methods, this system offers a scalable solution that can help mitigate soil degradation across Mexico’s agricultural landscape.
