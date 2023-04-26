library(rmarkdown)

# file.copy("docs/web_pages/about.md", "scripts/template/cv_lzhshou.md", overwrite=TRUE)
cv_word <- readLines("docs/cv/cv_lzhshou.md")
cv_word[stringr::str_detect(cv_word, "Curriculum Vitae")] <- "*Curriculum Vitae*"
writeLines(unlist(cv_word), "scripts/template/cv_lzhshou.md")

## PDF
rmarkdown::render("scripts/template/cv_lzhshou.md", output_format = "pdf_document")
file.copy("scripts/template/cv_lzhshou.pdf", "docs/cv/cv_lzhshou.pdf", overwrite=TRUE)

## Word
rmarkdown::render("scripts/template/cv_lzhshou.md", output_format = "word_document")
file.copy("scripts/template/cv_lzhshou.docx", "docs/cv/cv_lzhshou.docx", overwrite=TRUE)
