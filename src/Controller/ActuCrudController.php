<?php

namespace App\Controller;

use App\Entity\Actu;
use App\Form\ActuType;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/actu/crud')]
class ActuCrudController extends AbstractController
{
    public static function getEntityFqcn(): string
    {
        return Actu::class;
    }

    #[Route('/', name: 'app_actu_crud_index', methods: ['GET'])]
    #[IsGranted('ROLE_ADMIN')]
    public function all_actu(EntityManagerInterface $em): Response
    {
        return $this->render('actu_crud/index.html.twig', [
            'actus' => $em->getRepository(Actu::class)->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_actu_crud_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $actu = new Actu();
        $form = $this->createForm(ActuType::class, $actu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($actu);
            $entityManager->flush();

            return $this->redirectToRoute('app_actu_crud_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('actu_crud/new.html.twig', [
            'actu' => $actu,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_actu_crud_show', methods: ['GET'])]
    public function show(Actu $actu): Response
    {
        return $this->render('actu_crud/show.html.twig', [
            'actu' => $actu,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_actu_crud_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Actu $actu, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ActuType::class, $actu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_actu_crud_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('actu_crud/edit.html.twig', [
            'actu' => $actu,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_actu_crud_delete', methods: ['POST'])]
    public function delete(Request $request, Actu $actu, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$actu->getId(), $request->request->get('_token'))) {
            $entityManager->remove($actu);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_actu_crud_index', [], Response::HTTP_SEE_OTHER);
    }
}
